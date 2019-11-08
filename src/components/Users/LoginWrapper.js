import styled from "styled-components";
import { Density } from "amino-ui";

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  flex-direction: column;

  section {
    width: 400px;
    display: block;
    flex: 0;
  }

  button {
    display: block;
    width: 100%;
    margin-top: ${Density.spacing.lg};
  }
  
 img {
    margin-bottom: ${Density.spacing.lg};
  }
`;
