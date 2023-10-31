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
import jcs from "../../../../assets/global/jcs.png";
import nf from "../../../../assets/global/nf.png";
import macbeth from "../../../../assets/global/macbeth.png";
import travel from "../../../../assets/global/travel.png";
import bmw from "../../../../assets/global/bmw.png";
import bloola from "../../../../assets/global/bloola.png";
import bbk from "../../../../assets/global/bbk.jpg";
import theme from "../../../../assets/global/theme.png";
import language from "../../../../assets/global/language.png";

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
          <Grid sx={{ height: "auto", padding: "16px" }}>
            <DesktopButton
              disableRipple
              onDoubleClick={() => {
                setDisplayMyProjectsWindow(true);
              }}
              isActive={displayMyProjectsWindow}
              sx={{ marginRight: "24px" }}
            >
              <img
                src={jcs}
                alt="judo club sarajevo"
                style={{
                  height: "44px",
                  paddingBottom: "8px",
                }}
              />
              <div
                style={{
                  backgroundColor: "white",
                  color: "black",
                  width: "99px",
                  fontSize: "12px",
                }}
              >
                Judo Club Sarajevo
              </div>
            </DesktopButton>
            <DesktopButton
              disableRipple
              onDoubleClick={() => {
                setDisplayMyProjectsWindow(true);
              }}
              isActive={displayMyProjectsWindow}
              sx={{ marginRight: "24px" }}
            >
              <img
                src={nf}
                alt="nas film"
                style={{
                  height: "44px",
                  paddingBottom: "8px",
                }}
              />
              <div
                style={{
                  backgroundColor: "white",
                  color: "black",
                  width: "99px",
                  fontSize: "12px",
                }}
              >
                "Nas Film" Production
              </div>
            </DesktopButton>
            <DesktopButton
              disableRipple
              onDoubleClick={() => {
                setDisplayMyProjectsWindow(true);
              }}
              isActive={displayMyProjectsWindow}
              sx={{ marginRight: "24px" }}
            >
              <img
                src={macbeth}
                alt="macbeth"
                style={{
                  height: "44px",
                  paddingBottom: "8px",
                }}
              />
              <div
                style={{
                  backgroundColor: "white",
                  color: "black",
                  width: "99px",
                  fontSize: "12px",
                }}
              >
                Macbeth band
              </div>
            </DesktopButton>
            <DesktopButton
              disableRipple
              onDoubleClick={() => {
                setDisplayMyProjectsWindow(true);
              }}
              isActive={displayMyProjectsWindow}
            >
              <img
                src={travel}
                alt="travel"
                style={{
                  height: "44px",
                  width: "66px",
                  paddingBottom: "8px",
                }}
              />
              <div
                style={{
                  backgroundColor: "white",
                  color: "black",
                  width: "99px",
                  fontSize: "12px",
                }}
              >
                Travel app
              </div>
            </DesktopButton>
            <DesktopButton
              disableRipple
              onDoubleClick={() => {
                setDisplayMyProjectsWindow(true);
              }}
              isActive={displayMyProjectsWindow}
              sx={{ marginRight: "24px" }}
            >
              <img
                src={bmw}
                alt="bmw"
                style={{
                  height: "44px",
                  paddingBottom: "8px",
                }}
              />
              <div
                style={{
                  backgroundColor: "white",
                  color: "black",
                  width: "99px",
                  fontSize: "12px",
                }}
              >
                BMW
              </div>
            </DesktopButton>
            <DesktopButton
              disableRipple
              onDoubleClick={() => {
                setDisplayMyProjectsWindow(true);
              }}
              isActive={displayMyProjectsWindow}
              sx={{ marginRight: "24px" }}
            >
              <img
                src={bloola}
                alt="bloola factory"
                style={{
                  height: "44px",
                  paddingBottom: "8px",
                }}
              />
              <div
                style={{
                  backgroundColor: "white",
                  color: "black",
                  width: "99px",
                  fontSize: "12px",
                }}
              >
                bloola Factory
              </div>
            </DesktopButton>
            <DesktopButton
              disableRipple
              onDoubleClick={() => {
                setDisplayMyProjectsWindow(true);
              }}
              isActive={displayMyProjectsWindow}
              sx={{ marginRight: "24px" }}
            >
              <img
                src={bbk}
                alt="bbk"
                style={{
                  height: "44px",
                  paddingBottom: "8px",
                }}
              />
              <div
                style={{
                  backgroundColor: "white",
                  color: "black",
                  width: "99px",
                  fontSize: "12px",
                }}
              >
                Deutsche Bundesbank
              </div>
            </DesktopButton>
            <DesktopButton
              disableRipple
              onDoubleClick={() => {
                setDisplayMyProjectsWindow(true);
              }}
              isActive={displayMyProjectsWindow}
            >
              <img
                src={theme}
                alt="theme"
                style={{
                  height: "44px",
                  paddingBottom: "8px",
                }}
              />
              <div
                style={{
                  backgroundColor: "white",
                  color: "black",
                  width: "99px",
                  fontSize: "12px",
                }}
              >
                Theme switch
              </div>
            </DesktopButton>
            <DesktopButton
              disableRipple
              onDoubleClick={() => {
                setDisplayMyProjectsWindow(true);
              }}
              isActive={displayMyProjectsWindow}
              sx={{ marginRight: "24px" }}
            >
              <img
                src={language}
                alt="language"
                style={{
                  height: "44px",
                  paddingBottom: "8px",
                }}
              />
              <div
                style={{
                  backgroundColor: "white",
                  color: "black",
                  width: "99px",
                  fontSize: "12px",
                }}
              >
                Language switch
              </div>
            </DesktopButton>
          </Grid>
        </WindowGrid>
      </Draggable>
    </>
  );
};

export default MyProjectsWindow;
