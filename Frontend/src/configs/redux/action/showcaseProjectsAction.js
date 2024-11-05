import privateClient from '../../../utils/privateClient.js';

/* ADMIN */
export const FETCH_SHOWCASE_PROJECTS_PENDING_ADMIN_REQUEST =
  'FETCH_SHOWCASE_PROJECTS_PENDING_ADMIN_REQUEST';
export const FETCH_SHOWCASE_PROJECTS_PENDING_ADMIN_SUCCESS =
  'FETCH_SHOWCASE_PROJECTS_PENDING_ADMIN_SUCCESS';
export const FETCH_SHOWCASE_PROJECTS_PENDING_ADMIN_FAILURE =
  'FETCH_SHOWCASE_PROJECTS_PENDING_ADMIN_FAILURE';

export const FETCH_SHOWCASE_PROJECTS_CONFIRMED_ADMIN_REQUEST =
  'FETCH_SHOWCASE_PROJECTS_CONFIRMED_ADMIN_REQUEST';
export const FETCH_SHOWCASE_PROJECTS_CONFIRMED_ADMIN_SUCCESS =
  'FETCH_SHOWCASE_PROJECTS_CONFIRMED_ADMIN_SUCCESS';
export const FETCH_SHOWCASE_PROJECTS_CONFIRMED_ADMIN_FAILURE =
  'FETCH_SHOWCASE_PROJECTS_CONFIRMED_ADMIN_FAILURE';

export const FETCH_SHOWCASE_PROJECTS_REJECTED_ADMIN_REQUEST =
  'FETCH_SHOWCASE_PROJECTS_REJECTED_ADMIN_REQUEST';
export const FETCH_SHOWCASE_PROJECTS_REJECTED_ADMIN_SUCCESS =
  'FETCH_SHOWCASE_PROJECTS_REJECTED_ADMIN_SUCCESS';
export const FETCH_SHOWCASE_PROJECTS_REJECTED_ADMIN_FAILURE =
  'FETCH_SHOWCASE_PROJECTS_REJECTED_ADMIN_FAILURE';

export const FETCH_SHOWCASE_PROJECTS_ADMIN_BY_ID_REQUEST =
  'FETCH_SHOWCASE_PROJECTS_ADMIN_BY_ID_REQUEST';
export const FETCH_SHOWCASE_PROJECTS_ADMIN_BY_ID_SUCCESS =
  'FETCH_SHOWCASE_PROJECTS_ADMIN_BY_ID_SUCCESS';
export const FETCH_SHOWCASE_PROJECTS_ADMIN_BY_ID_FAILURE =
  'FETCH_SHOWCASE_PROJECTS_ADMIN_BY_ID_FAILURE';

export const EVALUATION_SHOWCASE_PROJECTS_ADMIN_REQUEST =
  'EVALUATION_SHOWCASE_PROJECTS_ADMIN_REQUEST';
export const EVALUATION_SHOWCASE_PROJECTS_ADMIN_SUCCESS =
  'EVALUATION_SHOWCASE_PROJECTS_ADMIN_SUCCESS';
export const EVALUATION_SHOWCASE_PROJECTS_ADMIN_FAILURE =
  'EVALUATION_SHOWCASE_PROJECTS_ADMIN_FAILURE';

export const DELETE_SHOWCASE_PROJECTS_ADMIN_SUCCESS =
  'DELETE_SHOWCASE_PROJECTS_ADMIN_SUCCESS';
export const DELETE_SHOWCASE_PROJECTS_ADMIN_FAILURE =
  'DELETE_SHOWCASE_PROJECTS_ADMIN_FAILURE';
/* ADMIN */

/* MENTOR */
export const FETCH_SHOWCASE_PROJECTS_PENDING_MENTOR_REQUEST =
  'FETCH_SHOWCASE_PROJECTS_PENDING_MENTOR_REQUEST';
