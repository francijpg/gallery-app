import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { checkUserExists } from "../redux/thunks/Users";
import { RootState } from "../redux/store";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

import Header from "../components/layout/Header";
import PictureView from "../components/unsplash/PictureView/PictureView";

import Page404 from "../views/Page404";
import SignUp from "../views/SignUp";
import SignIn from "../views/SignIn";
import ForgotPassword from "../views/ForgotPassword";
import Homepage from "../views/Homepage";
import Dashboard from "../views/Dashboard";
import NewContent from "../views/NewContent";

import GlobalStyle from "../styles/GlobalStyle";
import LoadingSpinner from "../components/common/LoadingSpinner";

const AppRouter: FC = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(checkUserExists());
  }, [dispatch]);

  if (loading) {
    return <LoadingSpinner center background />;
  }

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" component={Homepage} exact />
        <PublicRoute path="/signup" component={SignUp} exact />
        <PublicRoute path="/signin" component={SignIn} exact />
        <PublicRoute path="/forgot-password" component={ForgotPassword} exact />
        <PrivateRoute path="/dashboard" component={Dashboard} exact />
        <PrivateRoute
          path="/dashboard/new-content"
          component={NewContent}
          exact
        />
        <PrivateRoute
          path="/dashboard/new-content/results/:id"
          component={PictureView}
          exact
        />
        <Route path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
