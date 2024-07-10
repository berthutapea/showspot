import privateClient from '../../../utils/privateClient';

/* ADMIN */
export const FETCH_SOP_PROJECTS_ADMIN_REQUEST =
  'FETCH_SOP_PROJECTS_ADMIN_REQUEST';
export const FETCH_SOP_PROJECTS_ADMIN_SUCCESS =
  'FETCH_SOP_PROJECTS_ADMIN_SUCCESS';
export const FETCH_SOP_PROJECTS_ADMIN_FAILURE =
  'FETCH_SOP_PROJECTS_ADMIN_FAILURE';

export const ADD_SOP_PROJECTS_REQUEST = 'ADD_SOP_PROJECTS_REQUEST';
export const ADD_SOP_PROJECTS_SUCCESS = 'ADD_SOP_PROJECTS_SUCCESS';
export const ADD_SOP_PROJECTS_FAILURE = 'ADD_SOP_PROJECTS_FAILURE';

export const UPDATE_SOP_PROJECT_REQUEST = 'UPDATE_SOP_PROJECT_REQUEST';
export const UPDATE_SOP_PROJECT_SUCCESS = 'UPDATE_SOP_PROJECT_SUCCESS';
export const UPDATE_SOP_PROJECT_FAILURE = 'UPDATE_SOP_PROJECT_FAILURE';

export const DELETE_SOP_PROJECT_REQUEST = 'DELETE_SOP_PROJECT_REQUEST';
export const DELETE_SOP_PROJECT_SUCCESS = 'DELETE_SOP_PROJECT_SUCCESS';
export const DELETE_SOP_PROJECT_FAILURE = 'DELETE_SOP_PROJECT_FAILURE';

/* MENTOR */
export const FETCH_SOP_PROJECTS_MENTOR_REQUEST =
  'FETCH_SOP_PROJECTS_MENTOR_REQUEST';
export const FETCH_SOP_PROJECTS_MENTOR_SUCCESS =
  'FETCH_SOP_PROJECTS_MENTOR_SUCCESS';
export const FETCH_SOP_PROJECTS_MENTOR_FAILURE =
  'FETCH_SOP_PROJECTS_MENTOR_FAILURE';
/* MENTOR */

/* ADMIN */
export const fetchSopProjectsAdmin = () => async (dispatch) => {
  dispatch({ type: FETCH_SOP_PROJECTS_ADMIN_REQUEST });
  try {
    const response = await privateClient.get('admin/projects/sop-project');
    dispatch({
      type: FETCH_SOP_PROJECTS_ADMIN_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({ type: FETCH_SOP_PROJECTS_ADMIN_FAILURE });
  }
};

export const addSopProject = (newProjectSop) => async (dispatch) => {
  const data = {
    sop_project_content: newProjectSop.body,
    sop_project_title: newProjectSop.title,
  };
  dispatch({ type: ADD_SOP_PROJECTS_REQUEST });
  try {
    const response = await privateClient.put(
      'admin/projects/sop-project/add',
      data,
      {
        headers: {
          'api-key': '$11%%22**33++aAbBcCdDeEfFgG33@@??44',
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    dispatch({
      type: ADD_SOP_PROJECTS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: ADD_SOP_PROJECTS_FAILURE, payload: error.message });
  }
};

export const deleteSopProject = () => async (dispatch) => {
  dispatch({ type: DELETE_SOP_PROJECT_REQUEST });
  try {
    const response = await privateClient.delete(
      'admin/projects/sop-project/delete'
    );
    dispatch({
      type: DELETE_SOP_PROJECT_SUCCESS,
      payload: { response },
      headers: {
        'api-key': '$11%%22**33++aAbBcCdDeEfFgG33@@??44',
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error) {
    dispatch({ type: DELETE_SOP_PROJECT_FAILURE });
  }
};
/* ADMIN */

/* MENTOR */
export const fetchSopProjectsMentor = () => async (dispatch) => {
  dispatch({ type: FETCH_SOP_PROJECTS_MENTOR_REQUEST });
  try {
    const response = await privateClient.get('mentors/projects/sop-project', {
      headers: {
        'api-key': '$11%%22**33++aAbBcCdDeEfFgG33@@??44',
        'Content-Type': 'multipart/form-data',
      },
    });
    dispatch({
      type: FETCH_SOP_PROJECTS_MENTOR_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({ type: FETCH_SOP_PROJECTS_MENTOR_FAILURE, error });
  }
};

/* MENTOR */
