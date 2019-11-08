import React from "react";
import { useInput } from "react-hanger";
import { Button, Card, Input, InputGroup, Intent } from "amino-ui";

import { LoginWrapper } from "./LoginWrapper";
import { Logo } from "../Layout/Logo";

export const Login = () => {
  const login = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  const email = useInput("");
  const password = useInput("");

  return (
    <LoginWrapper>
      <Logo />
      <Card>
        <form onSubmit={login}>
          <InputGroup>
            <Input type="email" label="Email address" required {...email} />
            <Input type="password" label="Password" required {...password} />
          </InputGroup>

          <Button intent={Intent.Primary}>Log in</Button>
        </form>
      </Card>
    </LoginWrapper>
  );
};
