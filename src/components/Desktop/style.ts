import styled from "styled-components";
import { Grid, Button } from "@mui/material";
import bckg from "../../assets/desktop/bckg.png";

const StyledBackgroundGrid = styled(Grid)`
  background-image: url(${bckg});
  background-size: cover;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  position: relative;
`;

const ImageDesktopGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 1;
`;

const DesktopButtonContainer = styled(Grid)`
  display: flex;
  flex-direction: column !important;
  justify-content: space-between;
  align-items: flex-end;
  z-index: 2;
  height: 80vh;
  padding-right: 48px;
`;

// nav buttons with props that you send
type ButtonProps = {
  isVisible: boolean;
};
const NavButton = styled(Button)<ButtonProps>`
  color: ${(props) =>
    props.isVisible ? "white !important" : "black !important"};
  background-color: ${(props) =>
    props.isVisible ? "black !important" : "white"};
  overflow: hidden;
  border-radius: 0 !important;
  height: 37px;
  z-index: 2;
  text-transform: none !important;
  justify-content: flex-start !important;

  &:hover {
    background-color: ${(props) =>
      props.isVisible ? "white !important" : "black !important"};
    color: ${(props) =>
      props.isVisible ? "black !important" : "white !important"};
  }
`;

const DesktopButton = styled(Button)`
  background-color: white;
  border-radius: 0 !important;
  z-index: 2;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 99px;
  text-transform: none !important;

  &:hover {
    background-color: white !important;
  }
`;

export {
  DesktopButtonContainer,
  StyledBackgroundGrid,
  ImageDesktopGrid,
  NavButton,
  DesktopButton,
};
