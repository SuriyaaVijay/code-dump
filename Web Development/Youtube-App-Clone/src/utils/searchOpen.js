import { createSlice } from "@reduxjs/toolkit";

const searchOpen = createSlice({
    name:"searchOpen",
    initialState:{
        isSearchOpen:false,
    },
    reducers:{
        openSearch:(state)=>{
            state.isSearchOpen = true;
        },
        closeSearch:(state)=>{
            state.isSearchOpen = false;
        }
    }
});

export const {openSearch,closeSearch} = searchOpen.actions;
export default searchOpen.reducer;