import React, { useState } from "react";
import { Grid, Header, Button, Segment } from "semantic-ui-react";
import { signInUser } from "../../api/auth";
import Input from "../reusable/Input";
import { emailValidator, passwordValidator } from "../../core/utils";

const Register = () => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const handleSignUp = async () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
    }

    setLoading(true);

    const response = await signInUser({
      email: email.value,
      password: password.value,
    });

    if (response.error) {
      setError(response.error);
      setLoading(false);
    }
  };

  const clearInputs = () => {
    setEmail({ value: "", error: "" });
    setPassword({ value: "", error: "" });
    setTimeout(() => setError(null), 500);
  };

  if (error && email.value !== "" && password.value !== "") {
    clearInputs();
  }

  return (
    <Grid centered>
      <Segment style={{ textAlign: "center" }}>
        <Header as="h2" content="Register" />
        <Grid.Column>
          {error && <p>{error}</p>}

          <Input
            type="email"
            placeholder="Email"
            value={email.value}
            onChange={(e, { value }) => setEmail({ value: value, error: "" })}
            style={{ marginTop: 10 }}
          />
        </Grid.Column>

        <Grid.Column>
          <Input
            type="password"
            placeholder="Password"
            value={password.value}
            onChange={(e, { value }) =>
              setPassword({ value: value, error: "" })
            }
            style={{ marginTop: 10 }}
          />
        </Grid.Column>

        <Grid.Column>
          <Button
            loading={loading}
            mode="contained"
            onClick={() => {
              handleSignUp();
            }}
            style={{ marginTop: 10 }}
          >
            Sign Up
          </Button>
        </Grid.Column>
      </Segment>
    </Grid>
  );
};

export default Register;
