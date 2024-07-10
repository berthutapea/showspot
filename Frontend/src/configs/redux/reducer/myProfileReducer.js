import {
  FETCH_MY_PROFILE_ADMIN_REQUEST,
  FETCH_MY_PROFILE_ADMIN_SUCCESS,
  FETCH_MY_PROFILE_ADMIN_FAILURE,
  FETCH_MY_PROFILE_MENTOR_REQUEST,
  FETCH_MY_PROFILE_MENTOR_SUCCESS,
  FETCH_MY_PROFILE_MENTOR_FAILURE,
  UPDATE_ADMIN_REQUEST,
  UPDATE_ADMIN_SUCCESS,
  UPDATE_ADMIN_FAILURE,
} from '../action/myProfileAction';

const initialState = {
  profileAdminData: [],
  loading: false,
  error: null,
};

const adminProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MY_PROFILE_ADMIN_REQUEST:
    case FETCH_MY_PROFILE_MENTOR_REQUEST:
    case UPDATE_ADMIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_MY_PROFILE_ADMIN_SUCCESS:
    case FETCH_MY_PROFILE_MENTOR_SUCCESS:
    case UPDATE_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
        profileAdminData: action.payload,
        error: null,
      };
    case FETCH_MY_PROFILE_ADMIN_FAILURE:
    case FETCH_MY_PROFILE_MENTOR_FAILURE:
    case UPDATE_ADMIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default adminProfileReducer;
