import React, { useState } from "react";
import { useTransition, animated } from "@react-spring/web";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";

import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
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
  textColor: string;
  linePosition: string;
}

const GridItem: React.FC<Item> = (props) => {
  const [hoverColor, setHoverColor] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const transition = useTransition(isHovered, {
    from: {
      opacity: 0,
      transform: "translate3d(-85px,0,0)",
      transition: " transform 0.8s ease",
    },
    enter: {
      opacity: 1,
      transform: "translate3d(-85px,100px,0)",
      position: "absolute",
    },
    config: { duration: 800 },
  });
  const headerTransition = useTransition(isHovered, {
    from: {
      opacity: 0,
      transform: "translate3d(0,100%,0)",
      transition: " transform 0.8s ease",
    },
    enter: {
      opacity: 1,
      transform: "translate3d(-85px,100px,0)",
      position: "absolute",
    },
    config: { duration: 800 },
  });

  return (
    <div>
      <Container
        sx={{
          mb: 0,
          ml: 0,
          mr: 0,
          p: 0,
          bgcolor: props.backgroundColor,
          position: "relative",
        }}
        className="grid-container"
      >
        <Box
          id={props.id}
          sx={{
            zIndex: 200,
            alignItems: "center",
            display: "flex",
          }}
          onMouseEnter={() => {
            setHoverColor(props.textColor);
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setHoverColor("white");
            setIsHovered(false);
          }}
        >
          <Box
            className="role"
            sx={{
              transform: isHovered ? "translateY(-65px)" : "translateX(0)",
              transition: " transform 1s ease",
              opacity: isHovered ? 1 : 0.5,
              color: hoverColor,
            }}
          >
            <Box
              sx={{
                typography: "h1",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              {props.name}
            </Box>
            <Box
              sx={{
                typography: "h4",
                fontSize: 20,
                textAlign: "left",
              }}
            >
              {props.company}
            </Box>
          </Box>
          {/* {transition((style) => (
                        <animated.div style={style}> */}
          <Box
            sx={{
              transform: "translate(-115px, 30px)",
            }}
          >
            <Grow
              in={isHovered}
              style={{ transformOrigin: "0 0 0", position: "absolute" }}
              {...(isHovered ? { timeout: 1000 } : {})}
            >
              <Box>
                <Box
                  sx={{
                    typography: "p",
                    textAlign: "left",
                    display: isHovered ? "flex" : "none",
                    opacity: isHovered ? 1 : 0,
                    whiteSpace: "normal",
                    width: "500px",
                  }}
                >
                  {props.description}
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Button
                    color="secondary"
                    sx={{
                      mt: 2,
                      width: "45%",
                      display:
                        isHovered && props.webURL !== "" ? "flex" : "none",
                    }}
                    variant="contained"
                    href={props.webURL}
                    target="_blank"
                  >
                    View Site
                  </Button>
                  {props.gitURL === "" ? (
                    <div></div>
                  ) : (
                    <Button
                      color="secondary"
                      sx={{
                        mt: 2,
                        width: "45%",
                        transition: "opacity 1s ease",
                        display:
                          isHovered && props.gitURL !== "" ? "flex" : "none",
                      }}
                      variant="contained"
                      href={props.gitURL}
                      target="_blank"
                    >
                      View Git
                    </Button>
                  )}
                </Box>
              </Box>
            </Grow>
            {/* </animated.div>
                    ))} */}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              transition: " transform 1s ease",
              opacity: isHovered ? 1 : 0.5,
              transform: isHovered
                ? "scale(0.6) translateX(500px)"
                : "scale(1) translateX(0)",
            }}
          >
            <img width="700px" src={props.img} alt={props.name} />
          </Box>
        </Box>
        <Divider
          sx={{
            position: "absolute",
            width: "45%",
            bottom: "36px",
            transform: props.linePosition,
            transition: "transform 330ms ease-in-out",
            color: "#C3073F",
            "&::before, &::after": {
              border: "1px solid #950740",
            },
          }}
        >
          {/* <KeyboardDoubleArrowDownIcon/> */}
          {props.id}/3
        </Divider>
        {/* <Divider
          className="page-nav"
          orientation="vertical"
          flexItem
          textAlign="left"
          sx={{
            position: "absolute",
            height: "100%",
            color: "#C3073F",
            "&::before, &::after": {
              border: "1px solid #950740",
            },
            left: '-41px',
          }}
        >
          <Button 
            variant="text" 
            sx={{
              color: props.id === '1' ? '#fff' :'#4E4E50',
              p: '6px 0'
            }}>
              1
          </Button>
          <Button 
            variant="text" 
            sx={{
              color: props.id === '2' ? '#fff' :'#4E4E50',
              p: '6px 0'
            }}>
              2
          </Button>
          <Button 
            variant="text" 
            sx={{
              color: props.id === '3' ? '#fff' :'#4E4E50',
              p: '6px 0'
            }}>
              3
          </Button>
        </Divider> */}
      </Container>
    </div>
  );
};

export default GridItem;
