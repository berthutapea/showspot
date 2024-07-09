import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducer/authReducer';
import dashboardReducer from './reducer/dashboardReducer';
import mentorReducer from './reducer/mentorsDataReducer';
import studentReducer from './reducer/studentsDataReducer';
import sopProjectReducer from './reducer/sopProjectsReducer';
import adminProfileReducer from './reducer/myProfileAdminReducer';
import showcaseReducer from './reducer/showcaseProjectsReducer';
import changePasswordReducer from './reducer/changePasswordReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboardData: dashboardReducer,
    mentorsDataMaster: mentorReducer,
    studentsDataMaster: studentReducer,
    sopProjectsData: sopProjectReducer,
    showCaseProjectsDataPending: showcaseReducer,
    showCaseProjectsDataConfirmed: showcaseReducer,
    showCaseProjectsDataRejected: showcaseReducer,
    profileAdminData: adminProfileReducer,
    changePasswordData: changePasswordReducer,
  },
});

export default store;
