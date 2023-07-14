import React from 'react';
import { Navigate } from 'react-router-dom';
import { Forms, Banners } from '../../organisms/';

import * as S from './styles';

const Auth: React.FC<{ action: string | null }> = ({ action }) => {
  console.log(action)
  return (
    <S.Container>
      <Banners.AuthBanner />
      {
      action === "sign-up" ? <Forms.SignUpForm /> : 
      action === "sign-in" ? <Forms.SignInForm />: 
      <Navigate to="/" />
      }
    </S.Container>
    
    )
};

export default Auth;

