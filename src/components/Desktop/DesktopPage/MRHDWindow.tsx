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

interface MRHDProps {
  displayMRWindow: boolean;
  setDisplayMRWindow: Dispatch<SetStateAction<boolean>>;
}
const MrhdWindow: React.FC<MRHDProps> = ({
  displayMRWindow,
  setDisplayMRWindow,
}) => {
  return (
    <>
      <Draggable>
        <WindowGrid
          isVisible={displayMRWindow}
          sx={{ top: "12%", left: "53%" }}
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
                setDisplayMRWindow(false);
              }}
            >
              <CloseIcon sx={{ color: "white", fontSize: "13px" }} />
            </WindowGridCloseIcon>
            <Grid sx={{ width: "190px" }}>
              <WindowHeaderLines />
              <WindowHeaderLines />
              <WindowHeaderLines />
              <WindowHeaderLines />
              <WindowHeaderLines />
              <WindowHeaderLines />
            </Grid>
            <Grid>MR HD</Grid>
            <Grid sx={{ width: "222px" }}>
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

export default MrhdWindow;
