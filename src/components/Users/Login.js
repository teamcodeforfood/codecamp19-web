import React, { useState } from "react";
import { Button, Card, Input, InputGroup, Intent } from "amino-ui";

import { LoginWrapper } from "./LoginWrapper";
import { Logo } from "../Layout/Logo";

export const Login = () => {
  const login = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LoginWrapper>
      <Logo />
      <Card>
        <form onSubmit={login}>
          <InputGroup>
            <Input
              type="email"
              label="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              label="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </InputGroup>

          <Button intent={Intent.Primary}>Log in</Button>
        </form>
      </Card>
    </LoginWrapper>
  );
};
