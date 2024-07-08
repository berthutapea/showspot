import {
  FETCH_DASHBOARD_ADMIN_REQUEST,
  FETCH_DASHBOARD_ADMIN_SUCCESS,
  FETCH_DASHBOARD_ADMIN_FAILURE,
  FETCH_DASHBOARD_MENTOR_REQUEST,
  FETCH_DASHBOARD_MENTOR_SUCCESS,
  FETCH_DASHBOARD_MENTOR_FAILURE,
  FETCH_DASHBOARD_STUDENT_REQUEST,
  FETCH_DASHBOARD_STUDENT_SUCCESS,
  FETCH_DASHBOARD_STUDENT_FAILURE
} from '../action/dashboardAction';

const initialState = {
  loading: false,
  error: '',
  dashboardData: [],
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DASHBOARD_ADMIN_REQUEST:
    case FETCH_DASHBOARD_MENTOR_REQUEST:
    case FETCH_DASHBOARD_STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DASHBOARD_ADMIN_SUCCESS:
    case FETCH_DASHBOARD_MENTOR_SUCCESS:
    case FETCH_DASHBOARD_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        dashboardData: action.payload,
        error: '',
      };
    case FETCH_DASHBOARD_ADMIN_FAILURE:
    case FETCH_DASHBOARD_MENTOR_FAILURE:
    case FETCH_DASHBOARD_STUDENT_FAILURE:
      return {
        ...state,
        loading: false,
        dashboardData: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
