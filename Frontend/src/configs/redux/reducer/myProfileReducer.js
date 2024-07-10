import {
  FETCH_MY_PROFILE_ADMIN_REQUEST,
  FETCH_MY_PROFILE_ADMIN_SUCCESS,
  FETCH_MY_PROFILE_ADMIN_FAILURE,
  FETCH_MY_PROFILE_MENTOR_REQUEST,
  FETCH_MY_PROFILE_MENTOR_SUCCESS,
  FETCH_MY_PROFILE_MENTOR_FAILURE,
  FETCH_MY_PROFILE_STUDENT_REQUEST,
  FETCH_MY_PROFILE_STUDENT_SUCCESS,
  FETCH_MY_PROFILE_STUDENT_FAILURE,
  UPDATE_ADMIN_REQUEST,
  UPDATE_ADMIN_SUCCESS,
  UPDATE_ADMIN_FAILURE,
  UPDATE_MENTOR_REQUEST,
  UPDATE_MENTOR_SUCCESS,
  UPDATE_MENTOR_FAILURE,
  UPDATE_STUDENT_REQUEST,
  UPDATE_STUDENT_SUCCESS,
  UPDATE_STUDENT_FAILURE,
} from '../action/myProfileAction';

const initialState = {
  profileDataUsers: [],
  loading: false,
  error: null,
};

const adminProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MY_PROFILE_ADMIN_REQUEST:
    case FETCH_MY_PROFILE_MENTOR_REQUEST:
    case FETCH_MY_PROFILE_STUDENT_REQUEST:
    case UPDATE_ADMIN_REQUEST:
    case UPDATE_MENTOR_REQUEST:
    case UPDATE_STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_MY_PROFILE_ADMIN_SUCCESS:
    case FETCH_MY_PROFILE_MENTOR_SUCCESS:
    case FETCH_MY_PROFILE_STUDENT_SUCCESS:
    case UPDATE_ADMIN_SUCCESS:
    case UPDATE_MENTOR_SUCCESS:
    case UPDATE_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        profileDataUsers: action.payload,
        error: null,
      };
    case FETCH_MY_PROFILE_ADMIN_FAILURE:
    case FETCH_MY_PROFILE_MENTOR_FAILURE:
    case FETCH_MY_PROFILE_STUDENT_FAILURE:
    case UPDATE_ADMIN_FAILURE:
    case UPDATE_MENTOR_FAILURE:
    case UPDATE_STUDENT_FAILURE:
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
