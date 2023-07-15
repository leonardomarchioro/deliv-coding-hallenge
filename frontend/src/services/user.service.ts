import RequestHTTP from ".";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICreateUser, IUser } from "../interfaces/user";
import { RootState } from "../store";
import { selectAuthToken } from "../store/auth.store";
import { setUser } from "../store/user.store";

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