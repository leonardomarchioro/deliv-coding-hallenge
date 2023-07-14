import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home';
import AuthPage from '../pages/Auth';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/auth' element={<AuthPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
