import produce from "immer";
import { LOGIN } from "../auth/types";
import {
    CREATE_BOARD,
    SET_USER_BOARDS,
    DELETE_BOARD
} from "./types";

const INITIAL_STATE = {
    user: null,
    boards: []
}

export default produce((state = INITIAL_STATE, action) => {
    switch (action.type) {
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
        case DELETE_BOARD:
            return {
                ...state,
                boards: state.boards.filter(board => board.id !== action.payload.boardId)
            }
        default:
            return state;
    }
})
