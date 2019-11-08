import React from "react";
import { Button, Card, Input, InputGroup, Intent } from "amino-ui";

import { LoginWrapper } from "./LoginWrapper";
import { Logo } from "../Layout/Logo";
import { useInput } from "react-hanger";

export const Register = () => {
  const register = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  const email = useInput("");
  const password = useInput("");
  const passwordVerify = useInput("");
  const name = useInput("");

  return (
    <LoginWrapper>
      <Logo />
      <Card>
        <form onSubmit={register}>
          <InputGroup>
            <Input label="Email address" type="email" required {...email} />
            <Input label="Full name" required {...name} />
            <Input type="password" label="Password" required {...password} />
            <Input type="password" required {...passwordVerify} />
          </InputGroup>
          <Button intent={Intent.Primary}>Register</Button>
        </form>
      </Card>
    </LoginWrapper>
  );
};
