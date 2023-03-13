import { combineReducers } from 'redux';
import { Imagelistreducer } from './TabImageList/Reducer'

export const Rootreducer = combineReducers({
    Imagelistreducer: Imagelistreducer
})