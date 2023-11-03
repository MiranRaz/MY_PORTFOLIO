import { useState } from "react";
import { Box } from "@mui/material";
import { NavButton } from "../style.ts";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

const Contact = () => {
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
          Contact
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
            left: "300px",
            zIndex: "10",
          }}
        >
          <NavButton
            sx={{ zIndex: "2", width: "100%" }}
            onClick={() => {
              setIsVisible(false);
              window.open(
                "https://www.linkedin.com/in/miran-raznatovic/",
                "_blank",
              );
            }}
          >
            LinkedIn
          </NavButton>
          <NavButton
            sx={{ zIndex: "2", width: "100%" }}
            onClick={() => {
              setIsVisible(false);
              window.location.href = `mailto:miranraznatovic@gmail.com`;
            }}
          >
            E-mail
          </NavButton>
          <NavButton
            sx={{ zIndex: "2", width: "100%" }}
            onClick={() => {
              setIsVisible(false);
              window.open("https://github.com/MiranRaz", "_blank");
            }}
          >
            Github
          </NavButton>
        </Box>
      </Box>
    </ClickAwayListener>
  );
};

export default Contact;
