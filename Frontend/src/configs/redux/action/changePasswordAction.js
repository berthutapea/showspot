import privateClient from '../../../utils/privateClient';

export const changePasswordRequest = () => ({
  type: 'CHANGE_PASSWORD_REQUEST',
});

export const changePasswordSuccess = (data) => ({
  type: 'CHANGE_PASSWORD_SUCCESS',
  payload: data,
});

export const changePasswordFailure = (error) => ({
  type: 'CHANGE_PASSWORD_FAILURE',
  payload: error,
});

export const changePasswordAdmin =
  (id = 0, password, confPassword) =>
  async (dispatch) => {
    try {
      dispatch(changePasswordRequest());

      if (password !== confPassword) {
        dispatch(
          changePasswordFailure('Password and Confirm Password Do not Match')
        );
        return;
      }
      const payload = {
        password,
        confPassword,
      };
      const response = await privateClient.patch(
        `admin/password/admin-${id + 1}/change`,
        payload,
        {
          headers: {
            'api-key': '$11%%22**33++aAbBcCdDeEfFgG33@@??44',
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      dispatch(changePasswordSuccess(response.data));
    } catch (error) {
      dispatch(
        changePasswordFailure(error.response?.data?.msg || error.message)
      );
    }
  };
