import React from 'react';
import { ReactComponent as Vector } from '../../../assets/undraw_on_the_way_re_swjt.svg';
import { Title, Text } from '../../atoms/';

import * as S from './styles';

const Banner: React.FC = () => {
  return (
    <S.Container>
      <S.Div>
      <Title.H1>IDelivery</Title.H1>
      <Text.Span>Levamos o que você precisa até a sua porta!</Text.Span>
      </S.Div>
      <Vector />
    </S.Container>
  );
};

export default Banner;
