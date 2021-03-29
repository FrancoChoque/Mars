/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from 'lib/axios';

export const fetchCompanies = createAsyncThunk('companies/fetchCompanies', async () => {
  const response = await axiosInstance.get('/companies');
  return response.data;
});

const companiesSlice = createSlice({
  name: 'companies',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchCompanies.pending]: state => {
      state.loading = true;
    },
    [fetchCompanies.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [fetchCompanies.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

const { reducer } = companiesSlice;

export default reducer;
