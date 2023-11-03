import { Grid } from "@mui/material";
import bckgMobile from "../../../assets/mobile/bckgMobile.png";
import logo_light from "../../../assets/global/logo_light.png";
import { useEffect, useState } from "react";
import Battery6BarIcon from "@mui/icons-material/Battery6Bar";

const MobilePage = () => {
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
    <Grid
      sx={{
        height: "100vh",
        color: "white",
      }}
    >
      <Grid
        sx={{
          height: "5%",
          width: "100vw",
          backgroundColor: "black",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Grid>
          <img
            src={logo_light}
            alt={"logo"}
            style={{ height: "22px", paddingLeft: "24px" }}
          />
        </Grid>
        <Grid>{currentTime}</Grid>
        <Grid style={{ height: "25px", paddingRight: "24px" }}>
          <Battery6BarIcon
            sx={{ transform: "rotate(90deg)", fontSize: "25px" }}
          />
        </Grid>
      </Grid>
      <Grid
        sx={{
          height: "82%",
          backgroundColor: "black",
        }}
      >
        asd1
      </Grid>
      <Grid
        sx={{
          height: "13%",
          backgroundImage: `url(${bckgMobile})`,
          backgroundColor: "black",
          backgroundSize: "113%", // Zoom in more
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom", // Zoom from the bottom
        }}
      ></Grid>
    </Grid>
  );
};

export default MobilePage;
