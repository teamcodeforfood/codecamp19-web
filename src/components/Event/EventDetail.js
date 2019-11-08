import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import {
  Button,
  CardStack,
  ResponsiveContainer,
  Density,
  Surface,
  Intent,
  Input,
  ListItem,
  List
} from "amino-ui";
import Geopattern from "geopattern";
import { Heading } from "evergreen-ui";
import useSWR from "swr";

import { AppHeader } from "../Layout/AppHeader";
import { Dialog } from "../Layout/Dialog";
import { isAuthenticated } from "../../utils/isAuthenticated";
import { Card } from "../Layout/Card";
import { TeamCode } from "../Team/TeamCode";
import { Divider } from "../Layout/Divider";
import { fetcher } from "../../utils/fetcher";

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

  h2 {
    margin-bottom: ${Density.spacing.sm};
    display: block;
  }
`;

const Left = styled.div`
  flex: 1;
`;

export const EventDetail = () => {
  const { id } = useParams();
  const { data, error } = useSWR(
    `${process.env.REACT_APP_API_URL}/events/${id}`,
    fetcher
  );

  const [open, setOpen] = useState(false);

  if (!data) return <div>loading...</div>;

  return (
    <>
      <AppHeader />
      <ResponsiveContainer>
        <CardStack>
          <Card>
            <Header background={Geopattern.generate(data.name).toDataUrl()} />
            <Meta>
              <Left>
                <Heading size={900} marginTop="0">
                  {data.name}
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
            <span>{data.description}</span>

            <br />

            <Heading size={500} marginTop="0">
              Location
            </Heading>
            <span>{data.location}</span>

            <br />

            <Heading size={500} marginTop="0">
              Max team size
            </Heading>
            <span>{data.max_team_size}</span>
          </Card>
        </CardStack>
      </ResponsiveContainer>
      <Dialog open={open} label="Dialog title" onClose={() => setOpen(false)}>
        {isAuthenticated() ? (
          <>
            Have a team code? Enter it here:
            <TeamCode />
            <Divider />
            <ListItem
              icon="/images/create_team.svg"
              onClick={() => {}}
              label="Create a new team"
            />
          </>
        ) : (
          <>register</>
        )}
      </Dialog>
    </>
  );
};
