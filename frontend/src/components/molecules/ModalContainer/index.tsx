import { FC, ReactNode } from 'react';

import { RenderModalBackdropProps } from 'react-overlays/cjs/Modal';
import * as S from './styles';

type TProps = {
  children: ReactNode;
  show: boolean;
  close: () => void;
};

const ModalContainer: FC<TProps> = ({ children, close, show }) => {
  return (
    <S.ModalContainer
      onHide={close}
      show={show}
      renderBackdrop={renderBackdrop}
    >
      <>{children}</>
    </S.ModalContainer>
  );
};

const renderBackdrop = (props: RenderModalBackdropProps) => (
  <S.BackgroundModal {...props} />
);

export default ModalContainer;
