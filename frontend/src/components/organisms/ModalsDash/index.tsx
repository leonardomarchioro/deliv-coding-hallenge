import { FC } from 'react';
import { closeModal, useModal } from '../../../store/modals.store';
import { ModalContainer } from '../../molecules/';
import { useAppDispatch } from '../../../hooks';
import SwitchModals from './switchModals';

import * as S from './styles';
import { Button } from '../../atoms';

const ModalsDash: FC = () => {
  const dispatch = useAppDispatch();
  const { show, type, data } = useModal();

  const close = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <ModalContainer close={close} show={show}>
        <S.Container>
          <Button className='button-container' color="cancel" onClick={close}>
            X
          </Button>
          <SwitchModals type={type} data={data} />
        </S.Container>
      </ModalContainer>
    </>
  );
};

export default ModalsDash;
