import {
  StyledBackgroundGrid,
  ImageDesktopGrid,
  DesktopButton,
  DesktopButtonContainer,
} from "../style.ts";
// assets
import DesktopNavbar from "../DesktopNavbar/DesktopNavbar.tsx";
import logo_dark from "../../../assets/global/logo_dark.png";
import folder from "../../../assets/desktop/folder.png";
import MCHD from "../../../assets/desktop/MCHD.png";
import trash from "../../../assets/desktop/trash.png";
import MrhdWindow from "./MRHDWindow.tsx";
import { useState } from "react";
import MyProjectsWindow from "./MyProjectsWindow.tsx";
import AboutWindow from "./AboutWindow.tsx"; // Import the Draggable component

const DesktopPage = () => {
  const [displayMRWindow, setDisplayMRWindow] = useState(false);
  const [displayMyProjectsWindow, setDisplayMyProjectsWindow] = useState(false);
  const [displayAboutMeWindow, setDisplayAboutMeWindow] = useState(false);

  return (
    <StyledBackgroundGrid container>
      <DesktopNavbar />
      <MrhdWindow
        displayMRWindow={displayMRWindow}
        setDisplayMRWindow={setDisplayMRWindow}
      />
      <MyProjectsWindow
        displayMyProjectsWindow={displayMyProjectsWindow}
        setDisplayMyProjectsWindow={setDisplayMyProjectsWindow}
      />
      <AboutWindow
        displayAboutMeWindow={displayAboutMeWindow}
        setDisplayAboutMeWindow={setDisplayAboutMeWindow}
      />
      <ImageDesktopGrid>
        <img
          src={logo_dark}
          alt="logo_dark"
          style={{
            maxWidth: "555px",
            opacity: "0.1",
          }}
        />
      </ImageDesktopGrid>
      <DesktopButtonContainer container>
        <DesktopButton
          disableRipple
          onDoubleClick={() => {
            setDisplayMRWindow(true);
          }}
          isActive={displayMRWindow}
        >
          <img
            src={MCHD}
            alt="hard disk"
            style={{
              height: "66px",
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
            MR HD
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
            src={folder}
            alt="folder icon"
            style={{
              height: "66px",
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
              height: "66px",
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
            About me
          </div>
        </DesktopButton>
        <DesktopButton sx={{ paddingRight: "8px" }} disableRipple>
          <img
            src={trash}
            alt="trash icon"
            style={{ height: "66px", paddingBottom: "8px" }}
          />
          <div
            style={{
              backgroundColor: "white",
              color: "black",
              width: "99px",
              fontSize: "12px",
            }}
          >
            Trash
          </div>
        </DesktopButton>
      </DesktopButtonContainer>
    </StyledBackgroundGrid>
  );
};

export default DesktopPage;
