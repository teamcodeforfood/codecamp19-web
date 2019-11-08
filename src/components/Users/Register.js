import React, { useState } from "react";
import { Button, Card, Input, InputGroup, Intent } from "amino-ui";
import { useInput } from "react-hanger";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { Link } from "react-router-dom";

import { LoginWrapper } from "./LoginWrapper";
import { Logo } from "../Layout/Logo";
import { LoginFooter } from "./LoginFooter";

export const Register = () => {
  const dispatch = useDispatch();
  const goto = url => dispatch(push(url));

  const email = useInput("");
  const password = useInput("");
  const passwordVerify = useInput("");
  const name = useInput("");
  const [saving, setSaving] = useState(false);

  const register = async e => {
    e.preventDefault();
    e.stopPropagation();

    setSaving(true);

    if (password.value !== passwordVerify.value) {
      // TODO: prettier error message
      alert("Passwords don't match");
      setSaving(false);
      return;
    }

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/users/register`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: email.value,
            password: password.value
          })
        }
      );

      const { user } = await response.json();

      if (user) {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/users/authenticate`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              email: email.value,
              password: password.value
            })
          }
        );

        const { token } = await response.json();

        if (token) {
          localStorage.setItem("token", token);
          goto("/");
        } else {
          alert("error");
        }

        setSaving(false);
      }
    } catch (e) {
      setSaving(false);
      alert("error");
    }
  };

  return (
    <LoginWrapper>
      <Logo />
      <Card cardTitle="Register a new account">
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
          <Button disabled={saving} saving={saving} intent={Intent.Primary}>
            Register
          </Button>
        </form>
      </Card>
      <LoginFooter>
        <Link to="/auth/login">Already have an account? Click to log in</Link>
      </LoginFooter>
    </LoginWrapper>
  );
};
