import styled from "styled-components";
import { Density } from "amino-ui";

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  section {
    max-width: 400px;
  }

  button {
    display: block;
    width: 100%;
    margin-top: ${Density.spacing.lg};
  }
`;
