import privateClient from '../../../utils/privateClient';

export const CREATE_MENTOR_REQUEST = 'CREATE_MENTOR_REQUEST';
export const CREATE_MENTOR_SUCCESS = 'CREATE_MENTOR_SUCCESS';
export const CREATE_MENTOR_FAILURE = 'CREATE_MENTOR_FAILURE';

export const FETCH_MENTORS_REQUEST = 'FETCH_MENTORS_REQUEST';
export const FETCH_MENTORS_SUCCESS = 'FETCH_MENTORS_SUCCESS';
export const FETCH_MENTORS_FAILURE = 'FETCH_MENTORS_FAILURE';

export const FETCH_MENTOR_BY_ID_REQUEST = 'FETCH_MENTOR_BY_ID_REQUEST';
export const FETCH_MENTOR_BY_ID_SUCCESS = 'FETCH_MENTOR_BY_ID_SUCCESS';
export const FETCH_MENTOR_BY_ID_FAILURE = 'FETCH_MENTOR_BY_ID_FAILURE';

export const FETCH_MENTOR_BY_NAME_REQUEST = 'FETCH_MENTOR_BY_NAME_REQUEST';
export const FETCH_MENTOR_BY_NAME_SUCCESS = 'FETCH_MENTOR_BY_NAME_SUCCESS';
export const FETCH_MENTOR_BY_NAME_FAILURE = 'FETCH_MENTOR_BY_NAME_FAILURE';

export const UPDATE_MENTOR_REQUEST = 'UPDATE_MENTOR_REQUEST';
export const UPDATE_MENTOR_SUCCESS = 'UPDATE_MENTOR_SUCCESS';
export const UPDATE_MENTOR_FAILURE = 'UPDATE_MENTOR_FAILURE';

export const DELETE_MENTOR_REQUEST = 'DELETE_MENTOR_REQUEST';
export const DELETE_MENTOR_SUCCESS = 'DELETE_MENTOR_SUCCESS';
export const DELETE_MENTOR_FAILURE = 'DELETE_MENTOR_FAILURE';

export const CHANGE_MENTOR_PASSWORD_REQUEST = 'CHANGE_MENTOR_PASSWORD_REQUEST';
export const CHANGE_MENTOR_PASSWORD_SUCCESS = 'CHANGE_MENTOR_PASSWORD_SUCCESS';
export const CHANGE_MENTOR_PASSWORD_FAILURE = 'CHANGE_MENTOR_PASSWORD_FAILURE';

export const MENTOR_REQUEST = 'MENTOR_REQUEST';
export const MENTOR_SUCCESS = 'MENTOR_SUCCESS';
export const MENTOR_FAILURE = 'MENTOR_FAILURE';

export const mentorRequest = (actionType) => ({
  type: actionType,
});

export const mentorSuccess = (actionType, data) => ({
  type: actionType,
  payload: data.data,
});

export const mentorFailure = (actionType, error) => ({
  type: actionType,
  payload: error,
});

export const fetchMentors = () => async (dispatch) => {
  dispatch(mentorRequest(FETCH_MENTORS_REQUEST));
  try {
    const response = await privateClient.get('admin/mentors');
    dispatch(mentorSuccess(FETCH_MENTORS_SUCCESS, response.data));
  } catch (error) {
    dispatch(mentorFailure(FETCH_MENTORS_FAILURE, error.message));
    console.log(error.message);
  }
};

export const createMentor = (formData, navigate) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_MENTOR_REQUEST });

    try {
      const response = await privateClient.post(
        'admin/mentors/create',
        formData,
        {
          headers: {
            'Content-type': 'multipart/form-data',
          },
        }
      );
      dispatch({
        type: CREATE_MENTOR_SUCCESS,
        payload: response.data,
      });
      navigate('/admin/mentors-data');
      return response.data;
    } catch (error) {
      dispatch({
        type: CREATE_MENTOR_FAILURE,
        payload: error.message,
      });
      throw error;
    }
  };
};

export const updateMentor = (id, formData, navigate) => async (dispatch) => {
  dispatch({ type: UPDATE_MENTOR_REQUEST });
  try {
    const response = await privateClient.put(
      `admin/mentors/${id}/update/`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    dispatch({
      type: UPDATE_MENTOR_SUCCESS,
      payload: response.data.msg,
    });

    navigate('/admin/mentors-data');
  } catch (error) {
    dispatch({
      type: UPDATE_MENTOR_FAILURE,
      payload: error.response.data.msg,
    });
  }
};

export const deleteMentor = (id) => {
  return async (dispatch) => {
    try {
      const response = await privateClient.delete(`admin/mentors/${id}/delete`);
      dispatch({
        type: DELETE_MENTOR_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_MENTOR_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const fetchMentorById = (id) => async (dispatch) => {
  dispatch({ type: FETCH_MENTOR_BY_ID_REQUEST });
  try {
    const response = await privateClient.get(`admin/mentors/id/${id}`);
    dispatch({
      type: FETCH_MENTOR_BY_ID_SUCCESS,
      payload: response.data.data,
    });
    // console.log(response.data);
  } catch (error) {
    dispatch({
      type: FETCH_MENTOR_BY_ID_FAILURE,
      payload: error.response.data,
    });
  }
};
