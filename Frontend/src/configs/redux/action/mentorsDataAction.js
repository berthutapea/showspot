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

export const createMentor = (mentor, file) => async (dispatch) => {
  dispatch(mentorRequest(CREATE_MENTOR_REQUEST));
  try {
    const formData = new FormData();
    formData.append('file', file);
    for (const key in mentor) {
      formData.append(key, mentor[key]);
    }

    const response = await privateClient.post('admin/mentors/create', formData);
    dispatch(mentorSuccess(CREATE_MENTOR_SUCCESS, response.data));
  } catch (error) {
    console.error('Error in createMentor:', error.response || error.message);
    dispatch(mentorFailure(CREATE_MENTOR_FAILURE, error.message));
  }
};

export const fetchMentors = () => async (dispatch) => {
  dispatch(mentorRequest(FETCH_MENTORS_REQUEST));
  try {
    const response = await privateClient.get('admin/mentors');
    dispatch(mentorSuccess(FETCH_MENTORS_SUCCESS, response.data));
  } catch (error) {
    dispatch(mentorFailure(FETCH_MENTORS_FAILURE, error.message));
  }
};

export const fetchMentorById = (id) => async (dispatch) => {
  dispatch(mentorRequest(FETCH_MENTOR_BY_ID_REQUEST));
  try {
    const response = await privateClient.get(`admin/mentors/${id}`);
    dispatch(mentorSuccess(FETCH_MENTOR_BY_ID_SUCCESS, response.data));
  } catch (error) {
    dispatch(mentorFailure(FETCH_MENTOR_BY_ID_FAILURE, error.message));
  }
};

export const fetchMentorByName = (name) => async (dispatch) => {
  dispatch(mentorRequest(FETCH_MENTOR_BY_NAME_REQUEST));
  try {
    const response = await privateClient.get(`admin/mentors/name/${name}`);
    dispatch(mentorSuccess(FETCH_MENTOR_BY_NAME_SUCCESS, response.data));
  } catch (error) {
    dispatch(mentorFailure(FETCH_MENTOR_BY_NAME_FAILURE, error.message));
  }
};

export const updateMentor = (id, mentor, file) => async (dispatch) => {
  dispatch(mentorRequest(UPDATE_MENTOR_REQUEST));
  try {
    const formData = new FormData();
    if (file) formData.append('file', file);
    for (const key in mentor) {
      formData.append(key, mentor[key]);
    }

    const response = await privateClient.put(`admin/mentors/mentor/${id}/update`, formData);
    dispatch(mentorSuccess(UPDATE_MENTOR_SUCCESS, response.data));
  } catch (error) {
    dispatch(mentorFailure(UPDATE_MENTOR_FAILURE, error.message));
  }
};

export const deleteMentor = (id) => async (dispatch) => {
  dispatch(mentorRequest(DELETE_MENTOR_REQUEST));
  try {
    const response = await privateClient.delete(`admin/mentors/mentor/${id}/delete`);
    dispatch(mentorSuccess(DELETE_MENTOR_SUCCESS,  id));
  } catch (error) {
    dispatch(mentorFailure(DELETE_MENTOR_FAILURE, error.message));
  }
};

export const changeMentorPassword = (id, newPassword) => async (dispatch) => {
  dispatch(mentorRequest(CHANGE_MENTOR_PASSWORD_REQUEST));
  try {
    const response = await privateClient.put(`admin/mentors/${id}/password`, {
      password: newPassword,
    });
    dispatch(mentorSuccess(CHANGE_MENTOR_PASSWORD_SUCCESS, response.data));
  } catch (error) {
    dispatch(mentorFailure(CHANGE_MENTOR_PASSWORD_FAILURE, error.message));
  }
};
