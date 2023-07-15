import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICreateRequest, IRequest, IUpdateRequest } from "../interfaces/request";
import { selectAuthToken } from "../store/auth.store";
import { RootState } from "../store";
import RequestHTTP from ".";
import { setRequests } from "../store/request.store";

export const createRequest = createAsyncThunk<IRequest, ICreateRequest>(
    'request/create',
    async (data, { getState, dispatch }) => {
      const token = selectAuthToken(getState() as RootState);
      const response = await RequestHTTP.post('request', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      "Novo pedido registrado"
      );
      dispatch(listRequests())
      return response;
    },
  );
  
  export const listRequests = createAsyncThunk<IRequest[]>(
    'request/list',
    async (_, { getState, dispatch }) => {
      const token = selectAuthToken(getState() as RootState);
      const response = await RequestHTTP.get('request', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(setRequests(response));
      return response;
    },
  );

  export const getRequest = createAsyncThunk<IRequest, number>(
    'request/get',
    async (id, { getState }) => {
      const token = selectAuthToken(getState() as RootState);
      const response = await RequestHTTP.get(`request/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    },
  );
  
  export const updateRequest = createAsyncThunk<
    IRequest,
    { id: number; data: IUpdateRequest }
  >('request/update', async ({ id, data }, { getState, dispatch }) => {
    const token = selectAuthToken(getState() as RootState);
    const response = await RequestHTTP.patch(`request/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    "Pedido atualizado"
    );
    dispatch(listRequests())
    return response;
  });
