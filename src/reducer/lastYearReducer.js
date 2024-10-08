import { createSlice } from '@reduxjs/toolkit';

const lastYearReducer = createSlice({
  name: 'lastYearReducer',
  initialState: [],
  reducers: {
    setLastYearList(state, action) {
      let movieList = [...state];
      movieList = action.payload;
      return movieList;
    }
  }
});

export default lastYearReducer;
