import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { useInput } from "react-hanger";
import { Button, Input, Intent, InputGroup } from "amino-ui";

import { LoginWrapper } from "./LoginWrapper";
import { Logo } from "../Layout/Logo";
import { LoginFooter } from "./LoginFooter";
import { Link } from "react-router-dom";
import { Card } from "../Layout/Card";
import { fetcher } from "../../utils/fetcher";

export const Login = () => {
  const dispatch = useDispatch();
  const goto = url => dispatch(push(url));

  const email = useInput("");
  const password = useInput("");
  const [saving, setSaving] = useState(false);

  const login = async e => {
    e.preventDefault();

    setSaving(true);

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
  };

  return (
    <LoginWrapper>
      <Logo />
      <Card cardTitle="Log in to continue">
        <form onSubmit={login}>
          <InputGroup>
            <Input type="email" label="Email address" required {...email} />
            <Input type="password" label="Password" required {...password} />
          </InputGroup>

          <Button saving={saving} intent={Intent.Primary}>
            Log in
          </Button>
        </form>
      </Card>
      <LoginFooter>
        <Link to="/auth/register">Need an account? Click to register</Link>
      </LoginFooter>
    </LoginWrapper>
  );
};
