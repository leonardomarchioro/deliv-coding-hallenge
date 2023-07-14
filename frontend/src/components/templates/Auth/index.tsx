import React from 'react';
import { Navigate } from 'react-router-dom';
import { ReactComponent as Vector } from "../../../assets/undraw_takeout_boxes_ap54.svg"
import Forms from '../../organisms/Forms';
// import { Container } from './styles';

const Auth: React.FC<{ action: string | null }> = ({ action }) => {
  console.log(action)
  return (
    <div>
      <Vector />
      {
      action === "sign-up" ? <Forms.SignUpForm /> : 
      action === "sign-in" ? <Forms.SignInForm />: 
      <Navigate to="/" />
      }
    </div>
    
    )
};

export default Auth;
