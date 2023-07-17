import { FC, ReactNode } from 'react';
import * as S from './styles'

type TProps = {
    children: ReactNode;
    className?: string;
};

const Header: FC<TProps> = ({ children, className }) => {
    return(
    <S.Container className={className}>
        {children}
    </S.Container>
    );
};

export default Header;