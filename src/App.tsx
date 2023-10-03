import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import AboutMe from './components/AboutMe';
import WorkAndProject from './WorkAndProject';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {

  return (
    <div className="App">
       <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={3}>
          <Item className="about-me-wrapper"><AboutMe/></Item>
        </Grid>
        <Grid item xs={9}>
          <Item>
           <WorkAndProject/>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}

export default App;
