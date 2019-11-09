import React from "react";
import { Button, CardStack, List } from "amino-ui";
import { AppHeader } from "../Layout/AppHeader";
import { Card } from "../Layout/Card";
import { ResponsiveContainer } from "../Layout/ResponsiveContainer";

export const EventList = () => {
  return (
    <>
      <AppHeader />
      <ResponsiveContainer>
        <CardStack>
          <Card
            cardTitle="My events"
            action={<Button>Create new event</Button>}
          >
            <List>events</List>
          </Card>
        </CardStack>
      </ResponsiveContainer>
    </>
  );
};
