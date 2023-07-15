import { FC } from 'react';
import { useAppDispatch } from '../../../../hooks';
import { setModal } from '../../../../store/modals.store';
//import * as S from './styles'


const CreateAddress: FC = () => {
    const dispatch = useAppDispatch()
    const handleCreateRequest = () => {
        dispatch(setModal({
            show: true,
            type: 'request/create',
            data: {}
        }))
    }

    return(
    <div>
        <h1>CreateAddress</h1>
        <button onClick={handleCreateRequest}>Cancelar</button>
    </div>
    );
};

export default CreateAddress;