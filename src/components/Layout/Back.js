import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Density, Color } from "amino-ui";
import { BackIcon } from "../../icons/BackIcon";

const StyledLink = styled(Link)`
  margin-bottom: ${Density.spacing.md};
  text-decoration: none;
  display: flex;
  max-width: 400px;
  flex-direction: row;
  align-items: center;
  transition: all 100ms ease-in-out;
  opacity: 0.7;
  font-weight: 500;
  color: ${Color.text.base};

  &:hover {
    opacity: 1;
  }

  svg {
    fill: ${Color.text.veryLight};
    width: 17px;
    height: 17px;
    margin-right: ${Density.spacing.xs};
  }
`;

export const Back = ({ url, label }) => {
  return (
    <StyledLink to={url}>
      <BackIcon />
      {label}
    </StyledLink>
  );
};
