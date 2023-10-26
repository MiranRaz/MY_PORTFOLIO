import {
  StyledBackgroundGrid,
  ImageDesktopGrid,
  DesktopButton,
  DesktopButtonContainer,
} from "../style.ts";
// assets
import DesktopNavbar from "../DesktopNavbar.tsx";
import logo_dark from "../../../assets/global/logo_dark.png";
import folder from "../../../assets/desktop/folder.png";
import MCHD from "../../../assets/desktop/MCHD.png";
import trash from "../../../assets/desktop/trash.png";

const DesktopPage = () => {
  return (
    <StyledBackgroundGrid container>
      <DesktopNavbar />
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
        <DesktopButton>
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
        <DesktopButton>
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
        <DesktopButton>
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
        <DesktopButton sx={{ paddingRight: "8px" }}>
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