export const FETCH_SHOWCASE_PROJECTS_PENDING_MENTOR_SUCCESS =
  'FETCH_SHOWCASE_PROJECTS_PENDING_MENTOR_SUCCESS';
export const FETCH_SHOWCASE_PROJECTS_PENDING_MENTOR_FAILURE =
  'FETCH_SHOWCASE_PROJECTS_PENDING_MENTOR_FAILURE';

export const FETCH_SHOWCASE_PROJECTS_CONFIRMED_MENTOR_REQUEST =
  'FETCH_SHOWCASE_PROJECTS_CONFIRMED_MENTOR_REQUEST';
export const FETCH_SHOWCASE_PROJECTS_CONFIRMED_MENTOR_SUCCESS =
  'FETCH_SHOWCASE_PROJECTS_CONFIRMED_MENTOR_SUCCESS';
export const FETCH_SHOWCASE_PROJECTS_CONFIRMED_MENTOR_FAILURE =
  'FETCH_SHOWCASE_PROJECTS_CONFIRMED_MENTOR_FAILURE';

export const FETCH_SHOWCASE_PROJECTS_REJECTED_MENTOR_REQUEST =
  'FETCH_SHOWCASE_PROJECTS_REJECTED_MENTOR_REQUEST';
export const FETCH_SHOWCASE_PROJECTS_REJECTED_MENTOR_SUCCESS =
  'FETCH_SHOWCASE_PROJECTS_REJECTED_MENTOR_SUCCESS';
export const FETCH_SHOWCASE_PROJECTS_REJECTED_MENTOR_FAILURE =
  'FETCH_SHOWCASE_PROJECTS_REJECTED_MENTOR_FAILURE';

export const FETCH_SHOWCASE_PROJECTS_MENTOR_BY_ID_REQUEST =
  'FETCH_SHOWCASE_PROJECTS_MENTOR_BY_ID_REQUEST';
export const FETCH_SHOWCASE_PROJECTS_MENTOR_BY_ID_SUCCESS =
  'FETCH_SHOWCASE_PROJECTS_MENTOR_BY_ID_SUCCESS';
export const FETCH_SHOWCASE_PROJECTS_MENTOR_BY_ID_FAILURE =
  'FETCH_SHOWCASE_PROJECTS_MENTOR_BY_ID_FAILURE';

export const EVALUATION_SHOWCASE_PROJECTS_MENTOR_REQUEST =
  'EVALUATION_SHOWCASE_PROJECTS_MENTOR_REQUEST';
export const EVALUATION_SHOWCASE_PROJECTS_MENTOR_SUCCESS =
  'EVALUATION_SHOWCASE_PROJECTS_MENTOR_SUCCESS';
export const EVALUATION_SHOWCASE_PROJECTS_MENTOR_FAILURE =
  'EVALUATION_SHOWCASE_PROJECTS_MENTOR_FAILURE';

export const DELETE_SHOWCASE_PROJECTS_MENTOR_SUCCESS =
  'DELETE_SHOWCASE_PROJECTS_MENTOR_SUCCESS';
export const DELETE_SHOWCASE_PROJECTS_MENTOR_FAILURE =
  'DELETE_SHOWCASE_PROJECTS_MENTOR_FAILURE';
/* MENTOR */

/* STUDENT */
export const FETCH_SHOWCASE_PROJECTS_STUDENT_REQUEST =
  'FETCH_SHOWCASE_PROJECTS_STUDENT_REQUEST';
export const FETCH_SHOWCASE_PROJECTS_STUDENT_SUCCESS =
  'FETCH_SHOWCASE_PROJECTS_STUDENT_SUCCESS';
export const FETCH_SHOWCASE_PROJECTS_STUDENT_FAILURE =
  'FETCH_SHOWCASE_PROJECTS_STUDENT_FAILURE';

export const UPLOAD_SHOWCASE_PROJECTS_STUDENT_REQUEST =
  'UPLOAD_SHOWCASE_PROJECTS_STUDENT_REQUEST';
