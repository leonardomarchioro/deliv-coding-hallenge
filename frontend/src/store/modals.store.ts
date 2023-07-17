import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';
import { useAppSelector } from '../hooks';

const ModalsSlice = createSlice({
  name: 'users',
  initialState: {
    show: false,
    type: '',
    data: {}
  },
  reducers: {
    setModal(state, action) {
      return action.payload;
    },
    closeModal() {
      return {
        show: false,
        type: '',
        data: {}
      };
    },
  },
});

export const { closeModal, setModal } = ModalsSlice.actions;

export const useModal = () => useAppSelector((state: RootState) => state.modal);

export default ModalsSlice;
