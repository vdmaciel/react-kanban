import { 
    SET_CURRENT_BOARD
} from "./types";

const INITIAL_STATE = null;

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case SET_CURRENT_BOARD:
            return action.payload.board;
        default:
            return state;
    }
}