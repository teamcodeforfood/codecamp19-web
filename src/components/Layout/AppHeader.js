import React from "react";
import styled from "styled-components";
import { Density, AppBar, ResponsiveContainer } from "amino-ui";
import Gravatar from "react-awesome-gravatar";
import {Logo} from "./Logo";

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
  }

  a {
    margin: 0 ${Density.spacing.sm};
    display: inline-block;
    height: 72px;
    line-height: 72px;
    text-decoration: none;
    color: inherit;
    font-weight: 500;
    opacity: 0.8;
    transition: all 150ms ease-in-out;
    border-bottom: 3px solid transparent;
    box-sizing: border-box;
  }

  a:hover {
    opacity: 1;
  }

  a.active {
    border-bottom: 3px solid #448fe1;
    color: #448fe1;
    opacity: 1;
  }
`;

const User = styled.div`
  flex: 1;
  justify-content: flex-end;
  display: flex;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
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
              <a href="#" className="active">
                Overview
              </a>
            </li>
            <li>
              <a href="#">Teams</a>
            </li>
            <li>
              <a href="#">Scoring</a>
            </li>
            <li>
              <a href="#">Judges</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
          </ul>
        </Nav>
        <User>
          <Gravatar email={"hello@joshbeitler.com"}>
            {url => <img src={url} alt="Profile picture" />}
          </Gravatar>
        </User>
      </HeaderLayout>
    </ResponsiveContainer>
  </AppBar>
);
