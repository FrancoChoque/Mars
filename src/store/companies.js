/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { findIndex } from 'lodash';

import axiosInstance from 'lib/axios';

export const fetchCompanies = createAsyncThunk('companies/fetchCompanies', async () => {
  const response = await axiosInstance.get('/companies');
  return response.data;
});

export const updateCompany = createAsyncThunk('companies/updateCompany', async company => {
  const response = await axiosInstance.put(`/companies/${company.id}`, company);
  return response.data;
});

const companiesSlice = createSlice({
  name: 'companies',
  initialState: {
    data: [],
    loading: {
      fetchCompanies: false,
      updateCompany: false,
    },
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchCompanies.pending]: state => {
      state.loading.fetchCompanies = true;
    },
    [fetchCompanies.fulfilled]: (state, action) => {
      state.loading.fetchCompanies = false;
      state.data = action.payload;
    },
    [fetchCompanies.rejected]: (state, action) => {
      state.loading.fetchCompanies = false;
      state.error = action.error;
    },
    [updateCompany.pending]: state => {
      state.loading.updateCompany = true;
    },
    [updateCompany.fulfilled]: (state, action) => {
      state.loading.updateCompany = false;
      state.data[findIndex(state.data, ['id', action.payload.id])] = action.payload;
    },
    [updateCompany.rejected]: (state, action) => {
      state.loading.updateCompany = false;
      state.error = action.error;
    },
  },
});

const { reducer } = companiesSlice;

export default reducer;
