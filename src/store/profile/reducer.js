import types from "./types";

const INITIAL_STATE = {
    user: null,
    boards: []
}

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        default:
            return state;
    }
}