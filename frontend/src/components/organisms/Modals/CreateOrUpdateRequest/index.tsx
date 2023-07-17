import { FC, useEffect, useState } from 'react';
import { useAppDispatch } from '../../../../hooks';
import { setModal } from '../../../../store/modals.store';
import * as S from './styles';
import { Button, Inputs, Title } from '../../../atoms';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAddress } from '../../../../store/address.store';
import { IAddress } from '../../../../interfaces/address';
import Validation from '../../../../validations';
import {
  createRequest,
  updateRequest,
} from '../../../../services/request.service';
import { IRequest } from '../../../../interfaces/request';
import { RequestStatus } from '../../../../interfaces/request';
import { StatusTranslate } from '../../../../interfaces/request';
import { AnyObjectSchema } from 'yup';

type TProps = {
  isEdit?: boolean;
  request?: IRequest;
};

const CreateOrUpdateRequest: FC<TProps> = ({ isEdit, request }) => {
  const [schema, setSchema] = useState<AnyObjectSchema>(
    Validation.Request.createSchema,
  );
  const dispatch = useAppDispatch();

  const address = useAddress();
  const options = transformAddressInSelectObject(address);

  const handleCreateAddress = () => {
    const data = {
      show: true,
      type: 'address/create',
      data: {},
    };

    if (isEdit && request) {
      data.data = request;
    }

    dispatch(setModal(data));
  };

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    if (isEdit && request?.id) {
      const { payload }: { payload: any } = await dispatch(
        updateRequest({ id: request?.id, data }),
      );

      if (payload.id) hgandleCloseModal();
    } else {
      const { payload }: { payload: any } = await dispatch(createRequest(data));
      if (payload.id) hgandleCloseModal();
    }
  };

  const hgandleCloseModal = () => {
    dispatch(
      setModal({
        show: false,
        type: '',
        data: {},
      }),
    );
  };

  useEffect(() => {
    if (isEdit && request) {
      setSchema(Validation.Request.updateSchema);
      setValue('clientName', request.clientName);
      setValue('deliveryAddressId', request.deliveryAddress.id);
      setValue('status', request.status);
    }
  }, [request, isEdit, setValue]);

  return (
    <S.Container>
      <Title.H2>{isEdit ? 'Editar pedido' : 'Novo pedido'}</Title.H2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Inputs.GeneralInput
          label="Nome do cliente"
          name="clientName"
          placeholder="Digite o nome do cliente"
          error={errors}
          register={register}
        />
        {address && address.length ? (
          <S.AddressContainer>
            <Inputs.SelectInput
              className="select-input"
              options={options}
              onChange={(value) => {
                setValue('deliveryAddressId', Number(value));
              }}
              label="Endereço"
              name="deliveryAddressId"
              register={register}
            />
            <Button
              className="add-button"
              color="confirm"
              type="button"
              onClick={handleCreateAddress}
            >
              Novo endereço
            </Button>
          </S.AddressContainer>
        ) : (
          <Button
              className="create-button"
              color="confirm"
              type="button"
              onClick={handleCreateAddress}
            >
              Criar endereço
            </Button>
        )
      }
        {isEdit && (
          <Inputs.SelectInput
            className="select-input"
            options={transformStatusInSelectObject()}
            onChange={(value) => {
              setValue('status', value);
            }}
            label="Situação"
            name="status"
            register={register}
          />
        )}
        <Button className="send-button" color="confirm" type="submit">
          Enviar
        </Button>
      </form>
    </S.Container>
  );
};

const transformAddressInSelectObject = (arr: IAddress[] = []) => {
  return arr.map(({ id, street, district, number }) => ({
    value: id,
    label: `Rua ${street} n° ${number} - ${district}`,
  }));
};

const transformStatusInSelectObject = () => {
  return Object.values(RequestStatus).map((value) => ({
    value,
    label: StatusTranslate[value],
  }));
};

export default CreateOrUpdateRequest;
