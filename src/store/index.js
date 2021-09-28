import { createStore, combineReducers } from "redux";

import {userReducer} from './modules/user/reducer'

const reducers = combineReducers({user:userReducer})

export const store = createStore(reducers)
