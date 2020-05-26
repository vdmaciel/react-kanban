import types from "./types";

const INITIAL_STATE = {
    authenticated: false,
    loading: false,
}

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case types.LOGIN:
            return {
                authenticated: true,
                loading: false
            } 
        case types.SIGN_OUT:
            return {
                authenticated: false,
                loading: false
            }
        case types.AUTHENTICATING:
            return {
                authenticated: false,
                loading: true
            }
        default:
            return state;
    }
}