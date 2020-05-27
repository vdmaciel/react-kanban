import firebase from "../../services/firebase";
import {
    SET_CURRENT_BOARD
} from "./types";

export function fetchBoard(boardId){
    return dispatch => {
        firebase.database().ref("/boards")
            .child(boardId)
            .once("value")
            .then(snap => {
                const board = snap.val();
                if(!board.lists) board.lists = [];

                board.lists.forEach(list => {
                    if(!list.cards) list.cards = [];
                });

                dispatch({
                    type: SET_CURRENT_BOARD,
                    payload: { board }
                })
            })
    }
}