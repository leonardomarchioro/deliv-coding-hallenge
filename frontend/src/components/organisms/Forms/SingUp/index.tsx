import React from 'react';
import { Button, Inputs, RedirectButton, Text, Title } from '../../../atoms';

import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Validation from "../../../../validations"

import { useAppDispatch } from '../../../../hooks';

import * as S from './styles';
import { createUser } from '../../../../services/user.service';


const SignUpForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Validation.User.createSchema),
  });

  const onSubmit = (data: FieldValues) => {
    dispatch(createUser(data));
  };

  return (
    <S.Container>
      <Title.H2>Cadastrar-se</Title.H2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Inputs.GeneralInput
          label="Nome"
          name="name"
          placeholder="Digite seu nome"
          error={errors}
          register={register}
        />
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
          Registrar-se
        </Button>
      </form>
      <S.BottomContainer>
        <Text.Span className="text-span">Já possui uma conta?</Text.Span>
        <RedirectButton path="/auth?action=sign-in">Entrar</RedirectButton>
      </S.BottomContainer>
    </S.Container>
  );
};

export default SignUpForm;
