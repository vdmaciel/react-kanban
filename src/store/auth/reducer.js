import types from "./types";

const INITIAL_STATE = {
    authenticated: false,
    loading: false,
}

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        default:
            return state;
    }
}