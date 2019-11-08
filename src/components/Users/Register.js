import React from "react";
import { Button, Card, Input, InputGroup, Intent } from "amino-ui";

import { LoginWrapper } from "./LoginWrapper";
import { Logo } from "../Logo";

export const Register = () => {
  return (
    <LoginWrapper>
      <Logo />
      <Card>
        <InputGroup>
          <Input label="Email address" />
          <Input label="Full name" />
          <Input label="Password" />
          <Input label="Password (again)" />
          <Button intent={Intent.Primary}>Register</Button>
        </InputGroup>
      </Card>
    </LoginWrapper>
  );
};
