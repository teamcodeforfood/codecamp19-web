import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { useInput } from "react-hanger";
import { Button, TextInputField } from "evergreen-ui";
import { Card } from "amino-ui";

import { LoginWrapper } from "./LoginWrapper";
import { Logo } from "../Layout/Logo";
import { LoginFooter } from "./LoginFooter";
import { Link } from "react-router-dom";

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
          <TextInputField
            type="email"
            label="Email address"
            required
            {...email}
          />
          <TextInputField
            type="password"
            label="Password"
            required
            {...password}
          />

          <Button isLoading={saving} appearance="primary">
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
