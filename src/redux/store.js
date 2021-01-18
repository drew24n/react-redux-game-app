import {applyMiddleware, compose, createStore} from "redux";
import {gameReducer} from "./gameReducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

export const store = createStore(gameReducer, compose(
    applyMiddleware(thunk),
    composeWithDevTools() && process.env.NODE_ENV === 'development' ? composeWithDevTools() : f => f
))