import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

import AboutMe from './components/AboutMe';
import WorkAndProject from './WorkAndProject';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#ec407a',
    },
  },
  typography: {
    body1: {
      color: ""
    },
    h1: {
      color: ""
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
       <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={3} className="about-me-container">
          <Item className="about-me-wrapper"><AboutMe/></Item>
        </Grid>
        <Grid item xs={9} className="work-project-container">
          <Item>
           <WorkAndProject/>
            {/* <section className="s1">
                <h1>Section 1</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus unde molestiae explicabo vel omnis exercitationem ipsam suscipit amet, at maxime possimus, dolore temporibus sequi eos! Eveniet dolor molestias blanditiis, commodi vel fugiat non ipsa, laborum quod assumenda placeat eos asperiores sapiente, quisquam reprehenderit nam explicabo magnam atque! Doloribus, itaque voluptas?</p>
            </section>

            <section className="s2">
                <h1>Section 3</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus unde molestiae explicabo vel omnis exercitationem ipsam suscipit amet, at maxime possimus, dolore temporibus sequi eos! Eveniet dolor molestias blanditiis, commodi vel fugiat non ipsa, laborum quod assumenda placeat eos asperiores sapiente, quisquam reprehenderit nam explicabo magnam atque! Doloribus, itaque voluptas?</p>
            </section>

            <section className="s3">
                <h1>Section 3</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus unde molestiae explicabo vel omnis exercitationem ipsam suscipit amet, at maxime possimus, dolore temporibus sequi eos! Eveniet dolor molestias blanditiis, commodi vel fugiat non ipsa, laborum quod assumenda placeat eos asperiores sapiente, quisquam reprehenderit nam explicabo magnam atque! Doloribus, itaque voluptas?</p>
            </section>

            <section className="s4">
                <h1>Section 4</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus unde molestiae explicabo vel omnis exercitationem ipsam suscipit amet, at maxime possimus, dolore temporibus sequi eos! Eveniet dolor molestias blanditiis, commodi vel fugiat non ipsa, laborum quod assumenda placeat eos asperiores sapiente, quisquam reprehenderit nam explicabo magnam atque! Doloribus, itaque voluptas?</p>
            </section> */}
          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
    </ThemeProvider>
  );
}

export default App;
