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
import { Back } from "../Layout/Back";

export const EventAdmin = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const goto = url => dispatch(push(url));

  const { data: event } = useSWR(
    `${process.env.REACT_APP_API_URL}/events/${id}`,
    fetcher
  );
  const { data: owner } = useSWR(
    () => `${process.env.REACT_APP_API_URL}/users/${event.owner_user_id}`,
    fetcher
  );
  const { data: teams } = useSWR(
    () => `${process.env.REACT_APP_API_URL}/events/${id}/teams`,
    fetcher
  );
  const { data: divisions } = useSWR(
    () => `${process.env.REACT_APP_API_URL}/events/${id}/divisions`,
    fetcher
  );

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [maxTeamSize, setMaxTeamSize] = useState("");
  const [savingDetails, setSavingDetails] = useState(false);

  useEffect(() => {
    if (event) {
      setName(event.name || "");
      setDescription(event.description || "");
      setLocation(event.location || "");
      setStartTime(event.starts_at || "");
      setEndTime(event.ends_at || "");
      setMaxTeamSize(event.max_team_size || "");
    }
  }, [event]);

  const saveEventDetails = async () => {
    setSavingDetails(true);

    try {
      const response = await fetcher(
        `${process.env.REACT_APP_API_URL}/events/${id}`,
        {
          method: "PATCH",
          body: JSON.stringify({
            name,
            description,
            location,
            starts_at: startTime,
            ends_at: endTime,
            max_team_size: maxTeamSize
          })
        }
      );

      if (response) {
        toaster.success("Event details updated successfully");
      } else {
        toaster.danger("Couldn't update event details");
      }
    } catch (e) {
      toaster.danger("Couldn't update event details");
    }

    setSavingDetails(false);
  };

  const teamsList =
    teams &&
    teams.teams &&
    teams.teams.map((team, index) => (
      <ListItem
        icon="/images/team-icon.svg"
        key={index}
        label={team.name}
        onClick={() => {}}
      />
    ));

  const divisionsList =
    divisions &&
    divisions.divisions &&
    divisions.divisions.map((division, index) => (
      <ListItem
        icon="/images/division-icon.svg"
        key={index}
        label={division.name}
        subtitle={division.description}
        onClick={() => goto(`/events/${id}/divisions/${division.id}`)}
      />
    ));

  if (!event || !owner)
    return (
      <LoadingLayout>
        <Spinner />
      </LoadingLayout>
    );

  return (
    <>
      <AppHeader />
      <ResponsiveContainer>
        <Back label={event.name} url={`/events/${id}`} />
        <CardStack>
          <Card
            cardTitle="Event info"
            actions={
              <Button
                disabled={savingDetails || !event}
                saving={savingDetails}
                intent={Intent.Primary}
                onClick={saveEventDetails}
              >
                Save details
              </Button>
            }
          >
            <InputGroup>
              <Input
                label="Event name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <Input
                label="Event description"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
              <Input
                label="Event address"
                value={location}
                onChange={e => setLocation(e.target.value)}
              />

              {/*TODO: timepicker*/}
              <Input
                label="Start time"
                value={startTime}
                onChange={e => setStartTime(e.target.value)}
              />
              <Input
                label="End time"
                value={endTime}
                onChange={e => setEndTime(e.target.value)}
              />

              <Input
                label="Maximum team size"
                value={maxTeamSize}
                onChange={e => setMaxTeamSize(e.target.value)}
              />
            </InputGroup>
          </Card>

          <Card cardTitle="Teams">
            <List>{teamsList}</List>
          </Card>

          <Card
            cardTitle="Divisions"
            actions={
              <Button
                intent={Intent.Primary}
                onClick={() => goto(`/events/${id}/divisions/new`)}
              >
                Create new division
              </Button>
            }
          >
            <List>{divisionsList}</List>
          </Card>

          <Card cardTitle="Judges"></Card>
        </CardStack>
      </ResponsiveContainer>
    </>
  );
};
