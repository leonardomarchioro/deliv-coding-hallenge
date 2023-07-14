import React from 'react';
import Auth from '../components/templates/Auth';
import useQuery from '../hooks/useQuery';

const AuthPage: React.FC = () => {
  const query = useQuery();
  const action = query.get('action');

  return <Auth action={action}/>;
}

export default AuthPage;