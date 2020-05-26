import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import FullPageSpinner from "../components/FullPageSpinner"; 

export default function SmartRoute({ component: Component, isPrivate, ...rest }){
    const { authenticated, loading } = useSelector(state => state.auth);

    if(loading){
        return <FullPageSpinner/>
    }

    if(!authenticated && isPrivate){
        return <Redirect to="/login"/>
    }

    if(authenticated && isPrivate){
        return <Route {...rest} render={props => {
            return <Component {...props} />
        }}/>
    }

    return <Route {...rest} component={Component}/>
}