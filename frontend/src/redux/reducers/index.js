import { combineReducers } from 'redux';
import auth from './Auth_reducer';
const rootReducer = combineReducers({
    auth
})

export default rootReducer;