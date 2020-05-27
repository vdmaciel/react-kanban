import firebase from "../../services/firebase";
import {
    CREATE_BOARD,
    DELETE_BOARD,
    SET_USER_BOARDS
} from "./types";

export function fetchUserBoards(){
    return dispatch => {
        const userId = firebase.auth().currentUser.uid;
        firebase.database().ref("/boards")
            .orderByChild("userId")
            .equalTo(userId)
            .once("value")
            .then(snap => {
                const boards = snap.val() ? Object.values(snap.val()) : [];
                dispatch({
                    type: SET_USER_BOARDS,
                    payload: { boards }
                })
            })
    }
}

export function createBoard(name) {
    return dispatch => {
        const userId = firebase.auth().currentUser.uid;
        const collectionRef = firebase.database().ref("boards");
        const boardRef = collectionRef.push();
        const boardId = boardRef.key;
        const newBoard = {
            id: boardId,
            name: name,
            userId: userId,
            createdAt: Date.now()
        }
        boardRef.set(newBoard).then(() => {
            dispatch({
                type: CREATE_BOARD,
                payload: { board: newBoard }
            })
        })
    }
}