import React from 'react';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { BrowserRouter } from 'react-router-dom';
import Main from './layouts/Main';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;