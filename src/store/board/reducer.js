import produce from "immer";
import { 
    SET_CURRENT_BOARD,
    CREATE_LIST
} from "./types";

const INITIAL_STATE = null;

export default produce((state = INITIAL_STATE, action) => {
    switch(action.type){
        case SET_CURRENT_BOARD:
            return action.payload.board;
        case CREATE_LIST:
            return {
                ...state,
                lists: [...state.lists, action.payload.list]
            }
        default:
            return state;
    }
})