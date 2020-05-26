import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';

import rootReducer from "./rootReducer";
import { verifyAuth } from "./auth/actions";

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

store.dispatch(verifyAuth());

export default store;