import { createSlice } from '@reduxjs/toolkit';
import { IRequest } from '../interfaces/request';
import { RootState } from '.';
import { useAppSelector } from '../hooks';

const RequestsSlice = createSlice({
  name: 'request',
  initialState: [] as IRequest[],
  reducers: {
    setRequests: (state, action) => {
      return action.payload;
    },
  },
});

export const { setRequests } = RequestsSlice.actions;

export const useRequest = () =>
  useAppSelector((state: RootState) => state.request);

export default RequestsSlice;
