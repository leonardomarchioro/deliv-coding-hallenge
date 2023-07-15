import { FC } from 'react';
import Modals from '../Modals';
//import * as S from './styles'

type TProps = {
  type: string;
  data: any;
};

const SwitchModals: FC<TProps> = ({ type, data }) => {
  switch (type) {
    case 'request/info':
      return <Modals.InfoRequest request={data} />;
    case 'request/create':
      return <Modals.CreateRequest />;
    case 'request/update':
      return <Modals.UpdateRequest request={data}/>;
    case 'address/create':
        return <Modals.CreateAddress />;
    default:
      return <></>;
  }
};

export default SwitchModals;
