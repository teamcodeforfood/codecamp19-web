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
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";

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
import jwtDecode from "jwt-decode";
import { push } from "connected-react-router";

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

const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${Density.spacing.sm};

  &:last-of-type {
    margin-bottom: 0;
  }

  img {
    width: 32px;
    height: 32px;
    margin-right: ${Density.spacing.xs};
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
  const dispatch = useDispatch();
  const goto = url => dispatch(push(url));
  const user = useSelector(state => state.user);
  const token = jwtDecode(localStorage.getItem("token"));
  const { id } = useParams();

  const [teamId, setTeamId] = useState(0);

  const { data: event } = useSWR(
    `${process.env.REACT_APP_API_URL}/events/${id}`,
    fetcher
  );
  const { data: owner } = useSWR(
    () => `${process.env.REACT_APP_API_URL}/users/${event.owner_user_id}`,
    fetcher
  );
  const { data: participants } = useSWR(
    `${process.env.REACT_APP_API_URL}/events/${id}/participants`,
    fetcher
  );
  const { data: team } = useSWR(
    () => `${process.env.REACT_APP_API_URL}/events/${id}/teams/${teamId}`,
    fetcher
  );

  useEffect(() => {
    if (participants) {
      const participant = participants.users
        .filter(participant => participant.user_id === token.user.id)
        .pop();

      if (participant) {
        setTeamId(participant.team_id);
      }
    }
  }, [participants]);

  const isRegistered = () => {
    if (!participants) {
      return false;
    }

    return participants.users.filter(
      participant => participant.user_id === token.user.id
    ).length;
  };

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
                  <Button onClick={() => goto(`/events/${id}/admin`)}>
                    Admin
                  </Button>
                ) : null}
                {!isRegistered() ? (
                  <Button intent={Intent.Primary} onClick={() => setOpen(true)}>
                    Sign up for this event
                  </Button>
                ) : null}
              </Actions>
            </Meta>

            <Heading size={500} marginTop="0">
              About this event
            </Heading>
            <span>{event.description}</span>

            <Divider />

            {/*<br />*/}

            {/*<Heading size={500} marginTop="0">*/}
            {/*  Location*/}
            {/*</Heading>*/}
            {/*<span>{event.location}</span>*/}

            <Info>
              <img src="/images/date-icon.svg" />
              <span>
                Starts at{" "}
                {format(new Date(event.starts_at), "MM/dd/yyyy h:mm a")}
              </span>
            </Info>

            <Info>
              <img src="/images/date-icon.svg" />
              <span>
                Ends at {format(new Date(event.starts_at), "MM/dd/yyyy h:mm a")}
              </span>
            </Info>

            <Info>
              <img src="/images/team-icon.svg" />
              <span>Up to {event.max_team_size} members per team</span>
            </Info>
          </Card>

          {team && isRegistered() ? (
            <Card cardTitle="Registration info">
              <List>
                <ListItem
                  icon="/images/join-team.svg"
                  label={`Member of ${team.name}`}
                  onClick={() => {}}
                />
              </List>
            </Card>
          ) : null}
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

      <TeamCode
        eventId={id}
        title={`Join existing team for ${event.name}`}
        open={joinTeam}
        onClose={() => setJoinTeam(false)}
      />

      <CreateTeam
        title={`Create new team for ${event.name}`}
        open={createTeam}
        onClose={() => setCreateTeam(false)}
        eventId={id}
      />
    </>
  );
};
