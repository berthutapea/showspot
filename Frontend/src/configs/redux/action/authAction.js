import privateClient from '../../../utils/privateClient';

// Action Types
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGOUT = 'LOGOUT';

// Action Creators
const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

const loginSuccess = (token, access) => {
  // Simpan token di sessionStorage
  sessionStorage.setItem('token', token);
  sessionStorage.setItem('access', access);
  return {
    type: LOGIN_SUCCESS,
    payload: { token, access },
  };
};

const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

const logout = () => {
  // Hapus token dari sessionStorage
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('access');
  return {
    type: LOGOUT,
  };
};

// Thunk Action
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
      dispatch(loginSuccess(session_code, access));
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };

export {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
  loginUser,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
};
