import authReducer from "./authReducer"
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    url:authReducer
})
export default rootReducer  