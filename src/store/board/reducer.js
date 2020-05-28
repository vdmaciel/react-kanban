import produce from "immer";
import { 
    SET_CURRENT_BOARD,
    CREATE_LIST,
    DELETE_LIST,
    CREATE_CARD
} from "./types";

const INITIAL_STATE = null;

export default produce((state = INITIAL_STATE, action) => {
    switch(action.type){
        case SET_CURRENT_BOARD:
            return action.payload.board;
        case CREATE_LIST: {
            state.lists.push(action.payload.list);
            break;
        }
        case DELETE_LIST:{
            const listIndex = state.lists.findIndex(list => list.id === action.payload.listId);
            state.lists.splice(listIndex, 1);
            break;
        }
        case CREATE_CARD: {
            const listIndex = state.lists.findIndex(list => list.id === action.payload.listId);
            state.lists[listIndex].cards.push(action.payload.card);
            break;
        }
        default:
            return state;
    }
})