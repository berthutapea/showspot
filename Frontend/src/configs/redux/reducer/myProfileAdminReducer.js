// adminProfileReducer.js

import {
  FETCH_MY_PROFILE_ADMIN_REQUEST,
  FETCH_MY_PROFILE_ADMIN_SUCCESS,
  FETCH_MY_PROFILE_ADMIN_FAILURE,
} from '../action/myProfileAdminAction';

const initialState = {
  profileAdminData: [],
  loading: false,
  error: null,
};

const adminProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MY_PROFILE_ADMIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_MY_PROFILE_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
        profileAdminData: action.payload,
        error: null,
      };
    case FETCH_MY_PROFILE_ADMIN_FAILURE:
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
