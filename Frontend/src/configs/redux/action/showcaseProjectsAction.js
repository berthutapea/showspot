import privateClient from '../../../utils/privateClient';

export const FETCH_SHOWCASE_PROJECTS_PENDING_REQUEST =
  'FETCH_SHOWCASE_PROJECTS_PENDING_REQUEST';
export const FETCH_SHOWCASE_PROJECTS_PENDING_SUCCESS =
  'FETCH_SHOWCASE_PROJECTS_PENDING_SUCCESS';
export const FETCH_SHOWCASE_PROJECTS_PENDING_FAILURE =
  'FETCH_SHOWCASE_PROJECTS_PENDING_FAILURE';

export const showcaseProjectsPendingRequest = (actionType) => ({
  type: actionType,
});

export const showcaseProjectsPendingSuccess = (actionType, data) => ({
  type: actionType,
  payload: data,
});

export const showcaseProjectsPendingFailure = (actionType, error) => ({
  type: actionType,
  payload: error,
});

export const fetchShowcaseProjectsPending = () => async (dispatch) => {
  dispatch(
    showcaseProjectsPendingRequest(FETCH_SHOWCASE_PROJECTS_PENDING_REQUEST)
  );
  try {
    const response = await privateClient.get(
      'admin/projects/showcase-projects/pending/1'
    );
    dispatch(
      showcaseProjectsPendingSuccess(
        FETCH_SHOWCASE_PROJECTS_PENDING_SUCCESS,
        response.data
      )
    );
    console.log(response.data);
  } catch (error) {
    dispatch(
      showcaseProjectsPendingFailure(
        FETCH_SHOWCASE_PROJECTS_PENDING_FAILURE,
        error.message
      )
    );
  }
};
