import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducer/authReducer';
import dashboardReducer from './reducer/dashboardReducer';
import mentorReducer from './reducer/mentorsDataReducers';

const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboardData: dashboardReducer,
    mentor: mentorReducer,
  },
});

export default store;
