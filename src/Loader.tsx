import { StyledBackgroundGrid } from "./components/Desktop/style.ts";
import { Grid } from "@mui/material";

const Loader = () => {
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
          sx={{ width: "500px", height: "400px", backgroundColor: "white" }}
        >
          loader
        </Grid>
      </Grid>
    </StyledBackgroundGrid>
  );
};

export default Loader;
