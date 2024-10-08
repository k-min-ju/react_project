import { createSlice } from '@reduxjs/toolkit';

const youthReducer = createSlice({
  name: 'youthReducer',
  initialState: [],
  reducers: {
    setYouthList(state, action) {
      let movieList = [...state];
      movieList = action.payload;
      return movieList;
    }
  }
});

export default youthReducer;
