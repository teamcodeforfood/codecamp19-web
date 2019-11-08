import React from "react";
import styled from "styled-components";
import { Density, Input } from "amino-ui";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: -${Density.spacing.sm};
  margin-right: -${Density.spacing.sm};

  input {
    flex: 1;
    margin: 0 ${Density.spacing.sm};
    font-size: 40px;
    display: flex;
    height: 80px;
    text-align: center;
    font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;
  }
`;

export const TeamCode = () => {
  return (
    <Wrapper>
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </Wrapper>
  );
};
