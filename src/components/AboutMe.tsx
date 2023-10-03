import React from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import './AboutMe.css';

const AboutMe: React.FC = () => {
    return (
        <div>
            <img src="images/profile-pic.jpg" width={250} alt="prof-pic"/>
            <Box sx={{width: 300, m: '0 auto'}}>
                <h2>Nhi Cung</h2>
                <p className="about-me-summary">I'm a creative and detail-oriented frontend developer with a passion for crafting immersive and visually stunning web applications. My journey in the world of web development began with a fascination for how technology can enhance user experiences and make the internet a more accessible and engaging place.</p>
                <Stack spacing={2} direction="row" alignItems="center">
                    <LocationOnIcon />
                    <p>Los Angeles, CA</p>
                </Stack>
                <Stack spacing={2} direction="row" alignItems="center">
                    <CallIcon />
                    <p>310-237-2969</p>
                </Stack>
                <Stack spacing={2} direction="row" alignItems="center">
                    <EmailIcon />
                    <p>cunghonglinhnhi@gmail.com</p>
                </Stack>
                <Stack spacing={2} direction="row" alignItems="center">
                    <LinkedInIcon />
                    <p>https://www.linkedin.com/in/nhicung/</p>
                </Stack>
                <Stack spacing={2} direction="row" alignItems="center">
                    <GitHubIcon />
                    <p>https://github.com/nhicung</p>
                </Stack>
            </Box>
        </div>
    )
};

export default AboutMe;