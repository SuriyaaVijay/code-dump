import { configureStore } from '@reduxjs/toolkit';
import photosReducer from './photoSlice';
import searchReducer from './searchSlice';

const store = configureStore({
  reducer: {
    photos: photosReducer,
    search: searchReducer,
  },
});

export default store;
