import {configureStore} from "@reduxjs/toolkit";
import SideBarSlice from "./SideBarSlice";
import chatSlice from "./chatSlice";
import searchSlice from "./searchSlice";
import searchOpen from "./searchOpen";

const store = configureStore({
  reducer: {
    menuBar: SideBarSlice,
    liveChat: chatSlice,
    search: searchSlice,
    searchToogle:searchOpen,
  },
});

export default store;