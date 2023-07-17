import React from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import theme from '../styles/theme';


const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <StyledThemeProvider theme={theme}>
          <GlobalStyles />
          {children}
      </StyledThemeProvider>
    </>
  );
};

export default ThemeProvider;
