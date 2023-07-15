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

const Dashboard: FC = () => {
  const requests = useRequest();

  return (
    <S.Container>
      <Header className="dash-header">
        <HelloUser />
        <LogoutButton />
      </Header>
      <Main>
        <RequestsHeader />
        {requests.length ? (
          <TableList columns={['ID', 'Cliente', 'Status']}>
            {requests.map(({ id, clientName, status }) => (
              <TableRow
                key={id}
                data={{ id, clientName, status: StatusTranslate[status] }}
              />
            ))}
          </TableList>
        ) : (
          <Banners.DashBanner />
        )}
      </Main>
    </S.Container>
  );
};

export default Dashboard;
