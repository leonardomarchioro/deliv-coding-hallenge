import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import RequestHTTP from '../services';
import { IAddress, ICreateAddress } from '../interfaces/address';
import { selectAuthToken } from './auth.store';
import { RootState } from '.';
import { useAppSelector } from '../hooks';



export const createAddress = createAsyncThunk<IAddress, ICreateAddress>(
  'address/create',
  async (data, { getState, dispatch }) => {
    const token = selectAuthToken(getState() as RootState);
    const response = await RequestHTTP.post('address', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(listAddress())
    return response;
  },
);

export const listAddress = createAsyncThunk<IAddress>(
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
  });
  dispatch(listAddress())
  return response;
});

export const deleteAddress = createAsyncThunk<IAddress, number>(
  'address/create',
  async (id, { getState, dispatch }) => {
    const token = selectAuthToken(getState() as RootState);
    const response = await RequestHTTP.delete(`address/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(listAddress())
    return response;
  },
);


const AddressSlice = createSlice({
  name: 'address',
  initialState: [],
  reducers: {
    setAddresses: (state, action) => {
        return action.payload
    }
  },
});

export const { setAddresses } = AddressSlice.actions;

export const useAddress = () => useAppSelector((state: RootState) => state.address)


export default AddressSlice;
