import * as React from 'react';
import { useTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';


import workData from './data/workData.js';
import projectData from './data/projectData.js';
import Work from './components/GridList'

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

const theme = createTheme({
    palette: {
      primary: {
        main: '#f8bbd0',
      },
      secondary: {
        main: '#ec407a',
      },
    },
  });

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function WorkAndProject() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
        <Box sx={{ }}>
        <AppBar position="static">
            <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
            >
            <Tab label="Experiences" {...a11yProps(0)} />
            <Tab label="Projects" {...a11yProps(1)} />
            </Tabs>
        </AppBar>
        <div>
            <TabPanel value={value} index={0} dir={theme.direction}>
                <Work items={workData}/>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
                <Work items={projectData}/>
            </TabPanel>
        </div>
        </Box>
    </ThemeProvider>
  );
}
