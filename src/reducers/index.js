import { combineReducers } from 'redux';
import tabledata from './tabledata';
import query from './query';
export const reducers = combineReducers({ tabledata, query });