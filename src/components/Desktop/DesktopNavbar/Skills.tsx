import { useState } from "react";
import { Box, Divider } from "@mui/material";
import { NavButton } from "../style.ts";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => setIsVisible(false)}>
      <Box>
        <NavButton
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          Skills
        </NavButton>
        {/*dropdown items*/}
        <Box
          style={{
            display: isVisible ? "grid" : "none",
            height: "auto",
            width: "auto",
            backgroundColor: "white",
            border: "2px solid black",
            position: "absolute",
            top: "35px",
            left: "236px",
            zIndex: "10",
          }}
        >
          <Divider sx={{ fontSize: "12px", paddingTop: "8px" }}>
            Front-end
          </Divider>
          <NavButton
            sx={{ zIndex: "2", width: "100%" }}
            onClick={() => {
              setIsVisible(false);
            }}
          >
            HTML & CSS
          </NavButton>
          <NavButton
            sx={{ zIndex: "2", width: "100%" }}
            onClick={() => {
              setIsVisible(false);
            }}
          >
            React
          </NavButton>
          <NavButton
            sx={{ zIndex: "2", width: "100%" }}
            onClick={() => {
              setIsVisible(false);
            }}
          >
            Next.js
          </NavButton>
          <NavButton
            sx={{ zIndex: "2", width: "100%" }}
            onClick={() => {
              setIsVisible(false);
            }}
          >
            Gatsby
          </NavButton>
          <NavButton
            sx={{ zIndex: "2", width: "100%" }}
            onClick={() => {
              setIsVisible(false);
            }}
          >
            Material-UI
          </NavButton>
          <Divider sx={{ fontSize: "12px", paddingTop: "8px" }}>
            Back-end
          </Divider>
          <NavButton
            sx={{ zIndex: "2", width: "100%" }}
            onClick={() => {
              setIsVisible(false);
            }}
          >
            .NET
          </NavButton>
          <Divider sx={{ fontSize: "12px", paddingTop: "8px" }}>
            Databases
          </Divider>
          <NavButton
            sx={{ zIndex: "2", width: "100%" }}
            onClick={() => {
              setIsVisible(false);
            }}
          >
            MSSQL
          </NavButton>
          <NavButton
            sx={{ zIndex: "2", width: "100%" }}
            onClick={() => {
              setIsVisible(false);
            }}
          >
            Docker
          </NavButton>
          <Divider sx={{ fontSize: "12px", paddingTop: "8px" }}>Other</Divider>
          <NavButton
            sx={{ zIndex: "2", width: "100%" }}
            onClick={() => {
              setIsVisible(false);
            }}
          >
            GIT
          </NavButton>
          <NavButton
            sx={{ zIndex: "2", width: "100%" }}
            onClick={() => {
              setIsVisible(false);
            }}
          >
            Photoshop
          </NavButton>
        </Box>
      </Box>
    </ClickAwayListener>
  );
};

export default Skills;