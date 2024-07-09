import privateClient from '../../../utils/privateClient';

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

export const FETCH_SHOWCASE_PROJECTS_REQUEST =
  'FETCH_SHOWCASE_PROJECTS_REQUEST';
export const FETCH_SHOWCASE_PROJECTS_SUCCESS =
  'FETCH_SHOWCASE_PROJECTS_SUCCESS';
export const FETCH_SHOWCASE_PROJECTS_FAILURE =
  'FETCH_SHOWCASE_PROJECTS_FAILURE';

export const ADD_PROJECT_REQUEST = 'ADD_SHOWCASE_PROJECT_REQUEST';
export const ADD_PROJECT_SUCCESS = 'ADD_PROJECT_SUCCESS';
export const ADD_PROJECT_FAILURE = 'ADD_PROJECT_FAILURE';

export const UPDATE_PROJECT_REQUEST = 'UPDATE_PROJECT_REQUEST';
export const UPDATE_PROJECT_SUCCESS = 'UPDATE_PROJECT_SUCCESS';
export const UPDATE_PROJECT_FAILURE = 'UPDATE_PROJECT_FAILURE';

export const DELETE_PROJECT_REQUEST = 'DELETE_PROJECT_REQUEST';
export const DELETE_PROJECT_SUCCESS = 'DELETE_PROJECT_SUCCESS';
export const DELETE_PROJECT_FAILURE = 'DELETE_PROJECT_FAILURE';

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

/* ADMIN */
export const fetchShowCaseProjectsAdmin = () => async (dispatch) => {
  dispatch({ type: FETCH_SHOWCASE_PROJECTS_REQUEST });
  try {
    const response = await privateClient.get(
      'students/projects/showcase-project'
    );
    // console.log(response);
    dispatch({
      type: FETCH_SHOWCASE_PROJECTS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: FETCH_SHOWCASE_PROJECTS_FAILURE });
    console.error('Error deleting SHOWCASE project:', error);
  }
};

fetchShowCaseProjectsAdmin();

// Delete ShowCase Project
export const deleteProject = () => async (dispatch) => {
  dispatch({ type: DELETE_PROJECT_REQUEST });
  try {
    const response = await privateClient.delete(
      'admin/projects/showcase-project/delete'
    );
    dispatch({
      type: DELETE_PROJECT_SUCCESS,
      payload: { response },
      headers: {
        'api-key': '$11%%22**33++aAbBcCdDeEfFgG33@@??44',
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error) {
    dispatch({ type: DELETE_PROJECT_FAILURE });
    // console.error('Error deleting SHOWCASE project:', error);
  }
};

/* STUDENT */
export const fetchShowCaseProjects = () => async (dispatch) => {
  dispatch({ type: FETCH_SHOWCASE_PROJECTS_REQUEST });
  try {
    const response = await privateClient.get(
      'students/projects/showcase-project'
    );

    dispatch({
      type: FETCH_SHOWCASE_PROJECTS_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({ type: FETCH_SHOWCASE_PROJECTS_FAILURE });
  }
};

export const addProject = (newProject) => async (dispatch) => {
  const data = {
    project: newProject.body,
  };
  dispatch({ type: ADD_PROJECT_REQUEST });
  try {
    const response = await privateClient.put(
      'admin/projects/showcase-project/add',
      data,
      {
        headers: {
          'api-key': '$11%%22**33++aAbBcCdDeEfFgG33@@??44',
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    dispatch({
      type: ADD_PROJECT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: ADD_PROJECT_FAILURE, payload: error.message });
  }
};
