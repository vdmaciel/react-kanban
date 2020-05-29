import { uuid } from "uuidv4";
import firebase from "../../services/firebase";
import {
    SET_CURRENT_BOARD,
    CREATE_LIST,
    DELETE_LIST,
    CREATE_CARD,
    MOVE_LIST,
    MOVE_CARD,
    DELETE_CARD,
    EDIT_CARD,
} from "./types";

export function fetchBoard(boardId) {
    return dispatch => {
        firebase.database().ref("/boards")
            .child(boardId)
            .once("value")
            .then(snap => {
                const board = snap.val();
                if (!board.lists) board.lists = [];

                //converts list and card objects into arrays
                board.lists = Object.values(board.lists).map(list => {
                    if (!list.cards) list.cards = [];
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

export function createList(name) {
    return (dispatch, getState) => {
        const newList = {
            id: uuid(),
            name: name,
            cards: []
        }
        dispatch({
            type: CREATE_LIST,
            payload: { list: newList }
        })
        const board = getState().board;
        firebase.database().ref("/boards").child(board.id).set(board);
    }
}

export function deleteList(listId) {
    return (dispatch, getState) => {
        dispatch({
            type: DELETE_LIST,
            payload: { listId }
        })
        const board = getState().board;
        firebase.database().ref("/boards").child(board.id).set(board);
    }
}

export function moveList(originListIndex, targetListIndex) {
    return (dispatch, getState) => {
        dispatch({
            type: MOVE_LIST,
            payload: {
                originListIndex,
                targetListIndex
            }
        })
        const board = getState().board;
        firebase.database().ref("/boards").child(board.id).set(board);
    }
}

export function createCard(text, listId) {
    return (dispatch, getState) => {
        const newCard = {
            id: uuid(),
            text: text
        }
        dispatch({
            type: CREATE_CARD,
            payload: {
                card: newCard,
                listId: listId
            }
        })
        const board = getState().board;
        firebase.database().ref("/boards").child(board.id).set(board);
    }
}

export function deleteCard(cardIndex, listIndex) {
    return (dispatch, getState) => {
        dispatch({
            type: DELETE_CARD,
            payload: {
                cardIndex,
                listIndex
            }
        })

        const board = getState().board;
        firebase.database().ref("/boards").child(board.id).set(board);
    }
}

export function editCard(cardText, cardIndex, listIndex) {
    return (dispatch, getState) => {
        dispatch({
            type: EDIT_CARD,
            payload: {
                cardText,
                cardIndex,
                listIndex
            }
        })

        const board = getState().board;
        firebase.database().ref("/boards").child(board.id).set(board);
    }
}

export function moveCard(originListId, targetListId, originCardIndex, targetCardIndex) {
    return (dispatch, getState) => {
        dispatch({
            type: MOVE_CARD,
            payload: {
                originListId,
                targetListId,
                originCardIndex,
                targetCardIndex
            }
        })
        const board = getState().board;
        firebase.database().ref("/boards").child(board.id).set(board);
    }
}