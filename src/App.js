import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import './App.css';
import Add from './components/Add';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';

function App() {
  const [mode, setMode] = useState('light')

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={'background.default'} color={'text.primary'}>
          <Navbar setMode={setMode} mode={mode}/>
          <Stack direction='row' spacing={2}>
            <Sidebar setMode={setMode} mode={mode}/>
            <Feed />
            <Rightbar />
          </Stack>
          <Add />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
