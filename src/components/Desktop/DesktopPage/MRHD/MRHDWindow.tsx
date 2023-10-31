import { Divider, Grid } from "@mui/material";
import {
  DesktopButton,
  WindowGrid,
  WindowGridCloseIcon,
  WindowGridHeader,
  WindowHeaderLines,
} from "../../style.ts";
import Draggable from "react-draggable";
import CloseIcon from "@mui/icons-material/Close";
import { Dispatch, SetStateAction } from "react";
import * as React from "react";
import folder from "../../../../assets/desktop/folder.png";

interface MRHDProps {
  displayMRWindow: boolean;
  setDisplayMRWindow: Dispatch<SetStateAction<boolean>>;
  displayMyProjectsWindow: boolean;
  setDisplayMyProjectsWindow: Dispatch<SetStateAction<boolean>>;
  displayAboutMeWindow: boolean;
  setDisplayAboutMeWindow: Dispatch<SetStateAction<boolean>>;
}
const MrhdWindow: React.FC<MRHDProps> = ({
  displayMRWindow,
  setDisplayMRWindow,
  displayMyProjectsWindow,
  setDisplayMyProjectsWindow,
  displayAboutMeWindow,
  setDisplayAboutMeWindow,
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
          <Grid sx={{ height: "300px", padding: "16px" }}>
            <DesktopButton
              disableRipple
              onDoubleClick={() => {
                setDisplayMyProjectsWindow(true);
              }}
              isActive={displayMyProjectsWindow}
              sx={{ marginRight: "24px" }}
            >
              <img
                src={folder}
                alt="folder icon"
                style={{
                  height: "55px",
                  paddingBottom: "8px",
                }}
              />
              <div
                style={{
                  backgroundColor: "white",
                  color: "black",
                  width: "88px",
                  fontSize: "12px",
                }}
              >
                My projects
              </div>
            </DesktopButton>
            <DesktopButton
              disableRipple
              onDoubleClick={() => {
                setDisplayAboutMeWindow(true);
              }}
              isActive={displayAboutMeWindow}
            >
              <img
                src={folder}
                alt="about me"
                style={{
                  height: "55px",
                  paddingBottom: "8px",
                }}
              />
              <div
                style={{
                  backgroundColor: "white",
                  color: "black",
                  width: "88px",
                  fontSize: "12px",
                }}
              >
                About me
              </div>
            </DesktopButton>
          </Grid>
        </WindowGrid>
      </Draggable>
    </>
  );
};

export default MrhdWindow;
