import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardStack,
  ResponsiveContainer,
  Density,
  Surface,
  Intent
} from "amino-ui";
import Geopattern from "geopattern";
import { Heading } from "evergreen-ui";

import { AppHeader } from "../Layout/AppHeader";
import { Dialog } from "../Layout/Dialog";

const Header = styled.div`
  height: 150px;
  background: ${p => p.background};
  margin: -${Density.spacing.md};
  margin-bottom: 0;
  border-top-left-radius: ${Surface.radius.base};
  border-top-right-radius: ${Surface.radius.base};
`;

const Meta = styled.div`
  background: white;
  border-radius: ${Surface.radius.base};
  margin-top: -50px;
  padding: ${Density.spacing.md};
  box-shadow: ${Surface.shadow.high};
  margin-bottom: ${Density.spacing.lg};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
`;

export const EventDetail = () => {
  const { id } = useParams();

  const [open, setOpen] = useState(false);

  return (
    <>
      <AppHeader />
      <ResponsiveContainer>
        <CardStack>
          <Card>
            <Header
              background={Geopattern.generate(
                "southern utah codecamp 2019"
              ).toDataUrl()}
            />
            <Meta>
              <Left>
                <Heading size={900} marginTop="0">
                  Event {id}
                </Heading>
                event by ORGANIZER NAME
              </Left>

              <Button intent={Intent.Primary} onClick={() => setOpen(true)}>
                Sign up for this event
              </Button>
            </Meta>

            <Heading size={500} marginTop="0">
              About this event
            </Heading>
            <span>its a cool event</span>

            <br />

            <Heading size={500} marginTop="0">
              Location
            </Heading>
            <span>123 Sesame Street</span>
          </Card>
          <Card cardTitle="Map">map</Card>
        </CardStack>
      </ResponsiveContainer>
      <Dialog open={open} label="Dialog title" onClose={() => setOpen(false)}>
        Dialog content
      </Dialog>
    </>
  );
};
