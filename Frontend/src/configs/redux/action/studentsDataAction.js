import privateClient from '../../../utils/privateClient';

export const CREATE_STUDENT_REQUEST = 'CREATE_STUDENT_REQUEST';
export const CREATE_STUDENT_SUCCESS = 'CREATE_STUDENT_SUCCESS';
export const CREATE_STUDENT_FAILURE = 'CREATE_STUDENT_FAILURE';

export const FETCH_STUDENTS_REQUEST = 'FETCH_STUDENTS_REQUEST';
export const FETCH_STUDENTS_SUCCESS = 'FETCH_STUDENTS_SUCCESS';
export const FETCH_STUDENTS_FAILURE = 'FETCH_STUDENTS_FAILURE';

export const FETCH_STUDENT_BY_ID_REQUEST = 'FETCH_STUDENT_BY_ID_REQUEST';
export const FETCH_STUDENT_BY_ID_SUCCESS = 'FETCH_STUDENT_BY_ID_SUCCESS';
export const FETCH_STUDENT_BY_ID_FAILURE = 'FETCH_STUDENT_BY_ID_FAILURE';

export const FETCH_STUDENT_BY_NAME_REQUEST = 'FETCH_STUDENT_BY_NAME_REQUEST';
export const FETCH_STUDENT_BY_NAME_SUCCESS = 'FETCH_STUDENT_BY_NAME_SUCCESS';
export const FETCH_STUDENT_BY_NAME_FAILURE = 'FETCH_STUDENT_BY_NAME_FAILURE';

export const UPDATE_STUDENT_REQUEST = 'UPDATE_STUDENT_REQUEST';
export const UPDATE_STUDENT_SUCCESS = 'UPDATE_STUDENT_SUCCESS';
export const UPDATE_STUDENT_FAILURE = 'UPDATE_STUDENT_FAILURE';

export const DELETE_STUDENT_REQUEST = 'DELETE_STUDENT_REQUEST';
export const DELETE_STUDENT_SUCCESS = 'DELETE_STUDENT_SUCCESS';
export const DELETE_STUDENT_FAILURE = 'DELETE_STUDENT_FAILURE';

export const STUDENT_REQUEST = 'STUDENT_REQUEST';
export const STUDENT_SUCCESS = 'STUDENT_SUCCESS';
export const STUDENT_FAILURE = 'STUDENT_FAILURE';

export const studentRequest = (actionType) => ({
  type: actionType,
});

export const studentSuccess = (actionType, data) => ({
  type: actionType,
  payload: data.data,
});

export const studentFailure = (actionType, error) => ({
  type: actionType,
  payload: error,
});

export const fetchStudents = () => async (dispatch) => {
  dispatch(studentRequest(FETCH_STUDENTS_REQUEST));
  try {
    const response = await privateClient.get('admin/students');
    dispatch(studentSuccess(FETCH_STUDENTS_SUCCESS, response.data));
  } catch (error) {
    dispatch(studentFailure(FETCH_STUDENTS_FAILURE, error.message));
  }
};

export const createStudent = (formData, navigate) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_STUDENT_REQUEST });

    try {
      const response = await privateClient.post(
        'admin/students/create',
        formData,
        {
          headers: {
            'Content-type': 'multipart/form-data',
          },
        }
      );
      dispatch({
        type: CREATE_STUDENT_SUCCESS,
        payload: response.data,
      });
      navigate('/admin/students-data');
      return response.data;
    } catch (error) {
      dispatch({
        type: CREATE_STUDENT_FAILURE,
        payload: error.message,
      });
      throw error;
    }
  };
};

export const updateStudent = (id, formData, navigate) => async (dispatch) => {
  dispatch({ type: UPDATE_STUDENT_REQUEST });
  try {
    const response = await privateClient.put(
      `admin/students/${id}/update/`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    dispatch({
      type: UPDATE_STUDENT_SUCCESS,
      payload: response.data.msg,
    });

    navigate('/admin/students-data');
  } catch (error) {
    dispatch({
      type: UPDATE_STUDENT_FAILURE,
      payload: error.response.data.msg,
    });
  }
};

export const deleteStudent = (id) => {
  return async (dispatch) => {
    try {
      const response = await privateClient.delete(
        `admin/students/${id}/delete`
      );
      dispatch({
        type: DELETE_STUDENT_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_STUDENT_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const fetchStudentById = (id) => async (dispatch) => {
  dispatch({ type: FETCH_STUDENT_BY_ID_REQUEST });
  try {
    const response = await privateClient.get(`admin/students/id/${id}`);
    dispatch({
      type: FETCH_STUDENT_BY_ID_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_STUDENT_BY_ID_FAILURE,
      payload: error.response.data.msg,
    });
  }
};
