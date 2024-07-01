import privateClient from '../../../utils/privateClient';

const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

const loginSuccess = (userId, token, access) => {
  localStorage.setItem('userId', userId);
  localStorage.setItem('token', token);
  localStorage.setItem('access', access);
  return {
    type: LOGIN_SUCCESS,
    payload: { userId, token, access },
  };
};

const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
});

const logoutSuccess = () => {
  localStorage.removeItem('userId');
  localStorage.removeItem('token');
  localStorage.removeItem('access');
  return {
    type: LOGOUT_SUCCESS,
  };
};

const logoutFailure = (error) => ({
  type: LOGOUT_FAILURE,
  payload: error,
});

const loginUser =
  ({ username, password }) =>
  async (dispatch) => {
    dispatch(loginRequest());
    try {
      const response = await privateClient.post('login', {
        username,
        password,
      });
      const { user_id } = response.data.data;
      const { session_code } = response.data.data;
      const { access } = response.data;
      dispatch(loginSuccess(user_id, session_code, access));
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };

const logoutUser = () => async (dispatch) => {
  dispatch(logoutRequest());
  try {
    await privateClient.delete('logout');
    dispatch(logoutSuccess());
  } catch (error) {
    console.error(
      'Logout error:',
      error.response ? error.response.data : error.message
    );
    dispatch(logoutFailure(error.message));
  }
};

export {
  loginRequest,
  loginSuccess,
  loginFailure,
  loginUser,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
  logoutUser,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
};
