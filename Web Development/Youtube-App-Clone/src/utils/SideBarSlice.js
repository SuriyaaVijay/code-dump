import { createSlice } from "@reduxjs/toolkit";

const SideBarSlice = createSlice({
    name:"sideBar",
    initialState:{
        isMenuOpen:true,
    },
    reducers:{
          toggleMenu:(state)=>{
                state.isMenuOpen= !state.isMenuOpen;
          },
          closeMenu:(state)=>{
            state.isMenuOpen=false;
          },
          openMenu:(state)=>{
            state.isMenuOpen = true;
          }
    }
})

export const {toggleMenu,closeMenu,openMenu} = SideBarSlice.actions;

export default SideBarSlice.reducer;