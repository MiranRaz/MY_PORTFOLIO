import { StyledBackgroundGrid } from "../style.ts";
import DesktopNavbar from "../DesktopNavbar.tsx";
import logo_dark from "../../../assets/global/logo_dark.png";

const DesktopPage = () => {
  return (
    <StyledBackgroundGrid container>
      <DesktopNavbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80%",
          width: "100vw",
        }}
      >
        <img
          src={logo_dark}
          alt="logo_dark"
          style={{
            maxWidth: "555px",
            opacity: "0.1",
          }}
        />
      </div>
    </StyledBackgroundGrid>
  );
};

export default DesktopPage;
