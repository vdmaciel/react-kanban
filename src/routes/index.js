import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

export default function Routes(){
  return (
    <HashRouter>
      <Switch>
        <Redirect from="/" exact to="/login"/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
      </Switch>
    </HashRouter>
  )
}