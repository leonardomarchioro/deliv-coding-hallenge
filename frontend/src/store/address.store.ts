import { createSlice } from '@reduxjs/toolkit';
import { IAddress } from '../interfaces/address';
import { RootState } from '.';
import { useAppSelector } from '../hooks';

const AddressSlice = createSlice({
  name: 'address',
  initialState: [] as IAddress[],
  reducers: {
    setAddresses: (state, action) => {
        return action.payload
    }
  },
});

export const { setAddresses } = AddressSlice.actions;

export const useAddress = () => useAppSelector((state: RootState) => state.address)


export default AddressSlice;
