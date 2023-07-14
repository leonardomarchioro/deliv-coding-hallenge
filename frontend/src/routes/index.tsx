import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import HomePage from '../pages/Home';
import AuthPage from '../pages/Auth';
import DashPage from '../pages/Dash';
import { useAuth } from '../hooks/useAuth';

type PrivateRouteProps = {
  children: React.ReactNode;
};
const AppRouter: React.FC = () => {
  const { token } = useAuth();

  const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) =>
    token ? <>{children}</> : <Navigate to="/" />;

  const PublicRoute: React.FC<PrivateRouteProps> = ({ children }) =>
  !token ? <>{children}</> : <Navigate to="/dash" />;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicRoute children={<HomePage />} />} />
        <Route path="/auth" element={<PublicRoute children={<AuthPage />} />} />
        <Route
          path="/dash"
          element={<PrivateRoute children={<DashPage />} />}
        />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
