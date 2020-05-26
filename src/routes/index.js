import React from 'react';
import { HashRouter, Switch, Redirect } from 'react-router-dom';

import Route from "./Route";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";

export default function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Redirect from="/" exact to="/login" />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/home" component={Home} isPrivate/>
      </Switch>
    </HashRouter>
  )
}