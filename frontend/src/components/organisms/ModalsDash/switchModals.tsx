import { FC } from 'react';
import Modals from '../Modals';

type TProps = {
  type: string;
  data: any;
};

const SwitchModals: FC<TProps> = ({ type, data }) => {
  switch (type) {
    case 'request/info':
      return <Modals.InfoRequest request={data} />;
    case 'request/create':
      return <Modals.CreateOrUpdateRequest />;
    case 'request/update':
      return <Modals.CreateOrUpdateRequest isEdit request={data}/>;
    case 'address/create':
        return <Modals.CreateAddress />;
    default:
      return <></>;
  }
};

export default SwitchModals;
