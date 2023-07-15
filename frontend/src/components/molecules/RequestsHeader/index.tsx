import { FC } from 'react';
import { Button, Title } from '../../atoms';
import * as S from './styles'


const RequestsHeader: FC = () => {
  return (
    <S.Container>
      <Title.H2>Seus Pedidos</Title.H2>
      <Button className="button-container" color='confirm'>Novo pedido</Button>
    </S.Container>
  );
};

export default RequestsHeader;
