import React from 'react';
import { Router, Switch, Redirect } from 'react-router-dom';

import history from "../services/history";
import Route from "./Route";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import Board from "../pages/Board";

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Redirect from="/" exact to="/login" />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/home" component={Home} isPrivate />
        <Route path="/board/:boardId" component={Board} isPrivate />
      </Switch>
    </Router>
  )
}