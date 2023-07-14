import React from 'react';

import * as S from "./styles"

interface IProps {
  children: React.ReactNode;
  className?: string;
}
const P: React.FC<IProps> = ({ children, className }) => {
  return (
    <S.P className={className}>
      <p>{children}</p>
    </S.P>
  );
};

const Span: React.FC<IProps> = ({ children, className }) => {
  return (
    <S.Span className={className}>
      <span>{children}</span>
    </S.Span>
  );
};

export default { P, Span };
