import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAddress, ICreateAddress } from "../interfaces/address";
import { selectAuthToken } from "../store/auth.store";
import { RootState } from "../store";
import RequestHTTP from ".";
import { setAddresses } from "../store/address.store";

export const createAddress = createAsyncThunk<IAddress, ICreateAddress>(
    'address/create',
    async (data, { getState, dispatch }) => {
      const token = selectAuthToken(getState() as RootState);
      const response = await RequestHTTP.post('address', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      },
      "Endereço registrado"
      );
      dispatch(listAddress())
      return response;
    },
  );
  
  export const listAddress = createAsyncThunk<IAddress[]>(
    'address/list',
    async (_, { getState, dispatch }) => {
      const token = selectAuthToken(getState() as RootState);
      const response = await RequestHTTP.get('address', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(setAddresses(response));
      return response;
    },
  );
  
  export const updateAddress = createAsyncThunk<
    IAddress,
    { id: number; data: ICreateAddress }
  >('address/update', async ({ id, data }, { getState, dispatch }) => {
    const token = selectAuthToken(getState() as RootState);
    const response = await RequestHTTP.patch(`address/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    "Endereço atualizado"
    );
    dispatch(listAddress())
    return response;
  });
  
  export const deleteAddress = createAsyncThunk<IAddress, number>(
    'address/delete',
    async (id, { getState, dispatch }) => {
      const token = selectAuthToken(getState() as RootState);
      const response = await RequestHTTP.delete(`address/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      "Endereço deletado"
      );
      dispatch(listAddress())
      return response;
    },
  );