import privateClient from '../../../utils/privateClient';

export const FETCH_DASHBOARD_ADMIN_REQUEST = 'FETCH_DASHBOARD_ADMIN_REQUEST';
export const FETCH_DASHBOARD_ADMIN_SUCCESS = 'FETCH_DASHBOARD_ADMIN_SUCCESS';
export const FETCH_DASHBOARD_ADMIN_FAILURE = 'FETCH_DASHBOARD_ADMIN_FAILURE';

export const FETCH_DASHBOARD_MENTOR_REQUEST ='FETCH_DASHBOARD_MENTOR_REQUEST';
export const FETCH_DASHBOARD_MENTOR_SUCCESS ='FETCH_DASHBOARD_MENTOR_SUCCESS';
export const FETCH_DASHBOARD_MENTOR_FAILURE ='FETCH_DASHBOARD_MENTOR_FAILURE';

export const FETCH_DASHBOARD_STUDENT_REQUEST ='FETCH_DASHBOARD_STUDENT_REQUEST';
export const FETCH_DASHBOARD_STUDENT_SUCCESS ='FETCH_DASHBOARD_STUDENT_SUCCESS';
export const FETCH_DASHBOARD_STUDENT_FAILURE ='FETCH_DASHBOARD_STUDENT_FAILURE';

/* DASHBOARD ADMINS */
export const fetchDashboardAdminRequest = () => ({
  type: FETCH_DASHBOARD_ADMIN_REQUEST,
});

export const fetchDashboardAdminSuccess = (dashboardData) => ({
  type: FETCH_DASHBOARD_ADMIN_SUCCESS,
  payload: dashboardData.data,
});

export const fetchDashboardAdminFailure = (error) => ({
  type: FETCH_DASHBOARD_ADMIN_FAILURE,
  payload: error,
});

export const fetchDashboardAdmin = () => async (dispatch) => {
  dispatch(fetchDashboardAdminRequest());
  try {
    const response = await privateClient.get('admin/dashboard');
    dispatch(fetchDashboardAdminSuccess(response.data));
  } catch (error) {
    dispatch(fetchDashboardAdminFailure(error.message));
  }
};
/* DASHBOARD ADMINS */

/* MENTORS */

export const fetchDashboardMentorRequest = () => ({
  type: FETCH_DASHBOARD_MENTOR_REQUEST,
});

export const fetchDashboardMentorSuccess = (dashboardData) => ({
  type: FETCH_DASHBOARD_MENTOR_SUCCESS,
  payload: dashboardData.data,
});

export const fetchDashboardMentorFailure = (error) => ({
  type: FETCH_DASHBOARD_MENTOR_FAILURE,
  payload: error,
});

export const fetchDashboardMentor = () => async (dispatch) => {
  dispatch(fetchDashboardAdminRequest());
  try {
    const response = await privateClient.get('mentors/dashboard');
    dispatch(fetchDashboardAdminSuccess(response.data));
  } catch (error) {
    dispatch(fetchDashboardAdminFailure(error.message));
  }
};
/* MENTORS */

/* STUDENTS */
export const fetchDashboardStudentRequest = () => ({
  type: FETCH_DASHBOARD_STUDENT_REQUEST,
});

export const fetchDashboardStudentSuccess = (dashboardData) => ({
  type: FETCH_DASHBOARD_STUDENT_SUCCESS,
  payload: dashboardData.data,
});

export const fetchDashboardStudentFailure = (error) => ({
  type: FETCH_DASHBOARD_STUDENT_FAILURE,
  payload: error,
});

export const fetchDashboardStudent = () => async (dispatch) => {
  dispatch(fetchDashboardStudentRequest());
  try{
    const response = await privateClient.get('students/dashboard');
    dispatch(fetchDashboardStudentSuccess(response.data));
  } catch (error) {
    dispatch(fetchDashboardStudentFailure(error.message));
  }
}
/* STUDENTS */