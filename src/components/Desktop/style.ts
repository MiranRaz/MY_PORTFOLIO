import styled from "styled-components";
import { Grid, Button } from "@mui/material";
import bckg from "../../assets/desktop/bckg.png";

const StyledBackgroundGrid = styled(Grid)`
  background-image: url(${bckg});
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

const NavButton = styled(Button)`
  color: black !important;
  background-color: white;
  overflow: hidden;
  border-radius: 0 !important;

  &:hover {
    background-color: black !important;
    color: white !important;
  }
`;
export { StyledBackgroundGrid, NavButton };
