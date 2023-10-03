import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface Item {
    id: string;
    name: string;
    img: string;
    time: string;
    company: string;
    description: string;
    webURL: string;
} 

const GridItem:React.FC<Item> = props => {

    return (
        <div>
            <Container maxWidth="md" sx={{ mb: 2, ml: 0, mr: 0, p: 4, }}>
                <Grid container sx={{alignItems:'center' }} spacing={2}>
                    <Grid
                        item
                        xs={12}
                        md={4}
                        direction='column'
                    >
                        <img
                            width='250px'
                            src={props.img}
                            alt={props.name}
                        />
                    </Grid>
                    <Grid  
                        item
                        xs={12}
                        md={8}>
                        <Typography variant='h3' sx={{ fontSize: 28 }} align='left'>
                            {' '}
                            {props.name}
                        </Typography>
                        <Typography variant='h4' sx={{ fontSize: 20 }} id={props.id} align='left'>
                            {' '}
                            {props.company}
                        </Typography>
                        <Typography align='left'>
                            {' '}
                            <b>{props.time}</b>
                        </Typography>
                        <Typography align='left'>
                            {' '}
                            {props.description}
                        </Typography>
                        <Typography align='left'>
                            {' '}
                            {props.webURL}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default GridItem;