export const UPLOAD_SHOWCASE_PROJECTS_STUDENT_SUCCESS =
  'UPLOAD_SHOWCASE_PROJECTS_STUDENT_SUCCESS';
export const UPLOAD_SHOWCASE_PROJECTS_STUDENT_FAILURE =
  'UPLOAD_SHOWCASE_PROJECTS_STUDENT_FAILURE';
/* STUDENT */

/* ADMIN */
export const showcaseProjectsAdminRequest = (actionType) => ({
  type: actionType,
});

export const showcaseProjectsAdminSuccess = (actionType, data) => ({
  type: actionType,
  payload: data,
});

export const showcaseProjectsAdminFailure = (actionType, error) => ({
  type: actionType,
  payload: error,
});

export const fetchShowcaseProjectsPendingAdmin =
  (page = 0) =>
  async (dispatch) => {
    dispatch(
      showcaseProjectsAdminRequest(
        FETCH_SHOWCASE_PROJECTS_PENDING_ADMIN_REQUEST
      )
    );
    try {
      const response = await privateClient.get(
        `admin/projects/showcase-projects/pending/${page}`
      );
      dispatch(
        showcaseProjectsAdminSuccess(
          FETCH_SHOWCASE_PROJECTS_PENDING_ADMIN_SUCCESS,
          response.data.data.pending
        )
      );
    } catch (error) {
      dispatch(
        showcaseProjectsAdminFailure(
          FETCH_SHOWCASE_PROJECTS_PENDING_ADMIN_FAILURE,
          error.message
        )
      );
    }
  };

export const fetchShowcaseProjectsConfirmedAdmin =
  (page = 0) =>
  async (dispatch) => {
    dispatch(
      showcaseProjectsAdminRequest(
        FETCH_SHOWCASE_PROJECTS_CONFIRMED_ADMIN_REQUEST
      )
    );
    try {
      const response = await privateClient.get(
        `admin/projects/showcase-projects/confirmed/${page}`
      );
      dispatch(
        showcaseProjectsAdminSuccess(
          FETCH_SHOWCASE_PROJECTS_CONFIRMED_ADMIN_SUCCESS,
          response.data.data.confirmed
        )
      );
    } catch (error) {
      dispatch(
        showcaseProjectsAdminFailure(
          FETCH_SHOWCASE_PROJECTS_CONFIRMED_ADMIN_FAILURE,
          error.message
        )
      );
    }
  };

export const fetchShowcaseProjectsRejectedAdmin =
  (page = 0) =>
  async (dispatch) => {
    dispatch(
      showcaseProjectsAdminRequest(
        FETCH_SHOWCASE_PROJECTS_REJECTED_ADMIN_REQUEST
      )
    );
    try {
      const response = await privateClient.get(
        `admin/projects/showcase-projects/rejected/${page}`
      );
      dispatch(
        showcaseProjectsAdminSuccess(
          FETCH_SHOWCASE_PROJECTS_REJECTED_ADMIN_SUCCESS,
          response.data.data.rejected
        )
      );
    } catch (error) {
      dispatch(
        showcaseProjectsAdminFailure(
          FETCH_SHOWCASE_PROJECTS_REJECTED_ADMIN_FAILURE,
          error.message
        )
      );
    }
  };

export const fetchShowcaseProjectsAdminById = (id) => async (dispatch) => {
  dispatch({ type: FETCH_SHOWCASE_PROJECTS_ADMIN_BY_ID_REQUEST });
  try {
    const response = await privateClient.get(
      `admin/projects/showcase-projects/id/${id}/detail`
    );
    dispatch({
      type: FETCH_SHOWCASE_PROJECTS_ADMIN_BY_ID_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_SHOWCASE_PROJECTS_ADMIN_BY_ID_FAILURE,
      payload: error.response.data.msg,
    });
  }
};

