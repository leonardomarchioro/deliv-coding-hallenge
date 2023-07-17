import React from 'react';
import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderSetup } from '../../test-setup';
import { act } from 'react-dom/test-utils';

import Forms from '../../../src/components/organisms/Forms';

import { useAppDispatch } from '../../../src/hooks';
import { loginUser } from '../../../src/services/auth.service';

jest.mock('../../../src/hooks', () => ({
  useAppDispatch: jest.fn(),
}));

jest.mock('../../../src/services/auth.service', () => ({
  loginUser: jest.fn(),
}));

describe('SignInForm', () => {
  test('renders the SignInForm component', () => {
    renderSetup(<Forms.SignInForm />);

    const emailInput = screen.getByPlaceholderText('Digite seu email');
    const passwordInput = screen.getByPlaceholderText('Digite uma senha');
    const submitButton = screen.getByText('Entrar');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('submits the form with valid data', async () => {
    const dispatch = jest.fn();
    (useAppDispatch as jest.Mock).mockReturnValue(dispatch);

    renderSetup(<Forms.SignInForm />);

    const emailInput = screen.getByPlaceholderText('Digite seu email');
    const passwordInput = screen.getByPlaceholderText('Digite uma senha');
    const submitButton = screen.getByText('Entrar');

    await act(async () => {
      userEvent.type(emailInput, 'example@example.com');
      userEvent.type(passwordInput, 'password123');
    });

    await act(async () => {
      userEvent.click(submitButton);
    });

    expect(useAppDispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(
      loginUser({
        email: 'example@example.com',
        password: 'password123',
      }),
    );
  });
});
