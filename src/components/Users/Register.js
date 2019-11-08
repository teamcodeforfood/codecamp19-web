import React, { useState } from "react";
import { Button, Card, Input, InputGroup, Intent } from "amino-ui";

import { LoginWrapper } from "./LoginWrapper";
import { Logo } from "../Layout/Logo";

export const Register = () => {
  const register = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [name, setName] = useState("");

  return (
    <LoginWrapper>
      <Logo />
      <Card>
        <form onSubmit={register}>
          <InputGroup>
            <Input
              label="Email address"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <Input
              label="Full name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <Input
              type="password"
              label="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <Input
              type="password"
              value={passwordVerify}
              onChange={e => setPasswordVerify(e.target.value)}
              label="Password (again)"
              required
            />
          </InputGroup>
          <Button intent={Intent.Primary}>Register</Button>
        </form>
      </Card>
    </LoginWrapper>
  );
};
