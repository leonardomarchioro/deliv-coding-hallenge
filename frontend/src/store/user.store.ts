import {
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { ICreateUser, IUser } from '../interfaces/user';
import RequestHTTP from '../services';
import { RootState } from '.';
import { selectAuthToken } from './auth.store';

export const createUser = createAsyncThunk<IUser, ICreateUser>(
  'user/create',
  async (data) => {
    return RequestHTTP.post('users', data);
  },
);

export const getUser = createAsyncThunk<IUser>(
  'user/get',
  async (_, { getState }) => {
    const token = selectAuthToken(getState() as RootState);

    return RequestHTTP.get('users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
);

const UserSlice = createSlice({
  name: 'users',
  initialState: {} as IUser,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createUser.fulfilled, (state, action) => {
        console.log({ action });
        return action.payload;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export default UserSlice;
