import React, { useEffect, useState } from "react";
import styled from "styled-components";
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
  Spinner
} from "amino-ui";
import Geopattern from "geopattern";
import { Heading } from "evergreen-ui";
import useSWR from "swr";

import { AppHeader } from "../Layout/AppHeader";
import { Dialog } from "../Layout/Dialog";
import { isAuthenticated } from "../../utils/isAuthenticated";
import { Card } from "../Layout/Card";
import { TeamCode } from "../Team/TeamCode";
import { Divider } from "../Layout/Divider";
import { fetcher } from "../../utils/fetcher";
import { LoadingLayout } from "../Layout/LoadingLayout";
import { CreateTeam } from "../Team/CreateTeam";
import { ResponsiveContainer } from "../Layout/ResponsiveContainer";
import { useSelector } from "react-redux";

const Header = styled.div`
  height: 200px;
  background: ${p => p.background};
  margin: -${Density.spacing.md};
  margin-bottom: 0;
  border-top-left-radius: ${Surface.radius.base};
  border-top-right-radius: ${Surface.radius.base};
`;

const Actions = styled.div`
  display: flex;
  flex-direction: row;

  button {
    margin-left: ${Density.spacing.sm};
  }
`;

const Meta = styled.div`
  background: white;
  border-radius: ${Surface.radius.base};
  margin-top: -50px;
  padding: ${Density.spacing.md};
  box-shadow: ${Surface.shadow.high};
  margin-bottom: ${Density.spacing.lg};
  display: flex;
  flex-direction: row;
  align-items: center;

  h2 {
    margin-bottom: ${Density.spacing.sm};
    display: block;
  }
`;

const Left = styled.div`
  flex: 1;
`;

export const EventDetail = () => {
  const user = useSelector(state => state.user);
  const { id } = useParams();
  const { data: event } = useSWR(
    `${process.env.REACT_APP_API_URL}/events/${id}`,
    fetcher
  );
  const { data: owner } = useSWR(
    () => `${process.env.REACT_APP_API_URL}/users/${event.owner_user_id}`,
    fetcher
  );

  const [open, setOpen] = useState(false);
  const [createTeam, setCreateTeam] = useState(false);
  const [joinTeam, setJoinTeam] = useState(false);

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
        <CardStack>
          <Card>
            <Header background={Geopattern.generate(event.name).toDataUrl()} />
            <Meta>
              <Left>
                <Heading size={900} marginTop="0">
                  {event.name}
                </Heading>
                Created by {owner.user.email}
              </Left>

              <Actions>
                {user.role === "admin" ? (
                  <Button onClick={() => {}}>Admin</Button>
                ) : null}
                <Button intent={Intent.Primary} onClick={() => setOpen(true)}>
                  Sign up for this event
                </Button>
              </Actions>
            </Meta>

            <Heading size={500} marginTop="0">
              About this event
            </Heading>
            <span>{event.description}</span>

            <br />

            <Heading size={500} marginTop="0">
              Location
            </Heading>
            <span>{event.location}</span>

            <br />

            <Heading size={500} marginTop="0">
              Starts at
            </Heading>
            <span>{event.starts_at}</span>

            <br />

            <Heading size={500} marginTop="0">
              Ends at
            </Heading>
            <span>{event.ends_at}</span>

            <br />

            <Heading size={500} marginTop="0">
              Max team size
            </Heading>
            <span>{event.max_team_size}</span>
          </Card>
        </CardStack>
      </ResponsiveContainer>
      <Dialog
        open={open}
        label={`Register for ${event.name}`}
        onClose={() => setOpen(false)}
      >
        {isAuthenticated() ? (
          <List>
            <ListItem
              icon="/images/join-team.svg"
              onClick={() => {
                setOpen(false);
                setJoinTeam(true);
              }}
              label="Join an existing team"
              subtitle="Already have a team? Select this option to join it."
            />
            <ListItem
              icon="/images/create-team.svg"
              onClick={() => {
                setOpen(false);
                setCreateTeam(true);
              }}
              label="Create a new team"
              subtitle="Don't have a team or looking to start a new one? Select this option."
            />
          </List>
        ) : (
          <>register</>
        )}
      </Dialog>

      {/*TODO: move dialog into TeamCode*/}
      <Dialog
        open={joinTeam}
        label={`Join a team for ${event.name}`}
        onClose={() => setJoinTeam(false)}
      >
        <TeamCode eventId={id} />
      </Dialog>

      <CreateTeam
        title={`Create new team for ${event.name}`}
        open={createTeam}
        onClose={() => setCreateTeam(false)}
        eventId={id}
      />
    </>
  );
};
