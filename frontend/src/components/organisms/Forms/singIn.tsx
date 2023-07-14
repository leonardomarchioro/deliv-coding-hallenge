import React from 'react';
import { Inputs } from '../../atoms';

import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useAppDispatch } from '../../../hooks';
import { loginUser } from '../../../store/auth.store'; 
// import { Container } from './styles';

const validationSchema = yup.object().shape({
  email: yup.string().email('Email inválido').required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório'),
});

const SignInForm: React.FC = () => {
    const dispatch = useAppDispatch()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    dispatch(loginUser(data))
  };

  return (
    <div>
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
        <button type="submit">entrar</button>
      </form>
    </div>
  );
};

export default SignInForm;
