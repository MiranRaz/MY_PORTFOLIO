import styled from "styled-components";
import { Grid, Button, Divider, keyframes } from "@mui/material";
import bckg from "../../assets/desktop/bckg.png";

// props that you send
type ButtonProps = {
  isVisible: boolean;
};
type ActiveButtonProps = {
  isActive: boolean;
};
type DisplayWindowGridProps = {
  isVisible: boolean;
};
type LoaderProps = {
  isLoading: boolean;
};

// loader
const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
const LoaderGrid = styled(Grid)<LoaderProps>`
  background-image: url(${bckg});
  background-size: cover;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  opacity: ${({ isLoading }) => (isLoading ? 1 : 0)};
  transition: opacity 1s;
  animation: ${({ isLoading }) => (isLoading ? "none" : `${fadeOut} 1s`)};
`;

// navbar
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

// desktop
const StyledBackgroundGrid = styled(Grid)`
  background-image: url(${bckg});
  background-size: cover;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  position: relative;
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
const DesktopButton = styled(Button)<ActiveButtonProps>`
  background-color: ${(props) =>
    props.isActive ? "white !important" : "transparent !important"};
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
const ImageDesktopGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 1;
`;

// desktop window
const WindowGrid = styled(Grid)<DisplayWindowGridProps>`
  display: ${(props) =>
    props.isVisible ? "grid !important" : "none !important"};
  background-color: white;
  width: 505px;
  position: absolute;
  top: 20%;
  left: 30%;
  z-index: 22;
  border: 2px solid black;
`;
const WindowGridHeader = styled(Grid)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  height: 33px;
`;
const WindowGridCloseIcon = styled(Grid)`
  background-color: white;
  width: 17px;
  height: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: red !important;
  }
`;
const WindowHeaderLines = styled(Divider)`
  border-bottom-width: 2px !important;
  background-color: black !important;
  margin: 1px !important;
`;

export {
  LoaderGrid,
  DesktopButtonContainer,
  StyledBackgroundGrid,
  ImageDesktopGrid,
  NavButton,
  DesktopButton,
  WindowHeaderLines,
  WindowGrid,
  WindowGridHeader,
  WindowGridCloseIcon,
};
