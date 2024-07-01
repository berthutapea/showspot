import privateClient from '../../../utils/privateClient';

const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGOUT = 'LOGOUT';

const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

const loginSuccess = (userId, token, access) => {
  sessionStorage.setItem('userId', userId);
  sessionStorage.setItem('token', token);
  sessionStorage.setItem('access', access);
  return {
    type: LOGIN_SUCCESS,
    payload: { userId, token, access },
  };
};

const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

const logoutSuccess = (userId, token, access) => {
  sessionStorage.removeItem('userId');
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('access');
  return {
    type: LOGOUT,
    payload: { userId, token, access },
  };
};

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

const logoutUser =
  ({ username, password }) =>
  async (dispatch) => {
    dispatch(loginRequest());
    try {
      const response = await privateClient.delete('logout', {
        username,
        password,
      });
      const { user_id } = response.data.data;
      const { session_code } = response.data.data;
      const { access } = response.data;
      dispatch(logoutSuccess(user_id, session_code, access));
      console.log(logoutSuccess);
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };

export {
  loginRequest,
  loginSuccess,
  loginFailure,
  loginUser,
  logoutUser,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
};
