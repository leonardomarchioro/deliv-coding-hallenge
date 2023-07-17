import React from 'react';
import { ReactComponent as Vector } from '../../../../assets/undraw_takeout_boxes_ap54.svg';

import * as S from './styles';

const AuthBanner: React.FC = () => {
  return (
    <S.Container>
      <Vector />
    </S.Container>
  );
};

export default AuthBanner;
