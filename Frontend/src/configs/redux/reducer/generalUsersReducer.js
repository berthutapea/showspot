import {
  FETCH_SHOWCASE_PROJECTS_GENERAL_REQUEST,
  FETCH_SHOWCASE_PROJECTS_GENERAL_SUCCESS,
  FETCH_SHOWCASE_PROJECTS_GENERAL_FAILURE,
} from '../action/generalUsersAction';

const initialState = {
  loading: false,
  error: '',
  generalShowcaseProjectsData: [],
};

const generalUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SHOWCASE_PROJECTS_GENERAL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SHOWCASE_PROJECTS_GENERAL_SUCCESS:
      return {
        ...state,
        loading: false,
        generalShowcaseProjectsData: action.payload,
        error: '',
      };
    case FETCH_SHOWCASE_PROJECTS_GENERAL_FAILURE:
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
