import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const logger = createLogger();

const initialState={}
const store = createStore(rootReducer,  {},
    applyMiddleware(logger,thunk ));

export default store; 