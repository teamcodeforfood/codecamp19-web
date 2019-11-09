import React from "react";
import styled from "styled-components";

import { Text, TextStyle, Color } from "amino-ui";

const StyledCard = styled.section`
  background: white;
  border: 0;
  border-radius: ${p => p.theme.Surface.radius.base};
  padding: ${props => props.theme.Density.spacing.md};
  display: flex;
  flex: 1;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 5px 10px 0px;
`;

const Header = styled.header`
  box-sizing: border-box;
  display: flex;
  height: 64px;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${p => p.theme.Color.gray.light};
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
