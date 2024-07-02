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
} from '../action/mentorsDataAction';

const initialState = {
  loading: false,
  mentorsDataMaster: [],
  mentor: null,
  error: null,
};

const mentorReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_MENTOR_REQUEST:
    case FETCH_MENTORS_REQUEST:
    case FETCH_MENTOR_BY_ID_REQUEST:
    case FETCH_MENTOR_BY_NAME_REQUEST:
    case UPDATE_MENTOR_REQUEST:
    case DELETE_MENTOR_REQUEST:
    case CHANGE_MENTOR_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case CREATE_MENTOR_SUCCESS:
      return {
        ...state,
        loading: false,
        mentorsDataMaster: [...state.mentorsDataMaster, action.payload],
        error: null,
      };

    case FETCH_MENTORS_SUCCESS:
      return {
        ...state,
        loading: false,
        mentorsDataMaster: action.payload,
        error: null,
      };

    case FETCH_MENTOR_BY_ID_SUCCESS:
    case FETCH_MENTOR_BY_NAME_SUCCESS:
    case UPDATE_MENTOR_SUCCESS:
    case CHANGE_MENTOR_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        mentor: action.payload,
        error: null,
      };

    case DELETE_MENTOR_SUCCESS:
      return {
        ...state,
        loading: false,
        mentorsDataMaster: state.mentorsDataMaster.filter(
          (mentor) => mentor.mentor_id !== action.payload
        ),
        error: null,
      };

    case CREATE_MENTOR_FAILURE:
    case FETCH_MENTORS_FAILURE:
    case FETCH_MENTOR_BY_ID_FAILURE:
    case FETCH_MENTOR_BY_NAME_FAILURE:
    case UPDATE_MENTOR_FAILURE:
    case DELETE_MENTOR_FAILURE:
    case CHANGE_MENTOR_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default mentorReducer;
