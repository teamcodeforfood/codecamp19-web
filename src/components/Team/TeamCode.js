import React, { useEffect } from "react";
import styled from "styled-components";
import { Density, Input, Color, Surface, ListItem } from "amino-ui";
import { useInput } from "react-hanger";
import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";
import jwtDecode from "jwt-decode";
import { Dialog } from "../Layout/Dialog";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  input {
    flex: 1;
    font-size: 40px;
    display: flex;
    height: 80px;
    text-align: center;
    font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;
  }
`;

const Team = styled.div`
  border: 1px solid ${Color.gray.light};
  border-radius: ${Surface.radius.base};
  margin-top: ${Density.spacing.md};
  padding: ${Density.spacing.md};
`;

export const TeamCode = ({ eventId, onClose, open, title }) => {
  const teamCode = useInput("");

  const { data: team } = useSWR(
    `${process.env.REACT_APP_API_URL}/events/${eventId}/teams/${teamCode.value}`,
    fetcher
  );
  const { data: event } = useSWR(
    `${process.env.REACT_APP_API_URL}/events/${eventId}`,
    fetcher
  );
  const { data: teamParticipants } = useSWR(
    () =>
      `${process.env.REACT_APP_API_URL}/events/${eventId}/teams/${team.id}/participants`,
    fetcher
  );

  const joinTeam = async id => {
    // TODO: check if team is full
    const token = jwtDecode(localStorage.getItem("token"));

    const response = await fetcher(
      `${process.env.REACT_APP_API_URL}/events/${eventId}/teams/joinTeam`,
      {
        method: "POST",
        body: JSON.stringify({
          team_id: id,
          user_id: token.user.id
        })
      }
    );

    if (response) {
      // it worked
      alert("you're in!");
      onClose();
    }
  };

  return (
    <Dialog open={open} label={title} onClose={onClose}>
      <Wrapper>
        <Input
          spellCheck={false}
          label="Have a team code?"
          placeholder="00000000"
          {...teamCode}
        />

        {team && team.name && event && teamParticipants ? (
          <Team>
            <ListItem
              onClick={() => joinTeam(team.id)}
              icon="/images/join-team.svg"
              label={`Join team ${team.name}`}
              subtitle={`${teamParticipants.length} out of ${event.max_team_size}`}
            />
          </Team>
        ) : null}
      </Wrapper>
    </Dialog>
  );
};
