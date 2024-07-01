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

export const MENTOR_ERROR = 'MENTOR_ERROR';
export const MENTOR_LOADING = 'MENTOR_LOADING';

const mentorRequest = (type) => ({
  type,
});

const mentorSuccess = (type, payload) => ({
  type,
  payload,
});

const mentorFailure = (type, error) => ({
  type,
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

    const response = await privateClient.post('mentors', formData);

    if (response.status === 200) {
      dispatch(mentorSuccess(CREATE_MENTOR_SUCCESS, response.data));
    } else {
      dispatch(mentorFailure(CREATE_MENTOR_FAILURE, response.data.message));
    }
  } catch (error) {
    dispatch(mentorFailure(CREATE_MENTOR_FAILURE, error.message));
  }
};

export const fetchMentors = () => async (dispatch) => {
  dispatch(mentorRequest(FETCH_MENTORS_REQUEST));
  try {
    const response = await privateClient.get('admin/mentors');

    if (response.status === 200) {
      dispatch(mentorSuccess(FETCH_MENTORS_SUCCESS, response.data));
    } else {
      dispatch(mentorFailure(FETCH_MENTORS_FAILURE, response.data.message));
    }
  } catch (error) {
    dispatch(mentorFailure(FETCH_MENTORS_FAILURE, error.message));
  }
};

export const fetchMentorById = (id) => async (dispatch) => {
  dispatch(mentorRequest(FETCH_MENTOR_BY_ID_REQUEST));
  try {
    const response = await privateClient.get(`mentors/${id}`);

    if (response.status === 200) {
      dispatch(mentorSuccess(FETCH_MENTOR_BY_ID_SUCCESS, response.data));
    } else {
      dispatch(
        mentorFailure(FETCH_MENTOR_BY_ID_FAILURE, response.data.message)
      );
    }
  } catch (error) {
    dispatch(mentorFailure(FETCH_MENTOR_BY_ID_FAILURE, error.message));
  }
};

export const fetchMentorByName = (name) => async (dispatch) => {
  dispatch(mentorRequest(FETCH_MENTOR_BY_NAME_REQUEST));
  try {
    const response = await privateClient.get(`mentors/name/${name}`);

    if (response.status === 200) {
      dispatch(mentorSuccess(FETCH_MENTOR_BY_NAME_SUCCESS, response.data));
    } else {
      dispatch(
        mentorFailure(FETCH_MENTOR_BY_NAME_FAILURE, response.data.message)
      );
    }
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

    const response = await privateClient.put(`mentors/${id}`, formData);

    if (response.status === 200) {
      dispatch(mentorSuccess(UPDATE_MENTOR_SUCCESS, response.data));
    } else {
      dispatch(mentorFailure(UPDATE_MENTOR_FAILURE, response.data.message));
    }
  } catch (error) {
    dispatch(mentorFailure(UPDATE_MENTOR_FAILURE, error.message));
  }
};

export const deleteMentor = (id) => async (dispatch) => {
  dispatch(mentorRequest(DELETE_MENTOR_REQUEST));
  try {
    const response = await privateClient.delete(`mentors/${id}`);

    if (response.status === 200) {
      dispatch(mentorSuccess(DELETE_MENTOR_SUCCESS, id));
    } else {
      dispatch(mentorFailure(DELETE_MENTOR_FAILURE, response.data.message));
    }
  } catch (error) {
    dispatch(mentorFailure(DELETE_MENTOR_FAILURE, error.message));
  }
};

export const changeMentorPassword = (id, newPassword) => async (dispatch) => {
  dispatch(mentorRequest(CHANGE_MENTOR_PASSWORD_REQUEST));
  try {
    const response = await privateClient.put(`mentors/password/${id}`, {
      password: newPassword,
    });

    if (response.status === 200) {
      dispatch(mentorSuccess(CHANGE_MENTOR_PASSWORD_SUCCESS, response.data));
    } else {
      dispatch(
        mentorFailure(CHANGE_MENTOR_PASSWORD_FAILURE, response.data.message)
      );
    }
  } catch (error) {
    dispatch(mentorFailure(CHANGE_MENTOR_PASSWORD_FAILURE, error.message));
  }
};
