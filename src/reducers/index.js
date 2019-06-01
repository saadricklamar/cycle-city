import { combineReducers } from 'redux';
import { bikePaths } from './bikePaths';


const rootReducer = combineReducers({
    bikePaths: bikePaths
})

export default rootReducer;