import privateClient from '../../../utils/privateClient';

export const FETCH_DASHBOARD_ADMIN_REQUEST = 'FETCH_DASHBOARD_ADMIN_REQUEST';
export const FETCH_DASHBOARD_ADMIN_SUCCESS = 'FETCH_DASHBOARD_ADMIN_SUCCESS';
export const FETCH_DASHBOARD_ADMIN_FAILURE = 'FETCH_DASHBOARD_ADMIN_FAILURE';

export const fetchDashboardAdminRequest = () => ({
  type: FETCH_DASHBOARD_ADMIN_REQUEST,
});

export const fetchDashboardAdminSuccess = (dashboardData) => ({
  type: FETCH_DASHBOARD_ADMIN_SUCCESS,
  payload: dashboardData.data,
  // payload: response.data.data.total,
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
