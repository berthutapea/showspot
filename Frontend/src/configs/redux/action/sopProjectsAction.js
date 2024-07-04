import privateClient from '../../../utils/privateClient';

export const FETCH_SOP_PROJECTS_REQUEST = 'FETCH_SOP_PROJECTS_REQUEST';
export const FETCH_SOP_PROJECTS_SUCCESS = 'FETCH_SOP_PROJECTS_SUCCESS';
export const FETCH_SOP_PROJECTS_FAILURE = 'FETCH_SOP_PROJECTS_FAILURE';

export const ADD_SOP_PROJECTS_REQUEST = 'ADD_SOP_PROJECTS_REQUEST';
export const ADD_SOP_PROJECTS_SUCCESS = 'ADD_SOP_PROJECTS_SUCCESS';
export const ADD_SOP_PROJECTS_FAILURE = 'ADD_SOP_PROJECTS_FAILURE';

export const UPDATE_SOP_PROJECT_REQUEST = 'UPDATE_SOP_PROJECT_REQUEST';
export const UPDATE_SOP_PROJECT_SUCCESS = 'UPDATE_SOP_PROJECT_SUCCESS';
export const UPDATE_SOP_PROJECT_FAILURE = 'UPDATE_SOP_PROJECT_FAILURE';

export const DELETE_SOP_PROJECT_REQUEST = 'DELETE_SOP_PROJECT_REQUEST';
export const DELETE_SOP_PROJECT_SUCCESS = 'DELETE_SOP_PROJECT_SUCCESS';
export const DELETE_SOP_PROJECT_FAILURE = 'DELETE_SOP_PROJECT_FAILURE';

export const fetchSopProjects = () => async (dispatch) => {
  dispatch({ type: FETCH_SOP_PROJECTS_REQUEST });
  try {
    const response = await privateClient.get('admin/projects/sop-project');
    dispatch({
      type: FETCH_SOP_PROJECTS_SUCCESS,
      payload: response.data.data,
    });
    // console.log(response.data.data);
  } catch (error) {
    dispatch({ type: FETCH_SOP_PROJECTS_FAILURE });
    console.error('Error fetching SOP projects:', error);
  }
};

export const addSopProject = (newProject) => async (dispatch) => {
  dispatch({ type: ADD_SOP_PROJECTS_REQUEST });
  try {
    const response = await privateClient.put(
      'admin/projects/sop-project/add',
      newProject
    );
    dispatch({
      type: ADD_SOP_PROJECTS_SUCCESS,
      payload: response.data,
    });
    console.log(response.data);
  } catch (error) {
    dispatch({ type: ADD_SOP_PROJECTS_FAILURE, payload: error.message });
    console.error('Error adding SOP project:', error);
  }
};

// // Update SOP Project
// export const updateSopProject =
//   (sopProjectId, updatedData) => async (dispatch) => {
//     dispatch({ type: UPDATE_SOP_PROJECT_REQUEST });
//     try {
//       const response = await privateClient.updateSopProject(
//         sopProjectId,updatedData);
//       dispatch({
//         type: UPDATE_SOP_PROJECT_SUCCESS,
//         payload: response.data,
//       });
//     } catch (error) {
//       dispatch({ type: UPDATE_SOP_PROJECT_FAILURE });
//       console.error('Error updating SOP project:', error);
//     }
//   };

// // Delete SOP Project
// export const deleteSopProject = (sopProjectId) => async (dispatch) => {
//   dispatch({ type: DELETE_SOP_PROJECT_REQUEST });
//   try {
//     const response = await privateClient.deleteSopProject(sopProjectId);
//     dispatch({
//       type: DELETE_SOP_PROJECT_SUCCESS,
//       payload: { sopProjectId },
//     });
//   } catch (error) {
//     dispatch({ type: DELETE_SOP_PROJECT_FAILURE });
//     console.error('Error deleting SOP project:', error);
//   }
// };
