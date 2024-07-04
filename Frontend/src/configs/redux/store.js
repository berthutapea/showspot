import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducer/authReducer';
import dashboardReducer from './reducer/dashboardReducer';
import mentorReducer from './reducer/mentorsDataReducer';
import studentReducer from './reducer/studentsDataReducer';
// import sopReducer from './reducer/sopProjectsReducer';
// import showcaseReducer from './reducer/showcaseProjectsReducer';
// import changeReducer from './reducer/changePasswordReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboardData: dashboardReducer,
    mentorsDataMaster: mentorReducer,
    studentsDataMaster: studentReducer,
    // sopProjectsReducer: sopReducer,
    // showcaseProjectsReducer: showcaseReducer,
    // changePasswordReducer: changeReducer,
  },
});

export default store;
