import { createSlice, createSelector } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { RootState } from '.';
import { useAppSelector } from '../hooks';

const initialState = {
  token: Cookies.get('authToken') || null,
};

const AuthSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    logOut() {
      Cookies.remove('authToken');
      return { token: null };
    },
    setToken(state, action) {
      return action.payload;
    },
  },
});

const selectAuth = (state: RootState) => state.auth;
export const selectAuthToken = createSelector(selectAuth, ({ token }) => token);

export const { logOut, setToken } = AuthSlice.actions;

export const useAuth = () => useAppSelector((state: RootState) => state.auth);

export default AuthSlice;
