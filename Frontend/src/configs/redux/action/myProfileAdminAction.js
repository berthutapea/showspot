import privateClient from '../../../utils/privateClient';

export const FETCH_MY_PROFILE_ADMIN_REQUEST = 'FETCH_MY_PROFILE_ADMIN_REQUEST';
export const FETCH_MY_PROFILE_ADMIN_SUCCESS = 'FETCH_MY_PROFILE_ADMIN_SUCCESS';
export const FETCH_MY_PROFILE_ADMIN_FAILURE = 'FETCH_MY_PROFILE_ADMIN_FAILURE';

export const UPDATE_ADMIN_REQUEST = 'UPDATE_ADMIN_REQUEST';
export const UPDATE_ADMIN_SUCCESS = 'UPDATE_ADMIN_SUCCESS';
export const UPDATE_ADMIN_FAILURE = 'UPDATE_ADMIN_FAILURE';

export const fetchMyProfileAdmin =
  (id = 0) =>
  async (dispatch) => {
    dispatch({ type: FETCH_MY_PROFILE_ADMIN_REQUEST });
    try {
      const response = await privateClient.get(
        `/admin/profile/admin-${id + 1}`,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      dispatch({
        type: FETCH_MY_PROFILE_ADMIN_SUCCESS,
        payload: response.data.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_MY_PROFILE_ADMIN_FAILURE,
        payload: error.response?.data?.message || 'Something went wrong',
      });
    }
  };

export const updateAdmin =
  (id = 0, formData) =>
  async (dispatch) => {
    dispatch({ type: UPDATE_ADMIN_REQUEST });
    try {
      const response = await privateClient.put(
        `admin/profile/${id}/update`,
        formData,
        {
          headers: {
            'api-key': '$11%%22**33++aAbBcCdDeEfFgG33@@??44',
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      dispatch({
        type: UPDATE_ADMIN_SUCCESS,
        payload: response.data.msg,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_ADMIN_FAILURE,
        payload: error.response.data.msg,
      });
    }
  };
