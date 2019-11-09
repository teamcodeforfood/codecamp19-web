import React, { useEffect } from "react";
import styled from "styled-components";
import { Density, Input, Color, Surface, ListItem } from "amino-ui";
import { useInput } from "react-hanger";
import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";
import { useSelector } from "react-redux";

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

export const TeamCode = ({ eventId }) => {
  const teamCode = useInput("");

  const { data: team, error } = useSWR(
    `${process.env.REACT_APP_API_URL}/events/${eventId}/teams/${teamCode.value}`,
    fetcher
  );

  const joinTeam = async id => {
    // TODO: check if team is full
    const response = await fetcher(
      `${process.env.REACT_APP_API_URL}/events/${eventId}/teams/joinTeam`,
      {
        body: JSON.stringify({
          team_id: team.id,
          user_id: user.id
        })
      }
    );
  };

  return (
    <Wrapper>
      <Input
        spellCheck={false}
        label="Have a team code?"
        placeholder="00000000"
        {...teamCode}
      />

      {team && team.name ? (
        <Team>
          <ListItem
            onClick={() => joinTeam(team.id)}
            icon="/images/join-team.svg"
            label={`Join team ${team.name}`}
          />
        </Team>
      ) : null}
    </Wrapper>
  );
};
