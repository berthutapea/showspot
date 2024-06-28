import { createAsyncThunk } from '@reduxjs/toolkit';
import privateClient from '../../../api/privateClient';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await privateClient.post('/login', {
        username,
        password,
      });

      if (response.data.code === 200 && response.data.status === 'success') {
        const { token, user_id } = response.data.data;
        const role = getRoleFromUserId(user_id);

        localStorage.setItem('sessionToken', token);
        return { user: { role }, message: response.data.message };
      } else {
        return thunkAPI.rejectWithValue(response.data.message);
      }
    } catch (error) {
      const message = error.response
        ? error.response.data.msg
        : 'Network error';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

function getRoleFromUserId(user_id) {
  switch (user_id) {
    case 1:
      return 'admin';
    case 2:
      return 'mentor';
    case 3:
      return 'student';
    default:
      return '';
  }
}

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem('sessionToken');
      const response = await privateClient.delete('/logout', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem('sessionToken');
      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
      }
      return thunkAPI.rejectWithValue('Network error');
    }
  }
);
