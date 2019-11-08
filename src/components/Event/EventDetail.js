import React, { useState } from "react";
import { Dialog, Heading } from "evergreen-ui";
import { useParams } from "react-router-dom";
import { Button, Card, CardStack, ResponsiveContainer } from "amino-ui";

import { AppHeader } from "../Layout/AppHeader";

export const EventDetail = () => {
  const { id } = useParams();

  const [open, setOpen] = useState(false);

  return (
    <>
      <AppHeader />
      <ResponsiveContainer>
        <CardStack>
          <Card>
            <Heading size={900} marginTop="0">
              Event {id}
            </Heading>
            <Button onClick={() => setOpen(true)}>
              Sign up for this event
            </Button>
          </Card>
        </CardStack>
      </ResponsiveContainer>
      <Dialog
        isShown={open}
        title="Dialog title"
        onCloseComplete={() => setOpen(false)}
        confirmLabel="Custom Label"
      >
        Dialog content
      </Dialog>
    </>
  );
};
