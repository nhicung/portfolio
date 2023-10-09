import React, {useState} from 'react';
import { useTransition, animated } from '@react-spring/web';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
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
    linePosition: string
} 


const GridItem:React.FC<Item> = props => {
    return (
        <div>
            <Container 
                sx={{ 
                    mb: 0, 
                    ml: 0, 
                    mr: 0, 
                    p: 0, 
                    bgcolor:props.backgroundColor,
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    flexDirection: 'column',
                    position:'relative',
                    scrollSnapAlign:'start'
                }} 
            >
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    width:'100%',
                    p: '150px 0',
                }}>
                    <Box
                        sx={{
                            display:'flex',
                            alignItems:'center',
                            position: 'relative',
                            opacity: 0.5,
                            backgroundImage:`url(${props.img})`,
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            height: '300px',
                        }}
                    >
                    </Box>
                    <Box sx={{
                        top: '55%',
                        left: '5%',
                        position: 'absolute',
                    }}>
                        <Box sx={{ 
                            typography: 'h2', 
                            fontWeight: 'bold', 
                            textAlign: 'left',
                            color:'#fff'
                            }}>
                                {props.name}
                        </Box>
                        <Box sx={{ 
                            typography:'h4', 
                            fontSize: 20, 
                            textAlign: 'left',
                            color:'#fff',
                        }}>
                            {props.company}
                        </Box>
                    </Box>
                    <Box sx={{
                        position: 'absolute',
                        p: '20px',
                    }}>
                        <Box sx={{
                            typography:'p', 
                            textAlign:'left', 
                            whiteSpace: 'normal',
                            color:'#fff',
                            lineHeight:'125%'
                        }}>
                            {props.description}
                        </Box>
                        <Box sx={{display:'flex', justifyContent:'space-between'}}>
                            <Button 
                                color="secondary"
                                size="large"
                                sx={{
                                    mt: 2,
                                    width:'45%',
                                    display:(props.webURL !== '' )? 'flex' : 'none',
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
                                    size="large"
                                    sx={{
                                        mt: 2,
                                        width:'45%',
                                        // transition: 'opacity 1s ease',
                                        display:(props.gitURL !== '') ? 'flex' : 'none',
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
                </Box>
            </Container>
        </div>
    );
};

export default GridItem;