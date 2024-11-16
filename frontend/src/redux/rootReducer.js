import {combineReducers} from 'redux'
import { alertReducer } from './alertReducer'
import { loadingReducer } from './loadingReducer'

export const rootReducer = combineReducers({
    alertReducer,
    loadingReducer
})