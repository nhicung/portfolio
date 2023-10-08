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
        <Box sx={{bgcolor:"" }}>
            <img src="images/profile-pic.jpg" width={250} alt="prof-pic" className="profile-pic"/>
            <Box sx={{width: 300, m: '0 auto'}}>
                <h2>Nhi Cung</h2>
                <p className="about-me-summary">I'm a creative and detail-oriented frontend developer with a passion for crafting immersive and visually stunning web applications. My journey in the world of web development began with a fascination for how technology can enhance user experiences and make the internet a more accessible and engaging place.</p>
                <Stack spacing={2} direction="row" alignItems="center">
                    <LocationOnIcon color="secondary" />
                    <p>Los Angeles, CA</p>
                </Stack>
                <Stack spacing={2} direction="row" alignItems="center">
                    <CallIcon color="secondary" />
                    <p>310-237-2969</p>
                </Stack>
                <Stack spacing={2} direction="row" alignItems="center">
                    <EmailIcon color="secondary" />
                    <a href='mailto:cunghonglinhnhi@gmail.com?subject="subject text"' target='blank'>cunghonglinhnhi@gmail.com</a>
                </Stack>
                <Stack spacing={2} direction="row" alignItems="center">
                    <LinkedInIcon color="secondary" />
                    <a href= 'https://www.linkedin.com/in/nhicung/' target='blank'>https://www.linkedin.com/in/nhicung/</a>
                </Stack>
                <Stack spacing={2} direction="row" alignItems="center">
                    <GitHubIcon color="secondary" />
                    <a href= 'https://www.linkedin.com/in/nhicung/' target='blank'>https://github.com/nhicung</a>
                </Stack>
            </Box>
        </Box>
    )
};

export default AboutMe;