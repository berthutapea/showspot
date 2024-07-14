import {
  FETCH_SHOWCASE_PROJECTS_PENDING_ADMIN_REQUEST,
  FETCH_SHOWCASE_PROJECTS_PENDING_ADMIN_SUCCESS,
  FETCH_SHOWCASE_PROJECTS_PENDING_ADMIN_FAILURE,
  FETCH_SHOWCASE_PROJECTS_PENDING_MENTOR_REQUEST,
  FETCH_SHOWCASE_PROJECTS_PENDING_MENTOR_SUCCESS,
  FETCH_SHOWCASE_PROJECTS_PENDING_MENTOR_FAILURE,
  FETCH_SHOWCASE_PROJECTS_CONFIRMED_ADMIN_REQUEST,
  FETCH_SHOWCASE_PROJECTS_CONFIRMED_ADMIN_SUCCESS,
  FETCH_SHOWCASE_PROJECTS_CONFIRMED_ADMIN_FAILURE,
  FETCH_SHOWCASE_PROJECTS_CONFIRMED_MENTOR_REQUEST,
  FETCH_SHOWCASE_PROJECTS_CONFIRMED_MENTOR_SUCCESS,
  FETCH_SHOWCASE_PROJECTS_CONFIRMED_MENTOR_FAILURE,
  FETCH_SHOWCASE_PROJECTS_REJECTED_ADMIN_REQUEST,
  FETCH_SHOWCASE_PROJECTS_REJECTED_ADMIN_SUCCESS,
  FETCH_SHOWCASE_PROJECTS_REJECTED_ADMIN_FAILURE,
  FETCH_SHOWCASE_PROJECTS_REJECTED_MENTOR_REQUEST,
  FETCH_SHOWCASE_PROJECTS_REJECTED_MENTOR_SUCCESS,
  FETCH_SHOWCASE_PROJECTS_REJECTED_MENTOR_FAILURE,
  FETCH_SHOWCASE_PROJECTS_STUDENT_REQUEST,
  FETCH_SHOWCASE_PROJECTS_STUDENT_SUCCESS,
  FETCH_SHOWCASE_PROJECTS_STUDENT_FAILURE,
  FETCH_SHOWCASE_PROJECTS_ADMIN_BY_ID_REQUEST,
  FETCH_SHOWCASE_PROJECTS_ADMIN_BY_ID_SUCCESS,
  FETCH_SHOWCASE_PROJECTS_ADMIN_BY_ID_FAILURE,
  FETCH_SHOWCASE_PROJECTS_MENTOR_BY_ID_REQUEST,
  FETCH_SHOWCASE_PROJECTS_MENTOR_BY_ID_SUCCESS,
  FETCH_SHOWCASE_PROJECTS_MENTOR_BY_ID_FAILURE,
  EVALUATION_SHOWCASE_PROJECTS_ADMIN_REQUEST,
  EVALUATION_SHOWCASE_PROJECTS_ADMIN_SUCCESS,
  EVALUATION_SHOWCASE_PROJECTS_ADMIN_FAILURE,
  EVALUATION_SHOWCASE_PROJECTS_MENTOR_REQUEST,
  EVALUATION_SHOWCASE_PROJECTS_MENTOR_SUCCESS,
  EVALUATION_SHOWCASE_PROJECTS_MENTOR_FAILURE,
  DELETE_SHOWCASE_PROJECTS_ADMIN_SUCCESS,
  DELETE_SHOWCASE_PROJECTS_ADMIN_FAILURE,
  DELETE_SHOWCASE_PROJECTS_MENTOR_SUCCESS,
  DELETE_SHOWCASE_PROJECTS_MENTOR_FAILURE,
  UPLOAD_SHOWCASE_PROJECTS_STUDENT_REQUEST,
  UPLOAD_SHOWCASE_PROJECTS_STUDENT_SUCCESS,
  UPLOAD_SHOWCASE_PROJECTS_STUDENT_FAILURE,
} from '../action/showcaseProjectsAction';

