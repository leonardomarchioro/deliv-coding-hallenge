import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../interfaces/user';
import { RootState } from '.';
import { useAppSelector } from '../hooks';

const UserSlice = createSlice({
  name: 'users',
  initialState: {} as IUser,
  reducers: {
    setUser(state, action) {
      return action.payload;
    },
  },
});

export const useUser = () => useAppSelector((state: RootState) => state.users);

export const { setUser } = UserSlice.actions;

export default UserSlice;
