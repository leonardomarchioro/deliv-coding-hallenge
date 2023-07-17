import { FC } from 'react';
import { logOut } from '../../../store/auth.store';
import { Button } from '../../atoms';
import { useAppDispatch } from '../../../hooks';
import * as S from './styles';

type TProps = {
  className?: string;
};

const LogoutButton: FC<TProps> = ({ className }) => {
  const dispatch = useAppDispatch();

  return (
    <S.Container className={className}>
      <Button color="secondary" onClick={() => dispatch(logOut())}>
        Sair
      </Button>
    </S.Container>
  );
};

export default LogoutButton;
