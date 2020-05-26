import types from "./types";
import firebase from "../../services/firebase";
import history from  "../../services/history";

const googleProvider = new firebase.auth.GoogleAuthProvider();

export function login() {
    const user = firebase.auth().currentUser;
    return {
        type: types.LOGIN,
        user
    }
}

export function signOut() {
    return {
        type: types.SIGN_OUT
    }
}

export function requestLoginWithEmailAndPassword(email, password) {
    return dispatch => {
        dispatch({ type: types.AUTHENTICATING });
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                dispatch(login())
                history.replace("/home");
            })
    }
}

export function requestLoginWithGoogle(){
    return dispatch => {
        dispatch({ type: types.AUTHENTICATING });
        firebase
            .auth()
            .signInWithPopup(googleProvider)
            .then(() => {
                dispatch(login())
                history.replace("/home");
            })
    }
}

export function requestLoginAnonymously() {
    return dispatch => {
        dispatch({ type: types.AUTHENTICATING });
        firebase
            .auth()
            .signInAnonymously()
            .then(() => {
                dispatch(login())
                history.replace("/home");
            })
    }
}

export function requestSignUp(username, email, password){
    return dispatch => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(response => {
                response.user.updateProfile({
                    displayName: username
                })
                .then(() => {
                    dispatch(login())
                    history.replace("/home");
                })
            })
    } 
}

export function verifyAuth() {
    return dispatch => {
      dispatch({ type: types.AUTHENTICATING });
      
      firebase.auth().onAuthStateChanged(user => {
        if (user)  {
            dispatch(login())
            history.replace("/home");
        } else {
            dispatch(signOut());
        }
      });
    };
  }