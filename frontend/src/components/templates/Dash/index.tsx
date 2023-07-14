import { FC } from 'react';
import { useAppDispatch } from '../../../hooks';
//import * as S from './styles'

import { createAddress, deleteAddress, listAddress, updateAddress, useAddress } from "../../../store/address.store"
import { checkToken } from '../../../store/auth.store';
import { useUser } from '../../../store/user.store';

type TProps = {};

const data = {
  street: 'Rua 3334',
  number: 123,
  district: 'Bairro',
};



const Dashboard: FC<TProps> = () => {
    const dispatch = useAppDispatch()
    const address = useAddress()
    const user = useUser()
    console.log({user});


  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => dispatch(checkToken())}>Click</button>
    </div>
  );
};

export default Dashboard;
