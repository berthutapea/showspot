import privateClient from '../../../utils/privateClient';

/* DASHBOARD ADMINS */
export const FETCH_DASHBOARD_ADMIN_REQUEST = 'FETCH_DASHBOARD_ADMIN_REQUEST';
export const FETCH_DASHBOARD_ADMIN_SUCCESS = 'FETCH_DASHBOARD_ADMIN_SUCCESS';
export const FETCH_DASHBOARD_ADMIN_FAILURE = 'FETCH_DASHBOARD_ADMIN_FAILURE';

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

/* MENTORS */


/* STUDENTS */
export const FETCH_DASHBOARD_STUDENT_REQUEST = 'FETCH_DASHBOARD_STUDENT_REQUEST';
export const FETCH_DASHBOARD_STUDENT_SUCCESS = 'FETCH_DASHBOARD_STUDENT_SUCCESS';
export const FETCH_DASHBOARD_STUDENT_FAILURE = 'FETCH_DASHBOARD_STUDENT_FAILURE';

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