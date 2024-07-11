import privateClient from '../../../utils/privateClient';

export const FETCH_SHOWCASE_PROJECTS_GENERAL_REQUEST =
  'FETCH_SHOWCASE_PROJECTS_GENERAL_REQUEST';
export const FETCH_SHOWCASE_PROJECTS_GENERAL_SUCCESS =
  'FETCH_SHOWCASE_PROJECTS_GENERAL_SUCCESS';
export const FETCH_SHOWCASE_PROJECTS_GENERAL_FAILURE =
  'FETCH_SHOWCASE_PROJECTS_GENERAL_FAILURE';

export const fetchShowcaseProjectsGeneralRequest = () => ({
  type: FETCH_SHOWCASE_PROJECTS_GENERAL_REQUEST,
});

export const fetchShowcaseProjectsGeneralSuccess = () => ({
  type: FETCH_SHOWCASE_PROJECTS_GENERAL_SUCCESS,
});

export const fetchShowcaseProjectsGeneralFailure = (error) => ({
  type: FETCH_SHOWCASE_PROJECTS_GENERAL_FAILURE,
  payload: error,
});

export const fetchShowcaseProjectsGeneral = () => async (dispatch) => {
  dispatch(fetchShowcaseProjectsGeneralRequest());
  try {
    const response = await privateClient.get('home/showcaseprojects');
    dispatch(fetchShowcaseProjectsGeneralSuccess(response.data.data));
    console.log(response.data.data);
  } catch (error) {
    dispatch(fetchShowcaseProjectsGeneralFailure(error.message));
  }
};
