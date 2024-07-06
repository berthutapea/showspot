import {
  FETCH_SHOWCASE_PROJECTS_PENDING_REQUEST,
  FETCH_SHOWCASE_PROJECTS_PENDING_SUCCESS,
  FETCH_SHOWCASE_PROJECTS_PENDING_FAILURE,
  FETCH_SHOWCASE_PROJECTS_REQUEST,
  FETCH_SHOWCASE_PROJECTS_SUCCESS,
  FETCH_SHOWCASE_PROJECTS_FAILURE,
  ADD_PROJECT_REQUEST,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAILURE,
  UPDATE_PROJECT_REQUEST,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_FAILURE,
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAILURE,
} from '../action/showcaseProjectsAction';

const initialState = {
  showCaseProjectData: [],
  loading: false,
  error: null,
};

const showcaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SHOWCASE_PROJECTS_PENDING_REQUEST:
    case FETCH_SHOWCASE_PROJECTS_REQUEST:
    case ADD_PROJECT_REQUEST:
    case UPDATE_PROJECT_REQUEST:
    case DELETE_PROJECT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_SHOWCASE_PROJECTS_PENDING_SUCCESS:
      return {
        ...state,
        loading: false,
        showCaseProjectData: action.payload,
        error: null,
      };

    case FETCH_SHOWCASE_PROJECTS_PENDING_FAILURE:
    case FETCH_SHOWCASE_PROJECTS_SUCCESS:
      return {
        ...state,
        showCaseProjectData: action.payload,
        loading: false,
      };
    case UPDATE_PROJECT_SUCCESS:
      return {
        ...state,
        showCaseProjectData: state.showCaseProjectData.map((project) =>
          project.id === action.payload.id ? action.payload : project
        ),
        loading: false,
      };
    case DELETE_PROJECT_SUCCESS:
      return {
        ...state,
        showCaseProjectData: state.showCaseProjectData.filter(
          (project) => project.id !== action.payload.sopProjectId
        ),
        loading: false,
      };
    case ADD_PROJECT_SUCCESS:
      return {
        ...state,
        showCaseProjectData: [...state.showCaseProjectData, action.payload],
        loading: false,
      };
    case FETCH_SHOWCASE_PROJECTS_FAILURE:
    case UPDATE_PROJECT_FAILURE:
    case DELETE_PROJECT_FAILURE:
    case ADD_PROJECT_FAILURE:
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
