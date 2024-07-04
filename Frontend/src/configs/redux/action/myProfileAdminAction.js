import privateClient from '../../../utils/privateClient';

export const FETCH_MY_PROFILE_ADMIN_REQUEST = 'FETCH_MY_PROFILE_ADMIN_REQUEST';
export const FETCH_MY_PROFILE_ADMIN_SUCCESS = 'FETCH_MY_PROFILE_ADMIN_SUCCESS';
export const FETCH_MY_PROFILE_ADMIN_FAILURE = 'FETCH_MY_PROFILE_ADMIN_FAILURE';

export const fetchMyProfileAdmin = (id) => async (dispatch) => {
  dispatch({ type: FETCH_MY_PROFILE_ADMIN_REQUEST });
  try {
    const response = await privateClient.get(`admin/profile/${id}`);
    dispatch({
      type: FETCH_MY_PROFILE_ADMIN_SUCCESS,
      payload: response.data.data,
    });
    console.log(response.data.data);
  } catch (error) {
    dispatch({
      type: FETCH_MY_PROFILE_ADMIN_FAILURE,
      payload: error.response.data.message,
    });
  }
};
