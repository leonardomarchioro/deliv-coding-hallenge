import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Salve</div>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
