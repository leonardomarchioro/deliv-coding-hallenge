import React from 'react';

import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { render } from '@testing-library/react';
export const renderSetup = (component: React.ReactNode) =>
  render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<>{component}</>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>,
  );
