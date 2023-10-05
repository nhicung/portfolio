import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import workData from './data/workData.js';
import projectData from './data/projectData.js';
import Work from './components/GridList'

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

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
        <Box sx={{ p: 0 }}>
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
        <Box sx={{ bgcolor:"" }}>
          <AppBar 
            position="static" 
            sx={{
              background:'transparent', 
              boxShadow: 'none',
              position: 'fixed',
              width: '75%'
            }} 
          >
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
          <Box sx={{ p: 0}}>
              <TabPanel value={value} index={0}>
                  <Work items={workData}/>
              </TabPanel>
              <TabPanel value={value} index={1}>
                  <Work items={projectData}/>
              </TabPanel>
          </Box>
        </Box>
  );
}
