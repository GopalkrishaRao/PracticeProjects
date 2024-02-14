import todoActions from './todoReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todoActions,
})

export default rootReducer;