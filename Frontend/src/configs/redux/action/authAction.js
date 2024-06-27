import { createAsyncThunk } from '@reduxjs/toolkit';
import privateClient from '../../../api/privateClient';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (user, thunkAPI) => {
    try {
      const response = await privateClient.post('/login', {
        username: user.username,
        password: user.password,
      });

      if (response.data.code === 200 && response.data.status === 'success') {
        localStorage.setItem('sessionToken', response.data.data.token);
        return response.data.data; 
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

export const logoutUser = createAsyncThunk(
  'user/logoutUser',
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
