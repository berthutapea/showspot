import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducer/authReducer';
import dashboardReducer from './reducer/dashboardReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboardData: dashboardReducer,
  },
});

export default store;
