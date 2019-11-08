import React from "react";
import { useParams } from "react-router-dom";
import { Button, Card, CardStack, ResponsiveContainer, Intent } from "amino-ui";

import { AppHeader } from "../Layout/AppHeader";

export const EventDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <AppHeader />
      <ResponsiveContainer>
        <CardStack>
          <Card>
            event id: {id}
            <Button intent={Intent.Primary}>Sign up for this event</Button>
          </Card>
        </CardStack>
      </ResponsiveContainer>
    </div>
  );
};
