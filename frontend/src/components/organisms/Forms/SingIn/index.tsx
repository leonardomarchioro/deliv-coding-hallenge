import React from 'react';
import { Button, Inputs, RedirectButton, Text, Title } from '../../../atoms';

import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Validations from '../../../../validations';

import { useAppDispatch } from '../../../../hooks';
import { loginUser } from '../../../../store/auth.store';

import * as S from './styles';

const SignInForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Validations.Auth.loginSchema),
  });

  const onSubmit = (data: FieldValues) => {
    dispatch(loginUser(data));
  };

  return (
    <S.Container>
      <Title.H2>Login</Title.H2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Inputs.GeneralInput
          label="Email"
          name="email"
          placeholder="Digite seu email"
          error={errors}
          register={register}
        />
        <Inputs.PasswordInput
          label="Senha"
          name="password"
          placeholder="Digite uma senha"
          error={errors}
          register={register}
        />
        <Button color="confirm" type="submit">
          Entrar
        </Button>
      </form>
      <S.BottomContainer>
        <Text.Span className="text-span">Ainda não possui uma conta?</Text.Span>
        <RedirectButton path="/auth?action=sign-up">
          Cadastrar-se
        </RedirectButton>
      </S.BottomContainer>
    </S.Container>
  );
};

export default SignInForm;
