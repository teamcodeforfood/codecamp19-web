import React from "react";
import { Button, Card, CardStack, List, ResponsiveContainer } from "amino-ui";
import { AppHeader } from "../Layout/AppHeader";

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
