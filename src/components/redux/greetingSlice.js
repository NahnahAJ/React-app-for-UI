import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const GETGREETINGDATA = 'greeting/webapp/GETGREETINGDATA';
const URL = 'http://localhost:3000/api/v1/greetings';

const initialState = {
  greetingData: [],
  isLoading: true,
};

export const getApiData = createAsyncThunk(GETGREETINGDATA, async () => {
  const response = await axios.get(URL);
  return response.data;
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: [],
  extraReducers: {
    [getApiData.fulfilled]: (state, action) => {
      state.greetingData = action.payload;
      state.isLoading = false;
    },
    [getApiData.pending]: (state) => {
      state.isLoading = true;
    },
    [getApiData.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default greetingSlice.reducer;
