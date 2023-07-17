import React from 'react';
import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderSetup } from '../../test-setup';
import { act } from 'react-dom/test-utils';

import Forms from '../../../src/components/organisms/Forms';

import { useAppDispatch } from '../../../src/hooks';
import { createUser } from '../../../src/services/user.service';

jest.mock('../../../src/hooks', () => ({
  useAppDispatch: jest.fn(),
}));

jest.mock('../../../src/services/user.service', () => ({
  createUser: jest.fn(),
}));

describe('SignUpForm', () => {
  test('renders the SignUpForm component', () => {
    renderSetup(<Forms.SignUpForm />);

    const nameInput = screen.getByPlaceholderText('Digite seu nome');
    const emailInput = screen.getByPlaceholderText('Digite seu email');
    const passwordInput = screen.getByPlaceholderText('Digite uma senha');
    const submitButton = screen.getByText('Registrar-se');

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('submits the form with valid data', async () => {
    const dispatch = jest.fn();
    (useAppDispatch as jest.Mock).mockReturnValue(dispatch);

    renderSetup(<Forms.SignUpForm />);

    const nameInput = screen.getByPlaceholderText('Digite seu nome');
    const emailInput = screen.getByPlaceholderText('Digite seu email');
    const passwordInput = screen.getByPlaceholderText('Digite uma senha');
    const submitButton = screen.getByText('Registrar-se');

    await act(async () => {
      userEvent.type(nameInput, 'example');
      userEvent.type(emailInput, 'example@example.com');
      userEvent.type(passwordInput, 'password123');
    });

    await act(async () => {
      userEvent.click(submitButton);
    });

    expect(useAppDispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(
      createUser({
        name: 'example',
        email: 'example@example.com',
        password: 'password123',
      }),
    );
  });
});
