import {
  CREATE_STUDENT_REQUEST,
  CREATE_STUDENT_SUCCESS,
  CREATE_STUDENT_FAILURE,
  FETCH_STUDENTS_REQUEST,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_FAILURE,
  FETCH_STUDENT_BY_ID_REQUEST,
  FETCH_STUDENT_BY_ID_SUCCESS,
  FETCH_STUDENT_BY_ID_FAILURE,
  FETCH_STUDENT_BY_NAME_REQUEST,
  FETCH_STUDENT_BY_NAME_SUCCESS,
  FETCH_STUDENT_BY_NAME_FAILURE,
  UPDATE_STUDENT_REQUEST,
  UPDATE_STUDENT_SUCCESS,
  UPDATE_STUDENT_FAILURE,
  DELETE_STUDENT_REQUEST,
  DELETE_STUDENT_SUCCESS,
  DELETE_STUDENT_FAILURE,
  CHANGE_STUDENT_PASSWORD_REQUEST,
  CHANGE_STUDENT_PASSWORD_SUCCESS,
  CHANGE_STUDENT_PASSWORD_FAILURE,
} from '../action/studentsDataAction';

const initialState = {
  loading: false,
  studentsDataMaster: [],
  student: null,
  error: null,
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_STUDENT_REQUEST:
    case FETCH_STUDENTS_REQUEST:
    case FETCH_STUDENT_BY_ID_REQUEST:
    case FETCH_STUDENT_BY_NAME_REQUEST:
    case UPDATE_STUDENT_REQUEST:
    case DELETE_STUDENT_REQUEST:
    case CHANGE_STUDENT_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case CREATE_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        studentsDataMaster: [...state.studentsDataMaster, action.payload],
        error: null,
      };

    case FETCH_STUDENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        studentsDataMaster: action.payload,
        error: null,
      };

    case FETCH_STUDENT_BY_ID_SUCCESS:
    case FETCH_STUDENT_BY_NAME_SUCCESS:
    case UPDATE_STUDENT_SUCCESS:
    case CHANGE_STUDENT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        studentsDataMaster: action.payload,
        error: null,
      };

    case DELETE_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        studentsDataMaster: state.studentsDataMaster.filter(
          (student) => student.student_id !== action.payload
        ),
        error: null,
      };

    case CREATE_STUDENT_FAILURE:
    case FETCH_STUDENTS_FAILURE:
    case FETCH_STUDENT_BY_ID_FAILURE:
    case FETCH_STUDENT_BY_NAME_FAILURE:
    case UPDATE_STUDENT_FAILURE:
    case DELETE_STUDENT_FAILURE:
    case CHANGE_STUDENT_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default studentReducer;
