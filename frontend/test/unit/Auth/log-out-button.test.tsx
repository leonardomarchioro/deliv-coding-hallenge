import React from 'react';
import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderSetup } from '../../test-setup';
import { act } from 'react-dom/test-utils';

import {LogoutButton} from "../../../src/components/molecules"
import { useAppDispatch } from '../../../src/hooks';
import { logOut } from '../../../src/store/auth.store';


jest.mock('../../../src/hooks', () => ({
  useAppDispatch: jest.fn(),
}));


describe('LogoutButton', () => {
  test('renders the LogoutButton component', () => {
    renderSetup(<LogoutButton />);

    const logOutButton = screen.getByText('Sair');

    expect(logOutButton).toBeInTheDocument();
  });

  test('click the logOutButton', async () => {
    const dispatch = jest.fn();
    (useAppDispatch as jest.Mock).mockReturnValue(dispatch);

    renderSetup(<LogoutButton />);

    const logOutButton = screen.getByText('Sair');

    await act(async () => {
      userEvent.click(logOutButton);
    });

    expect(useAppDispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(logOut());
  });
});
