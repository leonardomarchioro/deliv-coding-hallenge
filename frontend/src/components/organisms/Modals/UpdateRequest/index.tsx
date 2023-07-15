import { FC } from 'react';
import { IRequest } from '../../../../interfaces/request';
import { useAppDispatch } from '../../../../hooks';
import { setModal } from '../../../../store/modals.store';
//import * as S from './styles'

type TProps = {
    request: IRequest
};

const UpdateRequest: FC<TProps> = ({ request }) => {
    const dispatch = useAppDispatch()
    const handleBackToRequest = () => {
        dispatch(setModal({
            show: true,
            type: 'request/info',
            data: request
        }))
    }

    return(
    <div>
        <h1>UpdateRequest</h1>
        <button onClick={handleBackToRequest}>cancelar</button>
    </div>
    );
};

export default UpdateRequest;