import React, { useEffect } from "react";
import styled from "styled-components";
import { Density, Input } from "amino-ui";
import { useInput } from "react-hanger";
import useSWR from "swr/dist/use-swr";
import { fetcher } from "../../utils/fetcher";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    font-size: 40px;
    display: flex;
    height: 80px;
    text-align: center;
    font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;
  }
`;

export const TeamCode = () => {
  const teamCode = useInput("");

  const { team, error } = useSWR(
    `${process.env.REACT_APP_API_URL}/teams/${teamCode.value}`,
    fetcher
  );

  useEffect(() => {
    console.log(team);
  }, [team]);

  return (
    <Wrapper>
      <Input
        autoComplete={false}
        spellCheck={false}
        label="Have a team code?"
        placeholder="00000000"
        {...teamCode}
      />
    </Wrapper>
  );
};
