import {
  FETCH_SHOWCASE_PROJECTS_PENDING_REQUEST,
  FETCH_SHOWCASE_PROJECTS_PENDING_SUCCESS,
  FETCH_SHOWCASE_PROJECTS_PENDING_FAILURE,
} from '../action/showcaseProjectsAction';

const initialState = {
  loading: false,
  showcaseProjectsReducer: [],
  pending: null,
  error: null,
};

const showcaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SHOWCASE_PROJECTS_PENDING_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_SHOWCASE_PROJECTS_PENDING_SUCCESS:
      return {
        ...state,
        loading: false,
        showcaseProjectsReducer: action.payload,
        error: null,
      };

    case FETCH_SHOWCASE_PROJECTS_PENDING_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default showcaseReducer;
