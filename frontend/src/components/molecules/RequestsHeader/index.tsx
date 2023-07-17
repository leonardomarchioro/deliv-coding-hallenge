import { FC } from 'react';
import { Button, Title } from '../../atoms';
import * as S from './styles';
import { setModal } from '../../../store/modals.store';
import { useAppDispatch } from '../../../hooks';

const RequestsHeader: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <S.Container>
      <Title.H2>Seus Pedidos</Title.H2>
      <Button
        onClick={() =>
          dispatch(
            setModal({
              show: true,
              type: 'request/create',
              data: {},
            }),
          )
        }
        className="button-container"
        color="confirm"
      >
        Novo pedido
      </Button>
    </S.Container>
  );
};

export default RequestsHeader;
