import { configureStore } from '@reduxjs/toolkit';
import companiesReducer from 'store/companies';

export default configureStore({
  reducer: {
    companies: companiesReducer,
  },
});
