import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../action/authAction';

const initialState = {
  token: sessionStorage.getItem('token') || null,
  access: sessionStorage.getItem('access') || null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        message: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        access: action.payload.access,
        isLoading: false,
        isSuccess: true,
        isError: false,
        message: 'Login berhasil',
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        message: action.payload,
      };
    case LOGOUT:
      sessionStorage.removeItem('token'); 
      sessionStorage.removeItem('access'); 
      return {
        ...state,
        token: null,
        access: null,
        isLoading: false,
        isError: false,
        isSuccess: false,
        message: null,
      };
    default:
      return state;
  }
};

export default authReducer;
