import firebase from "../../services/firebase";
import {
    SET_CURRENT_BOARD,
    CREATE_LIST
} from "./types";

export function fetchBoard(boardId){
    return dispatch => {
        firebase.database().ref("/boards")
            .child(boardId)
            .once("value")
            .then(snap => {
                const board = snap.val();
                if(!board.lists) board.lists = [];

                //converts list and card objects into arrays
                board.lists = Object.values(board.lists).map(list => {
                    if(!list.cards) list.cards = [];
                    list.cards = Object.values(list.cards);
                    return list;
                })

                dispatch({
                    type: SET_CURRENT_BOARD,
                    payload: { board }
                })
            })
    }
}

export function createList(name){
    return (dispatch, getState) => {
        const boardId = getState().board.id;
        const collectionRef = firebase.database().ref(`boards/${boardId}/lists`);
        const listRef = collectionRef.push();
        const listId = listRef.key;
        const newList = {
            id: listId,
            name: name,
            cards: []
        }
        listRef.set(newList)
            .then(() => {
                dispatch({
                    type: CREATE_LIST,
                    payload: { list: newList }
                })
            })
    }
}