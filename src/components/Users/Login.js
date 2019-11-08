import React from "react";
import { Button, Card, Input, InputGroup, Intent } from "amino-ui";

import { LoginWrapper } from "./LoginWrapper";

export const Login = () => {
  return (
    <LoginWrapper>
      <Card>
        <InputGroup>
          <Input label="Email address" />
          <Input label="Password" />
          <Button intent={Intent.Primary}>Log in</Button>
        </InputGroup>
      </Card>
    </LoginWrapper>
  );
};
