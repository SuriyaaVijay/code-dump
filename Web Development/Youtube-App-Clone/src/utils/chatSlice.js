import { createSlice } from "@reduxjs/toolkit";

const chartSlice = createSlice({
    name:"liveChat",
    initialState:{
       messages:[]
    },
    reducers:{
        addChat:(state,action)=>{
            state.messages.splice(8,1);
            // state.messages.unshift(action.payload);
            state.messages = [ action.payload,...state.messages];
        },
        clearChat:(state)=>{
            state.messages = [];
        }
    }
});


export const {addChat,clearChat} = chartSlice.actions;
export default chartSlice.reducer;