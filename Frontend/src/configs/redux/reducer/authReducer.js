import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from '../action/authAction';

const initialState = {
  userId: localStorage.getItem('userId') || null,
  token: localStorage.getItem('token') || null,
  access: localStorage.getItem('access') || null,
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
        userId: action.payload.userId,
        token: action.payload.token,
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
    case LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        message: null,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        userId: null,
        token: null,
        access: null,
        isLoading: false,
        isError: false,
        isSuccess: true,
        message: 'Logout berhasil',
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
