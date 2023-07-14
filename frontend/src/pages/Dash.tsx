import { FC } from 'react';
import { Button } from '../components/atoms';
import { useAppDispatch } from '../hooks';
import { logOut } from '../store/auth.store';
//import * as S from './styles'

const DashPage: FC = () => {
    const dispath = useAppDispatch()


    return(
    <div>
        <h1>DashPage</h1>
        <Button onClick={() => dispath(logOut())}>Sair</Button>
    </div>
    );
};

export default DashPage;