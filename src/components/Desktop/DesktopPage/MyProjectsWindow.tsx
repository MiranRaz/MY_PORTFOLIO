import { Divider, Grid } from "@mui/material";
import {
  WindowGrid,
  WindowGridCloseIcon,
  WindowGridHeader,
  WindowHeaderLines,
} from "../style.ts";
import Draggable from "react-draggable";
import CloseIcon from "@mui/icons-material/Close";
import { Dispatch, SetStateAction } from "react";
import * as React from "react";

interface MyProjectsProps {
  displayMyProjectsWindow: boolean;
  setDisplayMyProjectsWindow: Dispatch<SetStateAction<boolean>>;
}
const MyProjectsWindow: React.FC<MyProjectsProps> = ({
  displayMyProjectsWindow,
  setDisplayMyProjectsWindow,
}) => {
  return (
    <>
      <Draggable>
        <WindowGrid
          isVisible={displayMyProjectsWindow}
          sx={{ top: "52%", left: "33%" }}
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
                setDisplayMyProjectsWindow(false);
              }}
            >
              <CloseIcon sx={{ color: "white", fontSize: "13px" }} />
            </WindowGridCloseIcon>
            <Grid sx={{ width: "160px" }}>
              <WindowHeaderLines />
              <WindowHeaderLines />
              <WindowHeaderLines />
              <WindowHeaderLines />
              <WindowHeaderLines />
              <WindowHeaderLines />
            </Grid>
            <Grid>My Projects</Grid>
            <Grid sx={{ width: "199px" }}>
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

export default MyProjectsWindow;
