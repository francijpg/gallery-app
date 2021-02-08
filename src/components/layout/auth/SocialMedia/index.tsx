import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import {
  signInWithFacebook,
  signInWithGitHub,
  signInWithTwitter,
} from "../../../../redux/thunks/Users";

import Button from "../../../common/Button";

const AuthSocialMedia: FC = () => {
  const [authGithub, setAuthGithub] = useState(false);
  const [authTwitter, setAuthTwitter] = useState(false);
  const [authFacebook, setAuthFacebook] = useState(false);

  const dispatch = useDispatch();

  const handleGitHubAuth = (e: any) => {
    e.preventDefault();
    setAuthGithub(true);
    dispatch(signInWithGitHub(() => setAuthGithub(false)));
  };

  const handleTwitterAuth = (e: any) => {
    e.preventDefault();
    setAuthTwitter(true);
    dispatch(signInWithTwitter(() => setAuthTwitter(false)));
  };

  const handleFacebookAuth = (e: any) => {
    e.preventDefault();
    setAuthFacebook(true);
    dispatch(signInWithFacebook(() => setAuthFacebook(false)));
  };

  return (
    <div>
      <Button
        text={authGithub ? "Loading..." : "GitHub Auth"}
        onClick={handleGitHubAuth}
        block
      />
      <Button
        text={authTwitter ? "Loading..." : "Twitter Auth"}
        onClick={handleTwitterAuth}
        block
      />
      <Button
        text={authFacebook ? "Loading..." : "Facebook Auth"}
        onClick={handleFacebookAuth}
        block
      />
    </div>
  );
};

export default AuthSocialMedia;
