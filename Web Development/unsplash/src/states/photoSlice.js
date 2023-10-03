// src/store/photosSlice.js
import { createSlice } from '@reduxjs/toolkit';

const photosSlice = createSlice({
  name: 'photos',
  initialState: {
    items: [],
    loading: false,
    error: null,
    page: 1,
  },
  reducers: {
    setPhotos: (state, action) => {
      state.items = [...state.items, ...action.payload];
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      if (action.payload) {
        state.error = action.payload.message;
      } else {
        state.error = 'An error occurred.';
      }
    },
        setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setPhotos, setLoading, setError, setPage } = photosSlice.actions;

export default photosSlice.reducer;
