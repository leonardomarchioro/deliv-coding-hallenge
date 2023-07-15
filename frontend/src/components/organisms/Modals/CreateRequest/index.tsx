import { FC } from 'react';
import { useAppDispatch } from '../../../../hooks';
import { setModal } from '../../../../store/modals.store';
import * as S from './styles';
import { Button, Inputs, Title } from '../../../atoms';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAddress } from '../../../../store/address.store';
import { IAddress } from '../../../../interfaces/address';
import * as yup from 'yup';
const CreateRequest: FC = () => {
  const dispatch = useAppDispatch();

  const address = useAddress();
  const options = transformInSelectObject(address);

  const handleCreateAddress = () => {
    dispatch(
      setModal({
        show: true,
        type: 'address/create',
        data: {},
      }),
    );
  };

  const schema = yup.object().shape({
    deliveryAddressId: yup.string().required('Por favor, selecione uma opção'),
    clientName: yup.string().required('Campo obrigatório'),
  });

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <S.Container>
      <Title.H2>Novo pedido</Title.H2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Inputs.GeneralInput
          label="Nome do cliente"
          name="clientName"
          placeholder="Digite o nome do cliente"
          error={errors}
          register={register}
        />
        <S.AddressContainer>
          <Inputs.SelectInput
            className='select-input'
            options={options}
            onChange={(value) => {
              setValue('deliveryAddressId', value);
            }}
            label="Endereço"
            name="deliveryAddressId"
            register={register}
          />
          <Button className='add-button' color='confirm' type='button' onClick={handleCreateAddress}>Novo endereço</Button>
        </S.AddressContainer>
        <Button className='send-button' color="confirm" type="submit">
          Enviar
        </Button>
      </form>
    </S.Container>
  );
};

const transformInSelectObject = (arr: IAddress[]) => {
  return arr.map(({ id, street, district, number }) => ({
    value: id,
    label: `Rua ${street} n° ${number} - ${district}`,
  }));
};

export default CreateRequest;
