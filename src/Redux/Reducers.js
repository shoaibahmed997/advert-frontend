import { createReducer } from "@reduxjs/toolkit";

const initialUserState = {
    user : JSON.parse(localStorage.getItem("AdvertAppUserDetail")) || {}
}

const TokenInitialState = {
    token : localStorage.getItem("AdvertApptoken") || ""
}

export const UserReducer = createReducer(initialUserState,{
    "ADD_USER" : (state,action)=>{
        state.user = action.payload
    },
    "REMOVE_USER" : (state,action)=>{
        state.user = {}
    }

})

export const UserTokenReducer = createReducer(TokenInitialState,{
    "ADD_TOKEN" :(state,action)=>{
        state.token = action.payload
    },
    "REMOVE_TOKEN":(state)=>{
        state.token = ""
    }
})




export const  CurrentPostReducer = createReducer({CurrentPostState:{post:{}}},{
    "SELECT_POST" : (state,action)=>{
        state.post = action.payload
    },
    "DESELECT_POST" : (state)=>{
        state.post = {}
    }
})
