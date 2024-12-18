import privateClient from '../../../utils/privateClient';

/* ADMIN */
export const FETCH_MY_PROFILE_ADMIN_REQUEST = 'FETCH_MY_PROFILE_ADMIN_REQUEST';
export const FETCH_MY_PROFILE_ADMIN_SUCCESS = 'FETCH_MY_PROFILE_ADMIN_SUCCESS';
export const FETCH_MY_PROFILE_ADMIN_FAILURE = 'FETCH_MY_PROFILE_ADMIN_FAILURE';

export const UPDATE_ADMIN_REQUEST = 'UPDATE_ADMIN_REQUEST';
export const UPDATE_ADMIN_SUCCESS = 'UPDATE_ADMIN_SUCCESS';
export const UPDATE_ADMIN_FAILURE = 'UPDATE_ADMIN_FAILURE';
/* ADMIN */

/* MENTOR */
export const FETCH_MY_PROFILE_MENTOR_REQUEST =
  'FETCH_MY_PROFILE_MENTOR_REQUEST';
export const FETCH_MY_PROFILE_MENTOR_SUCCESS =
  'FETCH_MY_PROFILE_MENTOR_SUCCESS';
export const FETCH_MY_PROFILE_MENTOR_FAILURE =
  'FETCH_MY_PROFILE_MENTOR_FAILURE';

export const UPDATE_MENTOR_REQUEST = 'UPDATE_MENTOR_REQUEST';
export const UPDATE_MENTOR_SUCCESS = 'UPDATE_MENTOR_SUCCESS';
export const UPDATE_MENTOR_FAILURE = 'UPDATE_MENTOR_FAILURE';
/* MENTOR */

/* STUDENT */
export const FETCH_MY_PROFILE_STUDENT_REQUEST =
  'FETCH_MY_PROFILE_STUDENT_REQUEST';
export const FETCH_MY_PROFILE_STUDENT_SUCCESS =
  'FETCH_MY_PROFILE_STUDENT_SUCCESS';
export const FETCH_MY_PROFILE_STUDENT_FAILURE =
  'FETCH_MY_PROFILE_STUDENT_FAILURE';

export const UPDATE_STUDENT_REQUEST = 'UPDATE_STUDENT_REQUEST';
export const UPDATE_STUDENT_SUCCESS = 'UPDATE_STUDENT_SUCCESS';
export const UPDATE_STUDENT_FAILURE = 'UPDATE_STUDENT_FAILURE';
/* STUDENT */

/* ADMIN */
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
/* ADMIN */

/* MENTOR */
export const fetchMyProfileMentors = (id) => async (dispatch) => {
  dispatch({ type: FETCH_MY_PROFILE_MENTOR_REQUEST });
  try {
    const response = await privateClient.get(`/mentors/profile/${id}`, {
      headers: {
        'api-key': '$11%%22**33++aAbBcCdDeEfFgG33@@??44',
        'Content-Type': 'multipart/form-data',
      },
    });
    dispatch({
      type: FETCH_MY_PROFILE_MENTOR_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_MY_PROFILE_MENTOR_FAILURE,
      payload: error.response?.data?.message || 'Something went wrong',
    });
  }
};

export const updateMentors = (id, formData) => async (dispatch) => {
  dispatch({ type: UPDATE_MENTOR_REQUEST });
  try {
    const response = await privateClient.put(
      `mentors/profile/${id}/update`,
      formData,
      {
        headers: {
          'api-key': '$11%%22**33++aAbBcCdDeEfFgG33@@??44',
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    dispatch({
      type: UPDATE_MENTOR_SUCCESS,
      payload: response.data.msg,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_MENTOR_FAILURE,
      payload: error.response.data.msg,
    });
  }
};
/* MENTOR */

/* STUDENT */
export const fetchMyProfileStudents = (id) => async (dispatch) => {
  dispatch({ type: FETCH_MY_PROFILE_STUDENT_REQUEST });
  try {
    const response = await privateClient.get(`/students/profile/${id}`, {
      headers: {
        'api-key': '$11%%22**33++aAbBcCdDeEfFgG33@@??44',
        'Content-Type': 'multipart/form-data',
      },
    });
    dispatch({
      type: FETCH_MY_PROFILE_STUDENT_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_MY_PROFILE_STUDENT_FAILURE,
      payload: error.response?.data?.message || 'Something went wrong',
    });
  }
};

export const updateStudents = (id, formData) => async (dispatch) => {
  dispatch({ type: UPDATE_STUDENT_REQUEST });
  try {
    const response = await privateClient.put(
      `students/profile/${id}/update`,
      formData,
      {
        headers: {
          'api-key': '$11%%22**33++aAbBcCdDeEfFgG33@@??44',
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    dispatch({
      type: UPDATE_STUDENT_SUCCESS,
      payload: response.data.msg,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_STUDENT_FAILURE,
      payload: error.response.data.msg,
    });
  }
};
/* STUDENT */
