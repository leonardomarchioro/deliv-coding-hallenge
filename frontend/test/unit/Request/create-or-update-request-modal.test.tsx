import React from 'react';
import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderSetup } from '../../test-setup';
import { act } from 'react-dom/test-utils';

import { useAppDispatch } from '../../../src/hooks';
import { useAddress } from '../../../src/store/address.store';

import Modals from '../../../src/components/organisms/Modals';
import { IRequest } from '../../../src/interfaces/request';

jest.mock('../../../src/hooks', () => ({
  useAppDispatch: jest.fn(),
}));

jest.mock('../../../src/store/address.store', () => ({
  useAddress: jest.fn(),
}));


describe('CreateOrUpdateRequest', () => {
  test('renders the CreateOrUpdateRequest component', () => {
    renderSetup(<Modals.CreateOrUpdateRequest />);

    const modalTitle = screen.getByText('Novo pedido');

    expect(modalTitle).toBeInTheDocument();
  });

  test('submit create new request', async () => {
    const dispatch = jest.fn().mockReturnValue({ payload: { id: 1 }});
    (useAppDispatch as jest.Mock).mockReturnValue(dispatch);

    const address = [
      { id: 1, street: 'street', district: 'district', number: 1 },
    ];
    (useAddress as jest.Mock).mockReturnValue(address);

    renderSetup(<Modals.CreateOrUpdateRequest />);

    const clientInput = screen.getByPlaceholderText('Digite o nome do cliente');
    const submitButton = screen.getByText('Enviar');

    await act(async () => {
      userEvent.type(clientInput, 'example');
    });

    await act(async () => {
      userEvent.click(submitButton);
    });

    expect(useAppDispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(2);
  });

  test('submit update request', async () => {
    const dispatch = jest.fn().mockReturnValue({ payload: { id: 1 }});
    (useAppDispatch as jest.Mock).mockReturnValue(dispatch);

    const address = [
      { id: 1, street: 'street', district: 'district', number: 1, userId: 1 },
    ];
    (useAddress as jest.Mock).mockReturnValue(address);

    const request: IRequest = {
        clientName: 'example',
        deliveryAddress: address[0],
        id: 1,
        status: 'awaiting',
        userId: 1
    }

    renderSetup(<Modals.CreateOrUpdateRequest isEdit request={request}/>);

    const titleComponent = screen.getByText("Editar pedido");
    const submitButton = screen.getByText('Enviar');

    await act(async () => {
      userEvent.click(submitButton);
    });

    expect(titleComponent).toBeDefined();
    expect(useAppDispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(2);
  })
});
