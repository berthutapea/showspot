import {
  CREATE_MENTOR_REQUEST,
  CREATE_MENTOR_SUCCESS,
  CREATE_MENTOR_FAILURE,
  FETCH_MENTORS_REQUEST,
  FETCH_MENTORS_SUCCESS,
  FETCH_MENTORS_FAILURE,
  FETCH_MENTOR_BY_ID_REQUEST,
  FETCH_MENTOR_BY_ID_SUCCESS,
  FETCH_MENTOR_BY_ID_FAILURE,
  FETCH_MENTOR_BY_NAME_REQUEST,
  FETCH_MENTOR_BY_NAME_SUCCESS,
  FETCH_MENTOR_BY_NAME_FAILURE,
  UPDATE_MENTOR_REQUEST,
  UPDATE_MENTOR_SUCCESS,
  UPDATE_MENTOR_FAILURE,
  DELETE_MENTOR_REQUEST,
  DELETE_MENTOR_SUCCESS,
  DELETE_MENTOR_FAILURE,
  CHANGE_MENTOR_PASSWORD_REQUEST,
  CHANGE_MENTOR_PASSWORD_SUCCESS,
  CHANGE_MENTOR_PASSWORD_FAILURE,
  MENTOR_ERROR,
  MENTOR_LOADING,
} from '../action/mentorsDataAction';

const initialState = {
  mentors: [],
  mentor: null,
  loading: false,
  error: null,
};

const mentorReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_MENTOR_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_MENTOR_SUCCESS:
      return {
        ...state,
        mentors: [...state.mentors, action.payload],
        loading: false,
        error: null,
      };
    case CREATE_MENTOR_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case FETCH_MENTORS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_MENTORS_SUCCESS:
      return {
        ...state,
        mentors: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_MENTORS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case FETCH_MENTOR_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_MENTOR_BY_ID_SUCCESS:
      return {
        ...state,
        mentor: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_MENTOR_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case FETCH_MENTOR_BY_NAME_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_MENTOR_BY_NAME_SUCCESS:
      return {
        ...state,
        mentor: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_MENTOR_BY_NAME_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // Update Mentor cases
    case UPDATE_MENTOR_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UPDATE_MENTOR_SUCCESS:
      // eslint-disable-next-line no-case-declarations
      const updatedMentors = state.mentors.map((mentor) =>
        mentor.id === action.payload.id ? action.payload : mentor
      );
      return {
        ...state,
        mentors: updatedMentors,
        loading: false,
        error: null,
      };
    case UPDATE_MENTOR_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DELETE_MENTOR_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DELETE_MENTOR_SUCCESS:
      // eslint-disable-next-line no-case-declarations
      const filteredMentors = state.mentors.filter(
        (mentor) => mentor.id !== action.payload
      );
      return {
        ...state,
        mentors: filteredMentors,
        loading: false,
        error: null,
      };
    case DELETE_MENTOR_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CHANGE_MENTOR_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CHANGE_MENTOR_PASSWORD_SUCCESS:
      return {
        ...state,
        mentor: action.payload,
        loading: false,
        error: null,
      };
    case CHANGE_MENTOR_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case MENTOR_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case MENTOR_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };

    // Default case
    default:
      return state;
  }
};

export default mentorReducer;
