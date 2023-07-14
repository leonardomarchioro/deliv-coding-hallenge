import React from 'react';

import * as S from './styles';

const GeneralContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <S.Container>{children}</S.Container>;
};

export default GeneralContainer;
