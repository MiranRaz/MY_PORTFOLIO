import { useState } from "react";
import { Box } from "@mui/material";
import { NavButton } from "../style.ts";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => setIsVisible(false)}>
      <Box>
        <NavButton
          onClick={() => {
            setIsVisible(!isVisible);
          }}
          isVisible={isVisible} // Pass the isVisible state as a prop
          disableRipple
        >
          About
        </NavButton>
        {/*dropdown items*/}
        <Box
          style={{
            display: isVisible ? "grid" : "none",
            height: "auto",
            width: "111px",
            backgroundColor: "white",
            border: "2px solid black",
            position: "absolute",
            top: "35px",
            left: "87px",
            zIndex: "10",
          }}
        >
          <NavButton
            sx={{ zIndex: "2", width: "100%" }}
            onClick={() => {
              setIsVisible(false);
            }}
          >
            Education
          </NavButton>
          <NavButton
            sx={{ zIndex: "2", width: "100%" }}
            onClick={() => {
              setIsVisible(false);
            }}
          >
            Experience
          </NavButton>
        </Box>
      </Box>
    </ClickAwayListener>
  );
};

export default About;
