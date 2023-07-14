import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import { ILogin } from '../interfaces/user';
import RequestHTTP from '../services';
import Cookies from 'js-cookie';
import { RootState } from '.';
import { useAppSelector } from '../hooks';
import { listAddress } from './address.store';
import { getUser } from './user.store';

export const loginUser = createAsyncThunk<{ token: string }, ILogin>("user/login", async (data, { dispatch }) => {
    const response = await RequestHTTP.post("auth", data)
    dispatch(setToken(response))
    dispatch(checkToken());
    Cookies.set('authToken', response.token)

    return response
})

export const checkToken = createAsyncThunk<void>("check/token", async (_, { dispatch }) => {
    console.log("check")
    const { payload } = await dispatch(getUser());
    if(!payload){
        dispatch(logOut())
    };
    dispatch(listAddress());
})

const initialState = {
    token: Cookies.get('authToken') || null,
  };


const AuthSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        logOut() {
            Cookies.remove('authToken')
            return { token: null }
        },
        setToken(state, action) {
            return action.payload
        }
    }
})

const selectAuth = (state: RootState) => state.auth;
export const selectAuthToken = createSelector(selectAuth, ({ token }) => token)

export const { logOut, setToken } = AuthSlice.actions

export const useAuth = () => useAppSelector((state: RootState) => state.auth)


export default AuthSlice