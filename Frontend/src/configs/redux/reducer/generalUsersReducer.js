import {
  FETCH_SHOWCASE_PROJECTS_GENERAL_REQUEST,
  FETCH_SHOWCASE_PROJECTS_GENERAL_SUCCESS,
  FETCH_SHOWCASE_PROJECTS_GENERAL_FAILURE,
  FETCH_SHOWCASE_PROJECTS_GENERAL_BY_ID_REQUEST,
  FETCH_SHOWCASE_PROJECTS_GENERAL_BY_ID_SUCCESS,
  FETCH_SHOWCASE_PROJECTS_GENERAL_BY_ID_FAILURE,
} from '../action/generalUsersAction';

const initialState = {
  loading: false,
  error: '',
  generalShowcaseProjectsData: [],
};

const generalUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SHOWCASE_PROJECTS_GENERAL_REQUEST:
    case FETCH_SHOWCASE_PROJECTS_GENERAL_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SHOWCASE_PROJECTS_GENERAL_SUCCESS:
    case FETCH_SHOWCASE_PROJECTS_GENERAL_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        generalShowcaseProjectsData: action.payload,
        error: '',
      };
    case FETCH_SHOWCASE_PROJECTS_GENERAL_FAILURE:
    case FETCH_SHOWCASE_PROJECTS_GENERAL_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        generalShowcaseProjectsData: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default generalUsersReducer;
