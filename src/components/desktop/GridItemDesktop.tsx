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
    const [hoverColor, setHoverColor] = useState("");
    const [isShown, setIsShown] = useState(false);

    const transition = useTransition(isShown, {
        from: { opacity: 0, transform: 'translate3d(0,100%,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        config: { duration: 800 },
    })
    
    return (
        <div>
            <Container 
                sx={{ mb: 0, ml: 0, mr: 0, p: 0, bgcolor:props.backgroundColor, position:'relative' }} 
                className="grid-container">
                <Box
                    id={props.id}
                    sx={{ 
                        zIndex:200, 
                        alignItems: 'center',
                        display: 'flex',
                    }}
                    onMouseEnter={() => {
                        setHoverColor(props.textColor);
                        setIsShown(true);
                    }}
                    onMouseLeave={() =>{ 
                        setHoverColor("white");
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
                        {transition((style) => (
                            <animated.div style={style}>
                                <Box sx={{
                                    typography:'p', 
                                    textAlign:'left', 
                                    display:isShown? 'flex' : 'none',
                                    opacity: isShown? 1 : 0,
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
                                            display:(isShown && props.webURL !== '' )? 'flex' : 'none',
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
                                                transition: 'opacity 1s ease',
                                                display:(isShown && props.gitURL !== '') ? 'flex' : 'none',
                                            }} 
                                            variant="contained"
                                            href={props.gitURL}
                                            target="_blank"
                                        >
                                                Show Git
                                        </Button>
                                    }
                                </Box>
                            </animated.div>
                        ))}
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
                <Divider sx={{
                        position: 'absolute',
                        width: '45%',
                        bottom: '36px',
                        transform: props.linePosition,
                        transition: 'transform 330ms ease-in-out',
                        color: '#C3073F',
                        "&::before, &::after":{
                            border:'1px solid #950740'
                        }
                    }}>
                        {props.id}/3
                </Divider>
            </Container>
        </div>
    );
};

export default GridItem;