import React, { FC, useState, FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

import Button from "../../../common/Button";
import Input from "../../../common/Input";
import Message from "../../../common/Message";
import Title from "../../../common/Title";
import AuthSocialMedia from "../SocialMedia";

import {
  Form,
  FormElements,
  FormOptions,
  Paragraph,
  ParagraphLink,
} from "./LoginFormStyle";

import { signIn } from "../../../../redux/thunks/Users";
import { setError } from "../../../../redux/actions/authActions";

const LoginForm: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { error } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (error) {
        dispatch(setError(""));
      }
    };
  }, [error, dispatch]);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (error) {
      dispatch(setError(""));
    }
    setLoading(true);
    dispatch(signIn({ email, password }, () => setLoading(false)));
  };

  return (
    <main>
      <Title as="h1" align="center">
        Sign In
      </Title>
      <Form onSubmit={submitHandler}>
        {error && <Message type="danger" msg={error} />}
        <FormElements>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            placeholder="Email address"
            label="Email address"
          />
          <Input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            placeholder="Password"
            label="Password"
          />
        </FormElements>
        <FormOptions>
          <Paragraph>
            <ParagraphLink to="/forgot-password">
              Forgot password ?
            </ParagraphLink>
          </Paragraph>
          <Button
            text={loading ? "Loading..." : "Sign In"}
            disabled={loading}
            block
            colorType={"info"}
            type={"submit"}
          />
          <AuthSocialMedia />
        </FormOptions>
      </Form>
    </main>
  );
};

export default LoginForm;
