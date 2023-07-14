import React from 'react';
import Banner from '../../organisms/Banner';
import { Button } from '../../atoms';

import * as S from './styles';

const Home: React.FC = () => {
  return (
    <S.Container>
      <Banner />
      <S.Div>
        <Button>Entrar</Button>
        <Button color='secondary'>Cadastrar-se</Button>
      </S.Div>
    </S.Container>
  );
}

export default Home;