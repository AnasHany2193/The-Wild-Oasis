import { useState } from "react";

import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";
import FormRowVertical from "../../ui/FormRowVertical";

import { useLogin } from "./useLogin";

function LoginForm() {
  const { login, isLoading } = useLogin();

  const [password, setPassword] = useState("123456");
  const [email, setEmail] = useState("anas@example.com");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          id="email"
          type="email"
          value={email}
          disabled={isLoading}
          // This makes this form better for password managers
          autoComplete="username"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRowVertical>

      <FormRowVertical label="Password">
        <Input
          id="password"
          type="password"
          value={password}
          disabled={isLoading}
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>

      <FormRowVertical>
        <Button size="large" disabled={isLoading}>
          {!isLoading ? "Login" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
