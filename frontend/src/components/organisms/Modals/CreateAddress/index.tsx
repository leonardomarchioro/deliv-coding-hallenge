import { FC } from 'react';
import { useAppDispatch } from '../../../../hooks';
import { setModal, useModal } from '../../../../store/modals.store';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Validation from '../../../../validations';
import { createAddress } from '../../../../services/address.service';
import { Button, Inputs, Title } from '../../../atoms';

import * as S from './styles'

const CreateAddress: FC = () => {
  const dispatch = useAppDispatch();
  const { data: request } = useModal();
  const handleBackModal = () => {
    const data = {
      show: true,
      type: 'request/create',
      data: {},
    };

    if (Object.keys(request).length) {
      data.data = request;
      data.type = 'request/update';
    }

    dispatch(setModal(data));
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Validation.Address.createSchema),
  });

  const onSubmit = async (data: any) => {
    const { payload }: { payload: any } = await dispatch(createAddress(data));

    if (payload?.id) handleBackModal();
  };

  return (
    <S.Container>
      <Title.H2>Novo Endereço</Title.H2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Inputs.GeneralInput
          label="Bairro"
          name="district"
          placeholder="Digite o nome do bairro"
          error={errors}
          register={register}
        />
        <Inputs.GeneralInput
          label="Rua"
          name="street"
          placeholder="Digite o nome da rua"
          error={errors}
          register={register}
        />
        <Inputs.GeneralInput
          label="Número"
          name="number"
          placeholder="Digite o número da casa"
          error={errors}
          register={register}
        />
        <S.ButtonsContainer>
        <Button color='secondary' type='submit'>Enviar</Button>
        <Button color='cancel' type='button' onClick={handleBackModal}>Cancelar</Button>
        </S.ButtonsContainer>
      </form>
    </S.Container>
  );
};

export default CreateAddress;
