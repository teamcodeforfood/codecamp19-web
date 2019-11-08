import styled from "styled-components";
import { Color, Density } from "amino-ui";

export const Divider = styled.hr`
  margin: ${Density.spacing.md} -${Density.spacing.md};
  border: 0;
  border-top: 1px solid ${Color.gray.light};
`;
