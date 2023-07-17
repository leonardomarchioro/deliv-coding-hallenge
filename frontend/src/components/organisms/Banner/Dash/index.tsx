import { FC } from 'react';
import { ReactComponent as Vector } from "../../../../assets/undraw_empty_cart_co35.svg"
import * as S from './styles'
import { Title } from '../../../atoms';


const DashBanner: FC = () => {
    return(
    <S.Container>
        <Vector />
        <Title.H3>Sem pedidos registrados</Title.H3>
    </S.Container>
    );
};

export default DashBanner;