import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import profileReducer from "./profile/reducer";
import boardReducer from "./board/reducer";

export default combineReducers({
    auth: authReducer,
    profile: profileReducer,
    board: boardReducer
})