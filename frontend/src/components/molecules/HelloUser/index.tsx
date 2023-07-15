import { FC } from 'react';
import { useUser } from '../../../store/user.store';
import { Title } from '../../atoms';
import capitalizeFirstLetter from '../../../helpers/capitalizeFirstLetter';

type TProps = {
    className?: string
};

const HelloUser: FC<TProps> = ({ className }) => {

    const { name } = useUser()

    return(
    <div className={className}>
        <Title.H3>Olá {capitalizeFirstLetter(name)}</Title.H3>
    </div>
    );
};

export default HelloUser;