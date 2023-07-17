import React, { ReactNode } from 'react';

import * as S from './styled';

type ColorsType = "primary" | "secondary" | "confirm" | "cancel"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  color?: ColorsType;
}


const Button: React.FC<ButtonProps> = ({ children, className, color, ...rest }) => {
  return (
    <S.Container color={color || "primary"} className={className}>
      <button {...rest}>{children}</button>
    </S.Container>
  );
};

export default Button;
