import React from "react";
import styled from "styled-components";
import { Density, AppBar, ResponsiveContainer } from "amino-ui";
import { Logo } from "./Logo";

const HeaderLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Nav = styled.nav`
  flex: 1;
  justify-content: center;

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
  }

  li {
    display: inline-block;
    margin: 0 ${Density.spacing.sm};
  }
`;

const User = styled.div`
  flex: 1;
  justify-content: flex-end;
  display: flex;
`;

const Brand = styled.div`
  flex: 1;
`;

export const AppHeader = () => (
  <AppBar>
    <ResponsiveContainer>
      <HeaderLayout>
        <Brand>
          <Logo />
        </Brand>
        <Nav>
          <ul>
            <li>
              <a href="#">page</a>
            </li>
            <li>
              <a href="#">page</a>
            </li>
            <li>
              <a href="#">page</a>
            </li>
            <li>
              <a href="#">page</a>
            </li>
          </ul>
        </Nav>
        <User>
          <img src="//placehold.it/32x32" alt="" />
        </User>
      </HeaderLayout>
    </ResponsiveContainer>
  </AppBar>
);
