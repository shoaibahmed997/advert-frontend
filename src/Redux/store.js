import { configureStore } from "@reduxjs/toolkit";
import {UserTokenReducer,UserReducer,CurrentPostReducer} from './Reducers'

const store = configureStore({
    reducer:{
        UserState : UserReducer,
        TokenState : UserTokenReducer,
        CurrentPostState : CurrentPostReducer

    }
})

export default store
