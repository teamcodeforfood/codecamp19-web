import React from "react";
import {
  Textarea,
  Card,
  Input,
  InputGroup,
  ResponsiveContainer,
  CardStack,
  Button,
  Intent
} from "amino-ui";
import { useInput } from 'react-hanger';

export const AdminSetup = () => {
  const name = useInput("");
  const website = useInput("");
  const startsAt = useInput("");
  const endsAt = useInput("");
  const teamSize = useInput("");
  const description = useInput("");

  const save = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <ResponsiveContainer>
      <CardStack>
        <form onSubmit={save}>
          <Card>
            Before you continue, fill out the event details
          </Card>
          <Card cardTitle="Basic details">
            <InputGroup>
              <Input {...name} label="Event name" />
              <Input {...website} label="Event website" />
              <Input {...startsAt} label="Starts at" />
              <Input {...endsAt} label="Ends at" />
              <Input {...teamSize} label="Max team size" />
            </InputGroup>
          </Card>
          <Card cardTitle="Event description">
            <Textarea label="Description" />
          </Card>
          <Card>
            <Button intent={Intent.Primary}>Continue</Button>
          </Card>
        </form>
      </CardStack>
    </ResponsiveContainer>
  );
};
