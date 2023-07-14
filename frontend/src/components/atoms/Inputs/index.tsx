import React from 'react';

import { FieldErrors, FieldValues, UseFormRegister, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';


// import { Container } from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  error: FieldErrors<any>;
  register: UseFormRegister<any>
}

const GeneralInput: React.FC<InputProps> = ({
  name,
  label,
  error,
  register,
  ...rest
}) => {


  return (
    <div>
      {label && <label>{label}</label>}
      <input
        {...register(name)}
        {...rest}
      />
      {error[name] && <p>{error[name]?.message as string}</p>}
    </div>
  );
};

const PasswordInput: React.FC<InputProps> = ({
    name,
    label,
    error,
    register,
    ...rest
  }) => {
  
  
    return (
      <div>
        {label && <label>{label}</label>}
        <input
          {...register(name)}
          {...rest}
        />
        {error[name] && <p>{error[name]?.message as string}</p>}
      </div>
    );
};

export default { GeneralInput, PasswordInput };
