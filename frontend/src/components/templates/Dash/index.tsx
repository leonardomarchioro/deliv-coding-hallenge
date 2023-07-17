import { FC } from 'react';
import { Banners, Header, Main } from '../../organisms/';
import {
  LogoutButton,
  HelloUser,
  TableList,
  TableRow,
  RequestsHeader,
} from '../../molecules/';

import * as S from './styles';
import { useRequest } from '../../../store/request.store';
import { StatusTranslate } from '../../../interfaces/request';
import ModalsDash from '../../organisms/ModalsDash';
import { useAppDispatch } from '../../../hooks';
import { setModal } from '../../../store/modals.store';

const Dashboard: FC = () => {
  const requests = useRequest();
  const dispatch = useAppDispatch();

  return (
    <>
      <ModalsDash />
      <S.Container>
        <Header className="dash-header">
          <HelloUser />
          <LogoutButton />
        </Header>
        <Main>
          <RequestsHeader />
          {requests.length ? (
            <TableList columns={['ID', 'Cliente', 'Status']}>
              {requests.map((request) => (
                <TableRow
                  key={request.id}
                  data={{
                    id: request.id,
                    clientName: request.clientName,
                    status: StatusTranslate[request.status],
                  }}
                  onClick={() =>
                    dispatch(
                      setModal({
                        show: true,
                        type: 'request/info',
                        data: request,
                      }),
                    )
                  }
                />
              ))}
            </TableList>
          ) : (
            <Banners.DashBanner />
          )}
        </Main>
      </S.Container>
    </>
  );
};

export default Dashboard;
