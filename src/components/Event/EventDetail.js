import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Text,
  TextStyle,
  Button,
  Card,
  CardStack,
  ResponsiveContainer
} from "amino-ui";

import { AppHeader } from "../Layout/AppHeader";
import { Dialog } from "../Layout/Dialog";

export const EventDetail = () => {
  const { id } = useParams();

  const [open, setOpen] = useState(false);

  return (
    <>
      <AppHeader />
      <ResponsiveContainer>
        <CardStack>
          <Card>
            <Text style={TextStyle.Heading1}>Event {id}</Text>
            <Button onClick={() => setOpen(true)}>
              Sign up for this event
            </Button>
          </Card>
        </CardStack>
      </ResponsiveContainer>
      <Dialog open={open} label="Dialog title" onClose={() => setOpen(false)}>
        Dialog content
      </Dialog>
    </>
  );
};