const initialState = {
  showCaseProjectsData: [],
  showCaseProjectsDataPending: [],
  showCaseProjectsDataConfirmed: [],
  showCaseProjectsDataRejected: [],
  showCaseProjectsDataStudents: [],
  uploadShowCaseProjectsDataStudents: [],
  totalPagesPending: 0,
  totalPagesConfirmed: 0,
  totalPagesRejected: 0,
  totalPagesStudent: 0,
  pagePending: 1,
  pageConfirmed: 1,
  pageRejected: 1,
  pageStudent: 1,
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
    case FETCH_SHOWCASE_PROJECTS_PENDING_MENTOR_REQUEST:
    case FETCH_SHOWCASE_PROJECTS_CONFIRMED_MENTOR_REQUEST:
    case FETCH_SHOWCASE_PROJECTS_REJECTED_MENTOR_REQUEST:
    case FETCH_SHOWCASE_PROJECTS_STUDENT_REQUEST:
    case FETCH_SHOWCASE_PROJECTS_MENTOR_BY_ID_REQUEST:
    case EVALUATION_SHOWCASE_PROJECTS_MENTOR_REQUEST:
    case UPLOAD_SHOWCASE_PROJECTS_STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_SHOWCASE_PROJECTS_PENDING_ADMIN_SUCCESS:
    case FETCH_SHOWCASE_PROJECTS_PENDING_MENTOR_SUCCESS:
      return {
        ...state,
        loading: false,
        showCaseProjectsDataPending: action.payload.project,
        totalPagesPending: action.payload.total,
        pagePending: action.payload.page,
        error: null,
      };

    case FETCH_SHOWCASE_PROJECTS_CONFIRMED_ADMIN_SUCCESS:
    case FETCH_SHOWCASE_PROJECTS_CONFIRMED_MENTOR_SUCCESS:
      return {
        ...state,
        loading: false,
        showCaseProjectsDataConfirmed: action.payload.project,
        totalPagesStudent: action.payload.total,
        pageStudent: action.payload.page,
        error: null,
      };

    case FETCH_SHOWCASE_PROJECTS_REJECTED_ADMIN_SUCCESS:
    case FETCH_SHOWCASE_PROJECTS_REJECTED_MENTOR_SUCCESS:
      return {
        ...state,
        loading: false,
        showCaseProjectsDataRejected: action.payload.project,
        totalPagesRejected: action.payload.total,
        pageRejected: action.payload.page,
        error: null,
      };

    case FETCH_SHOWCASE_PROJECTS_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        showCaseProjectsDataStudents: action.payload.projects,
        totalPagesRejected: action.payload.total,
        pageRejected: action.payload.page,
        error: null,
      };

    case FETCH_SHOWCASE_PROJECTS_ADMIN_BY_ID_SUCCESS:
    case FETCH_SHOWCASE_PROJECTS_MENTOR_BY_ID_SUCCESS:
    case EVALUATION_SHOWCASE_PROJECTS_ADMIN_SUCCESS:
    case EVALUATION_SHOWCASE_PROJECTS_MENTOR_SUCCESS:
      return {
        ...state,
        loading: false,
        showCaseProjectsData: action.payload,
        error: null,
      };

    case DELETE_SHOWCASE_PROJECTS_ADMIN_SUCCESS:
    case DELETE_SHOWCASE_PROJECTS_MENTOR_SUCCESS:
      return {
        ...state,
        loading: false,
        showCaseProjectsData: state.showCaseProjectsData.filter(
          (project) => project.application_id !== action.payload
        ),
        error: null,
      };

    case UPLOAD_SHOWCASE_PROJECTS_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        uploadShowCaseProjectsDataStudents: [
          ...state.uploadShowCaseProjectsDataStudents,
          action.payload,
        ],
        error: null,
      };

    case FETCH_SHOWCASE_PROJECTS_PENDING_ADMIN_FAILURE:
    case FETCH_SHOWCASE_PROJECTS_CONFIRMED_ADMIN_FAILURE:
    case FETCH_SHOWCASE_PROJECTS_REJECTED_ADMIN_FAILURE:
    case FETCH_SHOWCASE_PROJECTS_ADMIN_BY_ID_FAILURE:
    case EVALUATION_SHOWCASE_PROJECTS_ADMIN_FAILURE:
    case DELETE_SHOWCASE_PROJECTS_ADMIN_FAILURE:
    case FETCH_SHOWCASE_PROJECTS_PENDING_MENTOR_FAILURE:
    case FETCH_SHOWCASE_PROJECTS_CONFIRMED_MENTOR_FAILURE:
    case FETCH_SHOWCASE_PROJECTS_REJECTED_MENTOR_FAILURE:
    case FETCH_SHOWCASE_PROJECTS_STUDENT_FAILURE:
    case FETCH_SHOWCASE_PROJECTS_MENTOR_BY_ID_FAILURE:
    case EVALUATION_SHOWCASE_PROJECTS_MENTOR_FAILURE:
    case DELETE_SHOWCASE_PROJECTS_MENTOR_FAILURE:
    case UPLOAD_SHOWCASE_PROJECTS_STUDENT_FAILURE:
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
