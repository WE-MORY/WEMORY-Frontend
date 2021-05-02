import { combineReducers } from 'redux';
import auth from './Auth_reducer';
import diary from './Diary_reducer';
const rootReducer = combineReducers({
    auth,
    diary
})

export default rootReducer;