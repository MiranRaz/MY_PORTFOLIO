import { useState } from "react";
import { Box } from "@mui/material";
import { NavButton } from "../style.ts";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => setIsVisible(false)}>
      <Box>
        <NavButton
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          Projects
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
            left: "151px",
            zIndex: "10",
          }}
        >
          <NavButton
            sx={{ zIndex: "2", width: "100%" }}
            onClick={() => {
              setIsVisible(false);
            }}
          >
            Judo club Sarajevo
          </NavButton>
          <NavButton
            sx={{ zIndex: "2", width: "100%" }}
            onClick={() => {
              setIsVisible(false);
            }}
          >
            "Nas Film" Production
          </NavButton>
          <NavButton
            sx={{ zIndex: "2", width: "100%" }}
            onClick={() => {
              setIsVisible(false);
            }}
          >
            Macbeth band
          </NavButton>
          <NavButton
            sx={{ zIndex: "2", width: "100%" }}
            onClick={() => {
              setIsVisible(false);
            }}
          >
            Travel App
          </NavButton>
          <NavButton
            sx={{ zIndex: "2", width: "100%" }}
            onClick={() => {
              setIsVisible(false);
            }}
          >
            The Base
          </NavButton>
          <NavButton
            sx={{ zIndex: "2", width: "100%" }}
            onClick={() => {
              setIsVisible(false);
            }}
          >
            BMW
          </NavButton>
          <NavButton
            sx={{ zIndex: "2", width: "100%" }}
            onClick={() => {
              setIsVisible(false);
            }}
          >
            bloola Factory
          </NavButton>
        </Box>
      </Box>
    </ClickAwayListener>
  );
};

export default Projects;
