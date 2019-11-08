import React from "react";
import styled from "styled-components";

import { Text, TextStyle, Color } from "amino-ui";

const StyledCard = styled.section`
  background: white;
  border-radius: ${p => p.theme.Surface.radius.base};
  padding: ${props => props.theme.Density.spacing.md};
  border: 1px solid ${Color.gray.base};
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Header = styled.header`
  box-sizing: border-box;
  display: flex;
  height: 64px;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${p => p.theme.Color.gray.base};
  margin: -${props => props.theme.Density.spacing.md};
  margin-bottom: ${props => props.theme.Density.spacing.md};
  padding: 0 ${props => props.theme.Density.spacing.md};

  .title {
    flex: 1;
    display: flex;
    align-items: center;
  }
`;

export const Card = ({ children, actions, cardTitle }) => {
  const headerVisible =
    Boolean(cardTitle) || (Boolean(actions) && Boolean(cardTitle));

  const cardHeader = (
    <Header>
      <div className="title">
        <Text style={TextStyle.Heading1}>{cardTitle}</Text>
      </div>
      {actions && actions}
    </Header>
  );

  return (
    <StyledCard>
      {headerVisible && cardHeader}
      {children}
    </StyledCard>
  );
};
