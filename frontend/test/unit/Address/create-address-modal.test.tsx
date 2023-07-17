import React from 'react';
import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderSetup } from '../../test-setup';
import { act } from 'react-dom/test-utils';

import { useAppDispatch } from '../../../src/hooks';

import Modals from '../../../src/components/organisms/Modals';

jest.mock('../../../src/hooks', () => ({
  useAppDispatch: jest.fn(),
}));

jest.mock('.../../../src/store/modals.store', () => ({
  useModal: jest.fn().mockReturnValue({ data: {} }),
}));


describe('CreateAddress', () => {
  test('renders the CreateAddress component', () => {
    renderSetup(<Modals.CreateAddress />);

    const modalTitle = screen.getByText('Novo Endereço');

    expect(modalTitle).toBeInTheDocument();
  });

  test('submit new address', async () => {
    const dispatch = jest.fn().mockReturnValue({ payload: undefined });
    (useAppDispatch as jest.Mock).mockReturnValue(dispatch);

    renderSetup(<Modals.CreateAddress />);

    const districtInput = screen.getByPlaceholderText('Digite o nome do bairro');
    const streetInput = screen.getByPlaceholderText('Digite o nome da rua');
    const numberInput = screen.getByPlaceholderText('Digite o número da casa');
    const submitButton = screen.getByText('Enviar');

    await act(async () => {
      userEvent.type(districtInput, 'district');
      userEvent.type(streetInput, 'street');
      userEvent.type(numberInput, '12');
    });

    await act(async () => {
      userEvent.click(submitButton);
    });

    expect(useAppDispatch).toHaveBeenCalled()
    expect(dispatch).toHaveBeenCalled()
  })
});
