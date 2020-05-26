import {
    LOGIN,
    SIGN_OUT,
    AUTHENTICATING
} from "./types";

const INITIAL_STATE = {
    authenticated: false,
    loading: false,
}

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case LOGIN:
            return {
                authenticated: true,
                loading: false
            } 
        case SIGN_OUT:
            return {
                authenticated: false,
                loading: false
            }
        case AUTHENTICATING:
            return {
                authenticated: false,
                loading: true
            }
        default:
            return state;
    }
}