export const evaluationShowcaseProjectsAdmin =
  (id, formData, navigate) => async (dispatch) => {
    dispatch({ type: EVALUATION_SHOWCASE_PROJECTS_ADMIN_REQUEST });
    try {
      const response = await privateClient.put(
        `admin/projects/showcase-projects/${id}/valuation`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      dispatch({
        type: EVALUATION_SHOWCASE_PROJECTS_ADMIN_SUCCESS,
        payload: response.data.msg,
      });

      navigate('/admin/showcase-projects');
    } catch (error) {
      dispatch({
        type: EVALUATION_SHOWCASE_PROJECTS_ADMIN_FAILURE,
        payload: error.response.data.msg,
      });
    }
  };

export const deleteShowcaseProjectsAdmin = (id) => {
  return async (dispatch) => {
    try {
      const response = await privateClient.delete(
        `admin/projects/showcase-projects/${id}/delete`
      );
      dispatch({
        type: DELETE_SHOWCASE_PROJECTS_ADMIN_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_SHOWCASE_PROJECTS_ADMIN_FAILURE,
        payload: error.message,
      });
    }
  };
};
/* ADMIN */

/* MENTOR */
export const showcaseProjectsMentorRequest = (actionType) => ({
  type: actionType,
});

export const showcaseProjectsMentorSuccess = (actionType, data) => ({
  type: actionType,
  payload: data,
});

export const showcaseProjectsMentorFailure = (actionType, error) => ({
  type: actionType,
  payload: error,
});

export const fetchShowcaseProjectsPendingMentors =
  (page = 0) =>
  async (dispatch) => {
    dispatch(
      showcaseProjectsMentorRequest(
        FETCH_SHOWCASE_PROJECTS_PENDING_MENTOR_REQUEST
      )
    );
    try {
      const response = await privateClient.get(
        `mentors/projects/showcase-projects/pending/${page}`
      );
      dispatch(
        showcaseProjectsMentorSuccess(
          FETCH_SHOWCASE_PROJECTS_PENDING_MENTOR_SUCCESS,
          response.data.data.pending
        )
      );
    } catch (error) {
      dispatch(
        showcaseProjectsMentorFailure(
          FETCH_SHOWCASE_PROJECTS_PENDING_MENTOR_FAILURE,
          error.message
        )
      );
    }
  };

export const fetchShowcaseProjectsConfirmedMentors =
  (page = 0) =>
  async (dispatch) => {
    dispatch(
      showcaseProjectsMentorRequest(
        FETCH_SHOWCASE_PROJECTS_CONFIRMED_MENTOR_REQUEST
      )
    );
    try {
      const response = await privateClient.get(
        `mentors/projects/showcase-projects/confirmed/${page}`
      );
      dispatch(
        showcaseProjectsMentorSuccess(
          FETCH_SHOWCASE_PROJECTS_CONFIRMED_MENTOR_SUCCESS,
          response.data.data.confirmed
        )
      );
    } catch (error) {
      dispatch(
        showcaseProjectsMentorFailure(
          FETCH_SHOWCASE_PROJECTS_CONFIRMED_MENTOR_FAILURE,
          error.message
        )
      );
    }
  };

export const fetchShowcaseProjectsRejectedMentors =
  (page = 0) =>
  async (dispatch) => {
    dispatch(
      showcaseProjectsMentorRequest(
        FETCH_SHOWCASE_PROJECTS_REJECTED_MENTOR_REQUEST
      )
    );
    try {
      const response = await privateClient.get(
        `mentors/projects/showcase-projects/rejected/${page}`
      );
      dispatch(
        showcaseProjectsMentorSuccess(
          FETCH_SHOWCASE_PROJECTS_REJECTED_MENTOR_SUCCESS,
          response.data.data.rejected
        )
      );
    } catch (error) {
      dispatch(
        showcaseProjectsMentorFailure(
          FETCH_SHOWCASE_PROJECTS_REJECTED_MENTOR_FAILURE,
          error.message
        )
      );
    }
  };

export const fetchShowcaseProjectsMentorsById = (id) => async (dispatch) => {
  dispatch({ type: FETCH_SHOWCASE_PROJECTS_MENTOR_BY_ID_REQUEST });
  try {
    const response = await privateClient.get(
      `mentors/projects/showcase-projects/id/${id}/detail`
    );
    dispatch({
      type: FETCH_SHOWCASE_PROJECTS_MENTOR_BY_ID_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_SHOWCASE_PROJECTS_MENTOR_BY_ID_FAILURE,
      payload: error.response.data.msg,
    });
  }
};

export const evaluationShowcaseProjectsMentors =
  (id, formData, navigate) => async (dispatch) => {
    dispatch({ type: EVALUATION_SHOWCASE_PROJECTS_MENTOR_REQUEST });
    try {
      const response = await privateClient.put(
        `mentors/projects/showcase-projects/${id}/valuation`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      dispatch({
        type: EVALUATION_SHOWCASE_PROJECTS_MENTOR_SUCCESS,
        payload: response.data.msg,
      });

      navigate('/mentors/showcase-projects');
    } catch (error) {
      dispatch({
        type: EVALUATION_SHOWCASE_PROJECTS_MENTOR_FAILURE,
        payload: error.response.data.msg,
      });
    }
  };

export const deleteShowcaseProjectsMentors = (id) => {
  return async (dispatch) => {
    try {
      const response = await privateClient.delete(
        `mentors/projects/showcase-projects/${id}/delete`
      );
      dispatch({
        type: DELETE_SHOWCASE_PROJECTS_MENTOR_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_SHOWCASE_PROJECTS_MENTOR_FAILURE,
        payload: error.message,
      });
    }
  };
};
/* MENTOR */

/* STUDENT */
export const showcaseProjectsStudentRequest = (actionType) => ({
  type: actionType,
});

export const showcaseProjectsStudentSuccess = (actionType, data) => ({
  type: actionType,
  payload: data,
});

export const showcaseProjectsStudentFailure = (actionType, error) => ({
  type: actionType,
  payload: error,
});

export const fetchShowcaseProjectsStudents =
  (id, page = 1) =>
  async (dispatch) => {
    dispatch(
      showcaseProjectsStudentRequest(FETCH_SHOWCASE_PROJECTS_STUDENT_REQUEST)
    );
    console.log(`students/projects/showcase-project/${id}/${page}`)
    try {
      const response = await privateClient.get(
        `students/projects/showcase-project/${id}/${page}`,
        {
          headers: {
            'api-key': '$11%%22**33++aAbBcCdDeEfFgG33@@??44',
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log(response);
      dispatch(
        showcaseProjectsStudentSuccess(
          FETCH_SHOWCASE_PROJECTS_STUDENT_SUCCESS,
          response.data.data
        )
      );
    } catch (error) {
      dispatch(
        showcaseProjectsStudentFailure(
          FETCH_SHOWCASE_PROJECTS_STUDENT_FAILURE,
          error.message
        )
      );
    }
  };

export const uploadShowcaseProjectsStudents = (formData, navigate) => {
  return async (dispatch) => {
    dispatch({ type: UPLOAD_SHOWCASE_PROJECTS_STUDENT_REQUEST });

    try {
      const response = await privateClient.post(
        'students/projects/add',
        formData,
        {
          headers: {
            'Content-type': 'multipart/form-data',
            'api-key': '$11%%22**33++aAbBcCdDeEfFgG33@@??44',
          },
        }
      );
      dispatch({
        type: UPLOAD_SHOWCASE_PROJECTS_STUDENT_SUCCESS,
        payload: response.data,
      });
      console.log(response.data);
      navigate('/students/showcase-projects');
      return response.data;
    } catch (error) {
      dispatch({
        type: UPLOAD_SHOWCASE_PROJECTS_STUDENT_FAILURE,
        payload: error.message,
      });
      throw error;
    }
  };
};
/* STUDENT */
