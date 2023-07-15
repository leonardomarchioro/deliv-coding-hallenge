import { FC } from 'react';
import { IRequest, StatusTranslate } from '../../../../interfaces/request';
import { useAppDispatch } from '../../../../hooks';
import { setModal } from '../../../../store/modals.store';
import { Button, Text, Title } from '../../../atoms';
import * as S from './styles';

type TProps = {
  request: IRequest;
};

const InfoRequest: FC<TProps> = ({ request }) => {
  const dispatch = useAppDispatch();
  const { deliveryAddress, clientName, status, id } = request;
  const { street, district, number } = deliveryAddress;

  const handleEditRequest = () => {
    dispatch(
      setModal({
        show: true,
        type: 'request/update',
        data: request,
      }),
    );
  };

  return (
    <S.Container>
        <Title.H2 className='title'>Informações:</Title.H2>
      <S.InfosContainer>
        <Text.Span>ID: {id}</Text.Span>
        <Text.Span>Cliente: {clientName}</Text.Span>
        <Text.Span>Status: {StatusTranslate[status]}</Text.Span>
      </S.InfosContainer>
        <Title.H2 className='title'>Endereço:</Title.H2>
      <S.AddressContainer>
        <Text.Span>Bairro: {district}</Text.Span>
        <Text.Span>
          Rua: {street}
        </Text.Span>
        <Text.Span>
          Número: {number}
        </Text.Span>
      </S.AddressContainer>
      <Button
        className="button-edit"
        color="secondary"
        onClick={handleEditRequest}
      >
        Editar
      </Button>
    </S.Container>
  );
};

export default InfoRequest;
