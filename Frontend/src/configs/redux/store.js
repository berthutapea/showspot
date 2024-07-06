import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducer/authReducer';
import dashboardReducer from './reducer/dashboardReducer';
import mentorReducer from './reducer/mentorsDataReducer';
import studentReducer from './reducer/studentsDataReducer';
import sopProjectReducer from './reducer/sopProjectsReducer';
import adminProfileReducer from './reducer/myProfileAdminReducer';
import showcaseReducer from './reducer/showcaseProjectsReducer';
// import changeReducer from './reducer/changePasswordReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboardData: dashboardReducer,
    mentorsDataMaster: mentorReducer,
    studentsDataMaster: studentReducer,
    sopProjectsData: sopProjectReducer,
    showcaseProjectsReducer: showcaseReducer,
    profileAdminData: adminProfileReducer,
    // changePasswordReducer: changeReducer,
  },
});

export default store;
