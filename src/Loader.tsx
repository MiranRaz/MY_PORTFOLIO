import { useEffect, useState } from "react";
import { StyledBackgroundGrid } from "./components/Desktop/style.ts";
import { Grid } from "@mui/material";
import logo_dark from "./assets/global/logo_dark.png";

const Loader = () => {
  const [width, setWidth] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (width >= 100) {
        clearInterval(interval);
      } else {
        setWidth((prevWidth) => prevWidth + 1);
      }
    }, 20); // Increase the interval for a 2-second duration

    return () => {
      clearInterval(interval);
    };
  }, [width]);

  return (
    <StyledBackgroundGrid>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Grid
          sx={{
            width: "500px",
            height: "400px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "2px solid black",
            justifyContent: "center",
          }}
        >
          <Grid
            sx={{
              width: "400px",
              height: "300px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid black",
              mt: "24px",
              backgroundColor: "#ddd",
            }}
          >
            <img
              src={logo_dark}
              alt={""}
              style={{
                width: "200px",
              }}
            />
          </Grid>
          <Grid
            sx={{
              width: "400px",
              height: "80px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "black",
            }}
          >
            Starting up ...
          </Grid>
          <Grid
            sx={{
              width: "400px",
              height: "22px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              pb: "24px",
              color: "black",
            }}
          >
            <div>
              <div style={{ width: "222px", backgroundColor: "#ddd" }}>
                <div
                  className="progress"
                  style={{
                    width: `${width}%`,
                    height: "30px",
                    backgroundColor: "gray",
                    textAlign: "center",
                    lineHeight: "30px",
                    color: "white",
                  }}
                >
                  {width}%
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </StyledBackgroundGrid>
  );
};

export default Loader;
