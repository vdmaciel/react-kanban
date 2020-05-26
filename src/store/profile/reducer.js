import {
    LOGIN
} from "../auth/types";

const INITIAL_STATE = {
    user: null,
    boards: []
}

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                user: action.payload.user
            }
        default:
            return state;
    }
}