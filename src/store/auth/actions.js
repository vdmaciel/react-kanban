import firebase from "../../services/firebase";
import history from  "../../services/history";
import { 
    LOGIN, 
    SIGN_OUT, 
    AUTHENTICATING
} from "./types";

const googleProvider = new firebase.auth.GoogleAuthProvider();

export function login() {
    const user = firebase.auth().currentUser;
    return {
        type: LOGIN,
        payload: { user }
    }
}

export function signOut() {
    return {
        type: SIGN_OUT
    }
}

export function requestLoginWithEmailAndPassword(email, password) {
    return dispatch => {
        dispatch({ type: AUTHENTICATING });
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
        dispatch({ type: AUTHENTICATING });
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
        dispatch({ type: AUTHENTICATING });
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

export function requestSignOut(){
    return dispatch => {
        firebase
            .auth()
            .signOut()
            .then(() => dispatch(signOut()));
    }
}

export function verifyAuth() {
    return dispatch => {
      dispatch({ type: AUTHENTICATING });
      
      firebase.auth().onAuthStateChanged(user => {
        if (user)  {
            dispatch(login());
        } else {
            dispatch(signOut());
        }
      });
    };
  }