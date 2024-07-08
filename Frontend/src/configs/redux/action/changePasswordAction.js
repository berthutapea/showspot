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
          changePasswordFailure('Password dan Konfirmasi Password Tidak Cocok')
        );
        return;
      }

      const payload = {
        password,
        confPassword,
      };

      console.log(
        `Sending request to: admin/password/admin-${id+1}/change with payload:`,
        payload
      );

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
      console.error(
        'Error changing password:',
        error.response?.data || error.message
      );
      dispatch(
        changePasswordFailure(error.response?.data?.msg || error.message)
      );
    }
  };
