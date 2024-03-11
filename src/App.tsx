import React from 'react';
import './App.css';
import Main from './Components/Main';
import { Box } from '@mui/material';
import MobileView from "./Components/MobileView"

import { useMediaQuery, useTheme } from '@mui/material';
function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      
      {isMobile ? (
        <MobileView/>
      ) : (
        <Main/>
      )}
    </>
  );
}

export default App;
