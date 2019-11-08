import React from "react";
import { Button, Card, Input, InputGroup, Intent } from "amino-ui";
import useSWR from "swr";

import { LoginWrapper } from "./LoginWrapper";
import { Logo } from "../Layout/Logo";
import { useInput } from "react-hanger";

export const Register = () => {
  const register = async e => {
    e.preventDefault();
    e.stopPropagation();

    if (password.value !== passwordVerify.value) {
      // TODO: prettier error message
      alert("Passwords don't match");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/users/register`,
        {
          method: "POST",
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email.value,
            password: password.value
          })
        }
      );

      const result = await response.json();

      console.log(result);
    } catch (e) {
      alert("error");
    }
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
            <Input
              type="password"
              label="Password (again)"
              required
              {...passwordVerify}
            />
          </InputGroup>
          <Button intent={Intent.Primary}>Register</Button>
        </form>
      </Card>
    </LoginWrapper>
  );
};
