import React, { FC, useState, FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

import Title from "../../../common/Title";
import Button from "../../../common/Button";
import Input from "../../../common/Input";
import Message from "../../../common/Message";

import { Form } from "./RecoverPasswordStyle";

import { setError, setSuccess } from "../../../../redux/actions/authActions";
import { sendPasswordResetEmail } from "../../../../redux/thunks/Users";

const RecoverPassword: FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { error, success } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    return () => {
      if (error) {
        dispatch(setError(""));
      }
      if (success) {
        dispatch(setSuccess(""));
      }
    };
  }, [error, dispatch, success]);

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    if (success) {
      dispatch(setSuccess(""));
    }
    if (error) {
      dispatch(setError(""));
    }
    setLoading(true);
    await dispatch(sendPasswordResetEmail(email, "Email sent!"));
    setLoading(false);
  };

  return (
    <main>
      <Title as="h1" align="center">Reset Your Password</Title>
      <Form onSubmit={submitHandler}>
        {error && <Message type="danger" msg={error} />}
        <Input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          placeholder="Email address"
          label="Email address"
        />
        <Button
          text={loading ? "Loading..." : "Send password reset email"}
          disabled={loading}
          colorType={"info"}
          type={"submit"}
          block
        />
      </Form>
    </main>
  );
};

export default RecoverPassword;
