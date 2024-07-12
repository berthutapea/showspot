import privateClient from '../../../utils/privateClient';

export const FETCH_SHOWCASE_PROJECTS_GENERAL_REQUEST =
  'FETCH_SHOWCASE_PROJECTS_GENERAL_REQUEST';
export const FETCH_SHOWCASE_PROJECTS_GENERAL_SUCCESS =
  'FETCH_SHOWCASE_PROJECTS_GENERAL_SUCCESS';
export const FETCH_SHOWCASE_PROJECTS_GENERAL_FAILURE =
  'FETCH_SHOWCASE_PROJECTS_GENERAL_FAILURE';

export const FETCH_SHOWCASE_PROJECTS_GENERAL_BY_ID_REQUEST =
  'FETCH_SHOWCASE_PROJECTS_GENERAL_BY_ID_REQUEST';
export const FETCH_SHOWCASE_PROJECTS_GENERAL_BY_ID_SUCCESS =
  'FETCH_SHOWCASE_PROJECTS_GENERAL_BY_ID_SUCCESS';
export const FETCH_SHOWCASE_PROJECTS_GENERAL_BY_ID_FAILURE =
  'FETCH_SHOWCASE_PROJECTS_GENERAL_BY_ID_FAILURE';

export const fetchShowcaseProjectsGeneralRequest = () => ({
  type: FETCH_SHOWCASE_PROJECTS_GENERAL_REQUEST,
});

export const fetchShowcaseProjectsGeneralSuccess = (
  generalShowcaseProjectsData
) => ({
  type: FETCH_SHOWCASE_PROJECTS_GENERAL_SUCCESS,
  payload: generalShowcaseProjectsData.data,
});

export const fetchShowcaseProjectsGeneralFailure = (error) => ({
  type: FETCH_SHOWCASE_PROJECTS_GENERAL_FAILURE,
  payload: error,
});

export const fetchShowcaseProjectsGeneral = () => async (dispatch) => {
  dispatch(fetchShowcaseProjectsGeneralRequest());
  try {
    const response = await privateClient.get('home/showcaseprojects');
    dispatch(fetchShowcaseProjectsGeneralSuccess(response.data));
  } catch (error) {
    dispatch(fetchShowcaseProjectsGeneralFailure(error.message));
  }
};

export const fetchShowcaseProjectsGeneralById = (id) => async (dispatch) => {
  dispatch({ type: FETCH_SHOWCASE_PROJECTS_GENERAL_BY_ID_REQUEST });
  try {
    const response = await privateClient.get(
      `home/showcaseprojects/${id}/project`
    );
    dispatch({
      type: FETCH_SHOWCASE_PROJECTS_GENERAL_BY_ID_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_SHOWCASE_PROJECTS_GENERAL_BY_ID_FAILURE,
      payload: error.response.data.msg,
    });
  }
};
