import React from "react";
import { Button, Card, Input, InputGroup, Intent } from "amino-ui";

import { LoginWrapper } from "./LoginWrapper";
import { Logo } from "../Logo";

export const Login = () => {
  return (
    <LoginWrapper>
      <Logo />
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
