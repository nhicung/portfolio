import React, { useRef, useEffect, createRef } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AppBar from "@mui/material/AppBar";

import AboutMe from "../../components/AboutMe";
import GridList from "../../components/mobile/GridListMobile";
import workData from "../../data/workData.js";
import projectData from "../../data/projectData.js";
import useIntersection from "../../components/UserIntersection";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const MobileVersion: React.FC = () => {
  const [value, setValue] = React.useState(0);
  
  const refs = useRef<(null | HTMLDivElement)[]>([]);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };
  
  const listTabs = [
    {
      id: "about",
      jsx: 
      <Item className="about-me-wrapper-mobile">
        <AboutMe />
      </Item>,
      label: 'About'
    },
    { id: "work",
      jsx:<GridList items={workData} linePosition={""} />,
      label: 'Experiences'

    },
    { id: "project",
      jsx: <GridList items={projectData} linePosition={""} />,
      label: 'Projects'
    },
  ];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const targetTab = useIntersection(refs, "-100px");

  useEffect(() => {
    setValue(targetTab);
  }, [targetTab]);

  return (
    <React.Fragment>
      <AppBar
        position="static"
        sx={{
          background: "transparent",
          boxShadow: "none",
          position: "fixed",
          width: "100%",
          zIndex: 100,
          pt: 2,
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
          {listTabs.map((item, index) => {
            return (
              <Tab
                key={item.id}
                onClick={() => {
                  refs.current[index]?.scrollIntoView({ behavior: "smooth" });
                }}
                label={item.label}
              />
            )
          })}
          {/* <Tab
            onClick={() => {
              about.current?.scrollIntoView({ behavior: "smooth" });
            }}
            label="About"
          />
          <Tab
            onClick={() => {
              work.current?.scrollIntoView({ behavior: "smooth" });
            }}
            label="Experiences"
          />
          <Tab
            onClick={() => {
              project.current?.scrollIntoView({ behavior: "smooth" });
            }}
            label="Projects"
          /> */}
        </Tabs>
      </AppBar>

      <Grid direction="row" container>
        {listTabs.map((item, index) => {
          return (
            <Grid sx={{}} ref={addToRefs} item xs={12} key={item.id}>
              {item.jsx}
            </Grid>
          )
        })}
        
      </Grid> 
    </React.Fragment>
  );
};

export default MobileVersion;
