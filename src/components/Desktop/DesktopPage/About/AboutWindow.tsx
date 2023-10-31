import { Divider, Grid } from "@mui/material";
import {
  WindowGrid,
  WindowGridCloseIcon,
  WindowGridHeader,
  WindowHeaderLines,
} from "../../style.ts";
import Draggable from "react-draggable";
import CloseIcon from "@mui/icons-material/Close";
import { Dispatch, SetStateAction } from "react";
import * as React from "react";

interface AboutProps {
  displayAboutMeWindow: boolean;
  setDisplayAboutMeWindow: Dispatch<SetStateAction<boolean>>;
}
const AboutWindow: React.FC<AboutProps> = ({
  displayAboutMeWindow,
  setDisplayAboutMeWindow,
}) => {
  return (
    <>
      <Draggable>
        <WindowGrid
          isVisible={displayAboutMeWindow}
          sx={{ top: "19%", left: "19%" }}
        >
          <WindowGridHeader>
            <Grid sx={{ width: "13px" }}>
              <WindowHeaderLines />
              <WindowHeaderLines />
              <WindowHeaderLines />
              <WindowHeaderLines />
              <WindowHeaderLines />
              <WindowHeaderLines />
            </Grid>
            <WindowGridCloseIcon
              onClick={() => {
                setDisplayAboutMeWindow(false);
              }}
            >
              <CloseIcon sx={{ color: "white", fontSize: "13px" }} />
            </WindowGridCloseIcon>
            <Grid sx={{ width: "172px" }}>
              <WindowHeaderLines />
              <WindowHeaderLines />
              <WindowHeaderLines />
              <WindowHeaderLines />
              <WindowHeaderLines />
              <WindowHeaderLines />
            </Grid>
            <Grid>About me</Grid>
            <Grid sx={{ width: "211px" }}>
              <WindowHeaderLines />
              <WindowHeaderLines />
              <WindowHeaderLines />
              <WindowHeaderLines />
              <WindowHeaderLines />
              <WindowHeaderLines />
            </Grid>
          </WindowGridHeader>
          <Divider
            sx={{
              height: "1px",
              backgroundColor: "black",
            }}
          />
          <Grid sx={{ height: "300px" }}>asd</Grid>
        </WindowGrid>
      </Draggable>
    </>
  );
};

export default AboutWindow;
