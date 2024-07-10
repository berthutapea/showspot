import {
  FETCH_SHOWCASE_PROJECTS_PENDING_ADMIN_REQUEST,
  FETCH_SHOWCASE_PROJECTS_PENDING_ADMIN_SUCCESS,
  FETCH_SHOWCASE_PROJECTS_PENDING_ADMIN_FAILURE,
  FETCH_SHOWCASE_PROJECTS_CONFIRMED_ADMIN_REQUEST,
  FETCH_SHOWCASE_PROJECTS_CONFIRMED_ADMIN_SUCCESS,
  FETCH_SHOWCASE_PROJECTS_CONFIRMED_ADMIN_FAILURE,
  FETCH_SHOWCASE_PROJECTS_REJECTED_ADMIN_REQUEST,
  FETCH_SHOWCASE_PROJECTS_REJECTED_ADMIN_SUCCESS,
  FETCH_SHOWCASE_PROJECTS_REJECTED_ADMIN_FAILURE,
  FETCH_SHOWCASE_PROJECTS_ADMIN_BY_ID_REQUEST,
  FETCH_SHOWCASE_PROJECTS_ADMIN_BY_ID_SUCCESS,
  FETCH_SHOWCASE_PROJECTS_ADMIN_BY_ID_FAILURE,
  EVALUATION_SHOWCASE_PROJECTS_ADMIN_REQUEST,
  EVALUATION_SHOWCASE_PROJECTS_ADMIN_SUCCESS,
  EVALUATION_SHOWCASE_PROJECTS_ADMIN_FAILURE,
  DELETE_SHOWCASE_PROJECTS_ADMIN_SUCCESS,
  DELETE_SHOWCASE_PROJECTS_ADMIN_FAILURE,
  FETCH_SHOWCASE_PROJECTS_REQUEST,
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
  showCaseProjectsData: [],
  showCaseProjectsDataPending: [],
  showCaseProjectsDataConfirmed: [],
  showCaseProjectsDataRejected: [],
  totalPagesPending: 0,
  totalPagesConfirmed: 0,
  totalPagesRejected: 0,
  pagePending: 1,
  pageConfirmed: 1,
  pageRejected: 1,
  loading: false,
  error: null,
};

const showcaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SHOWCASE_PROJECTS_PENDING_ADMIN_REQUEST:
    case FETCH_SHOWCASE_PROJECTS_CONFIRMED_ADMIN_REQUEST:
    case FETCH_SHOWCASE_PROJECTS_REJECTED_ADMIN_REQUEST:
    case FETCH_SHOWCASE_PROJECTS_ADMIN_BY_ID_REQUEST:
    case EVALUATION_SHOWCASE_PROJECTS_ADMIN_REQUEST:
    case FETCH_SHOWCASE_PROJECTS_REQUEST:
    case ADD_PROJECT_REQUEST:
    case UPDATE_PROJECT_REQUEST:
    case DELETE_PROJECT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_SHOWCASE_PROJECTS_PENDING_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
        showCaseProjectsDataPending: action.payload.project,
        totalPagesPending: action.payload.total,
        pagePending: action.payload.page,
        error: null,
      };

    case FETCH_SHOWCASE_PROJECTS_CONFIRMED_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
        showCaseProjectsDataConfirmed: action.payload.project,
        totalPagesConfirmed: action.payload.total,
        pageConfirmed: action.payload.page,
        error: null,
      };

    case FETCH_SHOWCASE_PROJECTS_REJECTED_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
        showCaseProjectsDataRejected: action.payload.project,
        totalPagesRejected: action.payload.total,
        pageRejected: action.payload.page,
        error: null,
      };

    case FETCH_SHOWCASE_PROJECTS_ADMIN_BY_ID_SUCCESS:
    case EVALUATION_SHOWCASE_PROJECTS_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
        showCaseProjectsData: action.payload,
        error: null,
      };

    case DELETE_SHOWCASE_PROJECTS_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
        showCaseProjectsData: state.showCaseProjectsData.filter(
          (project) => project.application_id !== action.payload
        ),
        error: null,
      };

    case FETCH_SHOWCASE_PROJECTS_PENDING_ADMIN_FAILURE:
    case FETCH_SHOWCASE_PROJECTS_CONFIRMED_ADMIN_FAILURE:
    case FETCH_SHOWCASE_PROJECTS_REJECTED_ADMIN_FAILURE:
    case FETCH_SHOWCASE_PROJECTS_ADMIN_BY_ID_FAILURE:
    case EVALUATION_SHOWCASE_PROJECTS_ADMIN_FAILURE:
    case DELETE_SHOWCASE_PROJECTS_ADMIN_FAILURE:
    case FETCH_SHOWCASE_PROJECTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ADD_PROJECT_SUCCESS:
      return {
        ...state,
        showCaseProjectsDataPending: [
          ...state.showCaseProjectsDataPending,
          action.payload,
        ],
        loading: false,
      };

    case UPDATE_PROJECT_SUCCESS:
      return {
        ...state,
        showCaseProjectsDataPending: state.showCaseProjectsDataPending.map(
          (project) =>
            project.id === action.payload.id ? action.payload : project
        ),
        showCaseProjectsDataConfirmed: state.showCaseProjectsDataConfirmed.map(
          (project) =>
            project.id === action.payload.id ? action.payload : project
        ),
        showCaseProjectsDataRejected: state.showCaseProjectsDataConfirmed.map(
          (project) =>
            project.id === action.payload.id ? action.payload : project
        ),
        loading: false,
      };

    case DELETE_PROJECT_SUCCESS:
      return {
        ...state,
        showCaseProjectsDataPending: state.showCaseProjectsDataPending.filter(
          (project) => project.id !== action.payload.sopProjectId
        ),
        showCaseProjectsDataConfirmed:
          state.showCaseProjectsDataConfirmed.filter(
            (project) => project.id !== action.payload.sopProjectId
          ),
        showCaseProjectsDataRejected:
          state.showCaseProjectsDataConfirmed.filter(
            (project) => project.id !== action.payload.sopProjectId
          ),
        loading: false,
      };

    case ADD_PROJECT_FAILURE:
    case UPDATE_PROJECT_FAILURE:
    case DELETE_PROJECT_FAILURE:
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
