import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  CardStack,
  Density,
  Surface,
  Intent,
  Input,
  ListItem,
  List,
  Spinner,
  InputGroup
} from "amino-ui";
import useSWR from "swr";

import { AppHeader } from "../Layout/AppHeader";
import { Card } from "../Layout/Card";
import { fetcher } from "../../utils/fetcher";
import { LoadingLayout } from "../Layout/LoadingLayout";
import { ResponsiveContainer } from "../Layout/ResponsiveContainer";
import { toaster } from "evergreen-ui";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

export const DivisionDetail = () => {
  const { id, division_id } = useParams();
  const dispatch = useDispatch();
  const goto = url => dispatch(push(url));

  const { data: division } = useSWR(
    `${process.env.REACT_APP_API_URL}/events/${id}/divisions/${division_id}`,
    fetcher
  );

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [savingDetails, setSavingDetails] = useState(false);

  useEffect(() => {
    if (division && division.division) {
      setName(division.division.name || "");
      setDescription(division.division.description || "");
    }
  }, [division]);

  const saveDivisionDetails = async () => {
    setSavingDetails(true);

    try {
      if (division_id !== "new") {
        const response = await fetcher(
          `${process.env.REACT_APP_API_URL}/events/${id}/divisions/${division_id}`,
          {
            method: "PATCH",
            body: JSON.stringify({
              name,
              description
            })
          }
        );

        if (response) {
          toaster.success("Division details updated successfully");
        } else {
          toaster.danger("Couldn't update division details");
        }
      } else {
        const response = await fetcher(
          `${process.env.REACT_APP_API_URL}/events/${id}/divisions`,
          {
            method: "POST",
            body: JSON.stringify({
              name,
              description,
              event_id: id
            })
          }
        );

        if (response) {
          toaster.success("Division created successfully");
          goto(`/events/${id}/divisions/${response.division.id}`);
        } else {
          toaster.danger("Couldn't create division");
        }
      }
    } catch (e) {
      toaster.danger("Couldn't create division");
    }

    setSavingDetails(false);
  };

  if (!division)
    return (
      <LoadingLayout>
        <Spinner />
      </LoadingLayout>
    );

  return (
    <>
      <AppHeader />
      <ResponsiveContainer>
        <CardStack>
          <Card
            cardTitle="Division info"
            actions={
              <Button
                disabled={savingDetails || !division}
                saving={savingDetails}
                intent={Intent.Primary}
                onClick={() => saveDivisionDetails()}
              >
                Save details
              </Button>
            }
          >
            <InputGroup>
              <Input
                label="Name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <Input
                label="Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </InputGroup>
          </Card>

          {division_id !== "new" ? (
            <Card
              cardTitle="Categories"
              actions={<Button>Create category</Button>}
            ></Card>
          ) : null}
        </CardStack>
      </ResponsiveContainer>
    </>
  );
};
