import {
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { ICreateUser, IUser } from '../interfaces/user';
import RequestHTTP from '../services';
import { RootState } from '.';
import { selectAuthToken } from './auth.store';
import { useAppSelector } from '../hooks';

export const createUser = createAsyncThunk<IUser, ICreateUser>(
  'user/create',
  async (data) => {
    return RequestHTTP.post('users', data);
  },
);

export const getUser = createAsyncThunk<IUser>(
  'user/get',
  async (_, { getState, dispatch }) => {
    const token = selectAuthToken(getState() as RootState);

    const user = await RequestHTTP.get('users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(setUser(user))
    return user
  },
);

const UserSlice = createSlice({
  name: 'users',
  initialState: {} as IUser,
  reducers: {
    setUser(state, action) {
      return action.payload
    }
  }
});

export const useUser = () => useAppSelector((state: RootState) => state.users)

export const { setUser } = UserSlice.actions;


export default UserSlice;
