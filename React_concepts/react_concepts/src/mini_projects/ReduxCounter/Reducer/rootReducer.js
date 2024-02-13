import {changeNumber} from './counterReducer';

import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    changeNumber,
})