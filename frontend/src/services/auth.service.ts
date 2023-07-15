import { createAsyncThunk } from "@reduxjs/toolkit";
import { ILogin } from "../interfaces/user";
import RequestHTTP from ".";
import { logOut, setToken } from "../store/auth.store";
import Cookies from "js-cookie";
import { getUser } from "./user.service";
import { listAddress } from "./address.service";
import { listRequests } from "./request.service";

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
    dispatch(listRequests());
})