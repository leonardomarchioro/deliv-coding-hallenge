import { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles'

type TProps = {
    path: string
    children: ReactNode
    className?: string
};

const RedirectButton: FC<TProps> = ({ children, path, className}) => {
    const navigate = useNavigate()

    return(
    <S.Container className={className}>
        <button onClick={() => navigate(path)}>{children}</button>
    </S.Container>
    );
};

export default RedirectButton;