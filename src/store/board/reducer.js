import produce from "immer";
import {
    SET_CURRENT_BOARD,
    CREATE_LIST,
    DELETE_LIST,
    CREATE_CARD,
    MOVE_LIST,
    MOVE_CARD
} from "./types";

const INITIAL_STATE = null;

export default produce((state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_CURRENT_BOARD:
            return action.payload.board;
        case CREATE_LIST: {
            state.lists.push(action.payload.list);
            break;
        }
        case DELETE_LIST: {
            const listIndex = state.lists.findIndex(list => list.id === action.payload.listId);
            state.lists.splice(listIndex, 1);
            break;
        }
        case MOVE_LIST: {
            const { originListIndex, targetListIndex } = action.payload;
            const list = state.lists[originListIndex];
            state.lists.splice(originListIndex, 1);
            state.lists.splice(targetListIndex, 0, list);
            break;
        }
        case CREATE_CARD: {
            const listIndex = state.lists.findIndex(list => list.id === action.payload.listId);
            state.lists[listIndex].cards.push(action.payload.card);
            break;
        }
        case MOVE_CARD: {
            const { originListId, targetListId, originCardIndex, targetCardIndex } = action.payload;
            const originListIndex = state.lists.findIndex(list => {
                return list.id === originListId;
            });
            const targetListIndex = state.lists.findIndex(list => {
                return list.id === targetListId;
            });
            const card = state.lists[originListIndex].cards[originCardIndex];
            state.lists[originListIndex].cards.splice(originCardIndex, 1);
            state.lists[targetListIndex].cards.splice(targetCardIndex, 0, card);
            break;
        }
        default:
            return state;
    }
})