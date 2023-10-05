import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface Item {
    id: string;
    name: string;
    img: string;
    time: string;
    company: string;
    description: string;
    webURL: string;
    gitURL: string;
    backgroundColor: string;
    textColor: string
} 

const GridItem:React.FC<Item> = props => {
    const [hoverColor, setHoverColor] = useState("");
    const [isShown, setIsShown] = useState(false);

    return (
        <div>
            <Container sx={{ mb: 0, ml: 0, mr: 0, p: 0, bgcolor:props.backgroundColor }} className="grid-container">
                {/* <Grid container sx={{alignItems:'center' }} spacing={2}>
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
                </Grid> */}
                <Box
                    sx={{ 
                        zIndex:200, 
                        alignItems: 'center',
                        display: 'flex',
                    }}
                    onMouseEnter={() => {
                        setHoverColor(props.textColor);
                        // setHoverImageStyle(imageDetail);
                        setIsShown(true);
                    }}
                    onMouseLeave={() =>{ 
                        setHoverColor("white");
                        // setHoverImageStyle(imageShorten);
                        setIsShown(false);
                    }}
                >
                    <Box className="role" sx={{color:hoverColor}}>
                        <Box sx={{ 
                            typography: 'h1', 
                            fontWeight: 'bold', 
                            textAlign: 'left' 
                        }}>
                            {props.name}
                        </Box>
                        <Box sx={{ 
                            typography:'h4', 
                            fontSize: 20, 
                            textAlign: 'left' 
                        }}>
                            {props.company}
                        </Box>
                        <Box sx={{
                            typography:'p', 
                            textAlign:'left', 
                            display:isShown? 'flex' : 'none',
                            opacity: isShown? 1 : 0,
                            transition: 'opacity 1s, display 1s',
                            transitionBehavior:' allow-discrete',
                            whiteSpace: 'normal',
                            width: '500px',
                        }}>
                            {props.description}
                        </Box>
                        <Box sx={{display:'flex', justifyContent:'space-between'}}>
                            <Button 
                                color="secondary"
                                sx={{
                                    mt: 2,
                                    width:'45%',
                                    transition: 'opacity 1s ease-in',
                                    display:isShown? 'flex' : 'none',
                                    opacity: isShown? 1 : 0,
                                }} 
                                variant="contained"
                                href={props.webURL}
                                target="_blank"
                            >
                                    Show Site
                            </Button>
                            {props.gitURL === '' ?
                                <div></div>
                            :
                                <Button 
                                    color="secondary"
                                    sx={{
                                        mt: 2,
                                        width:'45%',
                                        transition: 'opacity 1s ease-in',
                                        display:isShown? 'flex' : 'none',
                                        opacity: isShown? 1 : 0,
                                    }} 
                                    variant="contained"
                                    href={props.gitURL}
                                    target="_blank"
                                >
                                        Show Git
                                </Button>
                            }
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display:'flex',
                            alignItems:'center',
                            position: 'relative',
                            transition:' transform 1s ease',
                            opacity: isShown ? 1 : 0.5,
                            transform: isShown ? 'scale(0.6) translateX(500px)' : 'scale(1) translateX(0)',
                        }}
                    >
                            <img
                                width='700px'
                                src={props.img}
                                alt={props.name}
                            />
                    </Box>
                </Box>
                <div className="bottom-line">
                <hr/>
            </div>
            </Container>
        </div>
    );
};

export default GridItem;