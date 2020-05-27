import { LOGIN } from "../auth/types";
import {
    CREATE_BOARD,
    SET_USER_BOARDS
} from "./types";

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
        case SET_USER_BOARDS:
            return {
                ...state,
                boards: action.payload.boards
            }
        case CREATE_BOARD:
            return {
                ...state,
                boards: [
                    ...state.boards,
                    action.payload.board
                ]
            }
        default:
            return state;
    }
}