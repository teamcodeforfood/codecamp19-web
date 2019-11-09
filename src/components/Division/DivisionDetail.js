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
                // disabled={savingDetails || !event}
                // saving={savingDetails}
                intent={Intent.Primary}
                // onClick={saveEventDetails}
              >
                Save details
              </Button>
            }
          ></Card>
          <Card
            cardTitle="Categories"
            actions={
              <Button
              // disabled={savingDetails || !event}
              // saving={savingDetails}
              // onClick={saveEventDetails}
              >
                Create category
              </Button>
            }
          ></Card>
        </CardStack>
      </ResponsiveContainer>
    </>
  );
};
