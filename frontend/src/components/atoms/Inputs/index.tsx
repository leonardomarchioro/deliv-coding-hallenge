import React, { useState } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import * as S from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  error: FieldErrors<any>;
  register: UseFormRegister<any>;
  className?: string;
}

const GeneralInput: React.FC<InputProps> = ({
  name,
  label,
  error,
  register,
  className,
  ...rest
}) => {
  return (
    <S.Container className={className}>
      {label && <label>{label}</label>}
      <S.InputContainer error={!!error[name]}>
        <input {...register(name)} {...rest} />
      </S.InputContainer>
      <S.ErrorContainer>
        {error[name] && <span>{error[name]?.message as string}</span>}
      </S.ErrorContainer>
    </S.Container>
  );
};

const PasswordInput: React.FC<InputProps> = ({
  name,
  label,
  error,
  register,
  className,
  ...rest
}) => {
  const [type, setType] = useState<'text' | 'password'>('password');

  return (
    <S.Container className={className}>
      {label && <label>{label}</label>}
      <S.InputContainer error={!!error[name]}>
        <input type={type} {...register(name)} {...rest} />
        <S.ToogleContainer>
          {type === 'text' ? (
            <VscEyeClosed onClick={() => setType('password')} />
          ) : (
            <VscEye onClick={() => setType('text')} />
          )}
        </S.ToogleContainer>
      </S.InputContainer>
      <S.ErrorContainer>
        {error[name] && <span>{error[name]?.message as string}</span>}
      </S.ErrorContainer>
    </S.Container>
  );
};

export default { GeneralInput, PasswordInput };
