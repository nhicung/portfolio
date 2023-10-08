import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


import AboutMe from '../../components/AboutMe';
import WorkAndProject from './WorkAndProject';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const DesktopVersion: React.FC = () => {

  return (
    
    <Grid container>
    <Grid item xs={3} className="about-me-container">
        <Item className="about-me-wrapper"><AboutMe/></Item>
    </Grid>
    <Grid item xs={9} sx={{left: '25%', position: 'relative', borderLeft: 'solid #950740'}}>
        <Item>
        <WorkAndProject/>
        </Item>
    </Grid>
    </Grid>
  );
}

export default DesktopVersion;
