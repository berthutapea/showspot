import {
  FETCH_SOP_PROJECTS_ADMIN_REQUEST,
  FETCH_SOP_PROJECTS_MENTOR_REQUEST,
  UPDATE_SOP_PROJECT_REQUEST,
  DELETE_SOP_PROJECT_REQUEST,
  ADD_SOP_PROJECTS_REQUEST,
  FETCH_SOP_PROJECTS_ADMIN_SUCCESS,
  FETCH_SOP_PROJECTS_MENTOR_SUCCESS,
  UPDATE_SOP_PROJECT_SUCCESS,
  DELETE_SOP_PROJECT_SUCCESS,
  ADD_SOP_PROJECTS_SUCCESS,
  FETCH_SOP_PROJECTS_ADMIN_FAILURE,
  FETCH_SOP_PROJECTS_MENTOR_FAILURE,
  UPDATE_SOP_PROJECT_FAILURE,
  DELETE_SOP_PROJECT_FAILURE,
  ADD_SOP_PROJECTS_FAILURE,
} from '../action/sopProjectsAction';

const initialState = {
  sopProjectsData: [],
  sopProjectsDataMentor: [],
  loading: false,
  error: null,
};

const sopProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SOP_PROJECTS_ADMIN_REQUEST:
    case FETCH_SOP_PROJECTS_MENTOR_REQUEST:
    case UPDATE_SOP_PROJECT_REQUEST:
    case DELETE_SOP_PROJECT_REQUEST:
    case ADD_SOP_PROJECTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_SOP_PROJECTS_ADMIN_SUCCESS:
      return {
        ...state,
        sopProjectsData: action.payload,
        loading: false,
      };

    case FETCH_SOP_PROJECTS_MENTOR_SUCCESS:
      return {
        ...state,
        sopProjectsDataMentor: action.payload,
        loading: false,
      };

    case UPDATE_SOP_PROJECT_SUCCESS:
      return {
        ...state,
        sopProjectsData: state.sopProjectsData.map((project) =>
          project.id === action.payload.id ? action.payload : project
        ),
        loading: false,
      };
    case DELETE_SOP_PROJECT_SUCCESS:
      return {
        ...state,
        sopProjectsData: state.sopProjectsData.filter(
          (project) => project.id !== action.payload.sopProjectId
        ),
        loading: false,
      };
    case ADD_SOP_PROJECTS_SUCCESS:
      return {
        ...state,
        sopProjects: [...state.sopProjectsData, action.payload],
        loading: false,
      };
    case FETCH_SOP_PROJECTS_ADMIN_FAILURE:
    case FETCH_SOP_PROJECTS_MENTOR_FAILURE:
    case UPDATE_SOP_PROJECT_FAILURE:
    case DELETE_SOP_PROJECT_FAILURE:
    case ADD_SOP_PROJECTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default sopProjectReducer;
