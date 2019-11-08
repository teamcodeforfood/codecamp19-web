import React from "react";
import {
  Textarea,
  Card,
  Input,
  InputGroup,
  ResponsiveContainer,
  CardStack,
  Button,
  Intent,
  Notice
} from "amino-ui";
import { useInput } from "react-hanger";

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
          <Notice intent={Intent.Primary}>
            Before you continue, fill out the event details
          </Notice>
          <Card>
            <InputGroup>
              <Input {...name} label="Event name" required />
              <Input {...website} label="Event website" required type="url" />
              <Input {...startsAt} label="Starts at" />
              <Input {...endsAt} label="Ends at" />
              <Input {...teamSize} label="Max team size" />
              <Textarea label="Description" />
            </InputGroup>
            <Button intent={Intent.Primary}>Continue</Button>
          </Card>
        </form>
      </CardStack>
    </ResponsiveContainer>
  );
};
