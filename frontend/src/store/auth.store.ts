import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import { ILogin } from '../interfaces/user';
import RequestHTTP from '../services';
import Cookies from 'js-cookie';
import { RootState } from '.';

export const loginUser = createAsyncThunk<{ token: string }, ILogin>("user/login", async (data) => {
    const response = await RequestHTTP.post("auth", data)
    return response
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
        }
    },
    extraReducers(builder) {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            const { token } = action.payload
            Cookies.set('authToken', token)
            return action.payload
        })
    },
})

const selectAuth = (state: RootState) => state.auth;
export const selectAuthToken = createSelector(selectAuth, ({ token }) => token)

export const { logOut } = AuthSlice.actions

export default AuthSlice