import React from 'react';
import Box from '@mui/material/Box';

import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

import DesktopVersion from './pages/desktop/DesktopVersion';
import MobileVersion from './pages/mobile/MobileVersion'

const theme = createTheme({
  palette: {
    primary: {
      main: '#4E4E50',
    },
    secondary: {
      main: '#950740',
    },
  },
  typography: {
    body1: {
      color: ""
    },
    h1: {
      color: "",
      fontSize: '50px'
    },
    h2: {
      color: "",
      fontSize: '36px'
    },
    button: {
      color: ""
    }
  }
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* Desktop version */}
        <Box sx={{ flexGrow: 1, display:['none', 'flex']}}>
          <DesktopVersion/>
        </Box>
        {/* Mobile version */}
        <Box sx={{ flexGrow: 1, display:['flex', 'none'] }}>
          <MobileVersion/>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
