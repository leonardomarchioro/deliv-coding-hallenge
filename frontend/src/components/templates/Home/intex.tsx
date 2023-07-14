import React from 'react';
import { Banners } from "../../organisms/"
import { Button } from '../../atoms';

import * as S from './styles';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const signIn = () => {
    navigate('/auth?action=sign-in');
  };

  const singUp = () => {
    navigate('/auth?action=sign-up');
  };

  return (
    <S.Container>
      <Banners.HomeBanner />
      <S.Div>
        <Button onClick={signIn}>Entrar</Button>
        <Button onClick={singUp} color="secondary">
          Cadastrar-se
        </Button>
      </S.Div>
    </S.Container>
  );
};

export default Home;
