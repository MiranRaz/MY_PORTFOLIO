import { useEffect, useState } from "react";
// mui
import { AppBar, Box, Toolbar } from "@mui/material";
// style
import { NavButton } from "./style.ts";
//assets
import logo_dark from "../../assets/global/logo_dark.png";
import logo_light from "../../assets/global/logo_light.png";
import info from "../../assets/desktop/info.png";
import mac from "../../assets/desktop/mac.png";

const DesktopNavbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const [currentTime, setCurrentTime] = useState("");
  useEffect(() => {
    // Function to update the current time with AM/PM
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const amPm = hours >= 12 ? "PM" : "AM";
      const hours12 = hours % 12 || 12;
      const formattedTime = `${hours12}:${String(minutes).padStart(
        2,
        "0",
      )} ${amPm}`;
      setCurrentTime(formattedTime);
    };

    // Update the time immediately
    updateTime();

    // Set up a timer to update the time every second (1000 milliseconds)
    const timer = setInterval(updateTime, 1000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          height: "39px",
          display: "flex",
          backgroundColor: "white",
          color: "black",
          border: "1.5px solid black",
        }}
      >
        <Toolbar
          variant="dense"
          sx={{
            minHeight: "33px",
            display: "flex",
            justifyContent: "space-between", // Add this line to move content to the left and add space between buttons
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <NavButton onMouseEnter={handleHover} onMouseLeave={handleHover}>
              <img
                src={isHovered ? logo_light : logo_dark}
                alt=""
                style={{ maxHeight: "40px", maxWidth: "25px" }}
              />
            </NavButton>
            <NavButton>About</NavButton>
            <NavButton>Projects</NavButton>
            <NavButton>Skills</NavButton>
            <NavButton>Contact</NavButton>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <NavButton>{currentTime}</NavButton>
            <NavButton>
              <img
                src={info}
                alt=""
                style={{ maxHeight: "40px", maxWidth: "25px" }}
              />
            </NavButton>
            <NavButton>
              <img
                src={mac}
                alt=""
                style={{ maxHeight: "40px", maxWidth: "25px" }}
              />
            </NavButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default DesktopNavbar;
