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
import React, { Dispatch, SetStateAction } from "react";
import { useState } from "react";

import jcs from "../../../../assets/global/jcs.png";
import nf from "../../../../assets/global/nf.png";
import macbeth from "../../../../assets/global/macbeth.png";
import travel from "../../../../assets/global/travel.png";
import thebase from "../../../../assets/global/thebase.png";
import bmw from "../../../../assets/global/bmw.png";
import bloola from "../../../../assets/global/bloola.png";
import bbk from "../../../../assets/global/bbk.jpg";
import theme from "../../../../assets/global/theme.png";
import scrollable from "../../../../assets/global/scrollable.png";
import scroll from "../../../../assets/global/scroll.png";
import imagereveal from "../../../../assets/global/imagereveal.png";
import ttt from "../../../../assets/global/ttt.png";
import alert from "../../../../assets/desktop/alert.jpg";
import bomb from "../../../../assets/desktop/bomb.jpg";

import { ProjectData } from "../../../../model/ProjectData.ts";
import AboutProject from "./AboutProject.tsx";

const projects: ProjectData[] = [
  {
    image: jcs,
    alt: "judo club sarajevo",
    title: "Judo Club Sarajevo",
    description: "This is a website made using Gatsby and GraphQL.",
    url: "https://judoclubsarajevo.com",
    alertImage: alert,
  },
  {
    image: nf,
    alt: "nas film",
    title: '"Nas Film" Production',
    description:
      "This is a website made using Next 13 and GSAP. The idea was to make a infinite scroll app with a lot of interesting and creative animations.",
    url: "https://nasfilm.vercel.app",
    alertImage: alert,
  },
  {
    image: macbeth,
    alt: "macbeth",
    title: "Macbeth band",
    description: "This is a website made using React JS.",
    url: "https://macbeth-bay.vercel.app/",
    alertImage: alert,
  },
  {
    image: travel,
    alt: "travel",
    title: "Travel app",
    description: "This is a website made using React JS.",
    url: "https://asbloola.github.io/travel/",
    alertImage: alert,
  },
  {
    image: thebase,
    alt: "thebase",
    title: "The Base",
    description: "This is a website made using React JS.",
    url: "https://miranraz.github.io/theBase/",
    alertImage: alert,
  },
  {
    image: bmw,
    alt: "bmw",
    title: "BMW",
    description:
      "Sorry... Due to the items in my contract, BMW projects are not available for public!",
    url: "",
    alertImage: bomb,
  },
  {
    image: bloola,
    alt: "bloola factory",
    title: "bloola Factory",
    description:
      "Sorry... Due to the items in my contract, bloola Factory projects are not available for public!",
    url: "",
    alertImage: bomb,
  },
  {
    image: bbk,
    alt: "bbk",
    title: "Deutsche Bundesbank",
    description:
      "Sorry... Due to the items in my contract, Deutsche Bundesbank projects are not available for public!",
    url: "",
    alertImage: bomb,
  },
  {
    image: theme,
    alt: "theme",
    title: "Theme switch",
    description:
      "This is a website made to deploy to NPM to be used as a library",
    url: "https://theme-switch-lime.vercel.app/",
    alertImage: alert,
  },
  {
    image: scrollable,
    alt: "scrollable",
    title: "Scrollable section",
    description:
      "This is a website made to deploy to NPM to be used as a library",
    url: "https://react-gsap-scrollable-section.vercel.app/",
    alertImage: alert,
  },
  {
    image: scroll,
    alt: "scroll",
    title: "Custom scrollbar",
    description:
      "This is a website made to deploy to NPM to be used as a library",
    url: "https://custom-scrollbar.vercel.app/",
    alertImage: alert,
  },
  {
    image: imagereveal,
    alt: "imagereveal",
    title: "Image reveal",
    description:
      "This is a website made to deploy to NPM to be used as a library",
    url: "https://image-reveal-six.vercel.app/",
    alertImage: alert,
  },
  {
    image: ttt,
    alt: "tic tac toe",
    title: "Tic-Tac-Toe",
    description: "This was my first `real` app made using React JS",
    url: "https://miranraz.github.io/TicTacToe-ReactJS/",
    alertImage: alert,
  },
];

interface MyProjectsProps {
  displayMyProjectsWindow: boolean;
  setDisplayMyProjectsWindow: Dispatch<SetStateAction<boolean>>;
}

const MyProjectsWindow: React.FC<MyProjectsProps> = ({
  displayMyProjectsWindow,
  setDisplayMyProjectsWindow,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [projectData, setProjectData] = useState<ProjectData>();

  const handleProjectClick = (project: ProjectData) => {
    setOpenModal(true);
    setProjectData(project);
  };

  return (
    <>
      <AboutProject
        open={openModal}
        data={projectData}
        setOpen={setOpenModal}
      />
      <Draggable>
        <WindowGrid
          isVisible={displayMyProjectsWindow}
          sx={{ top: "33%", left: "33%" }}
        >
          <WindowGridHeader>
            <Grid sx={{ width: "13px" }}>
              {[...Array(6)].map((_, index) => (
                <WindowHeaderLines key={index} />
              ))}
            </Grid>
            <WindowGridCloseIcon
              onClick={() => {
                setDisplayMyProjectsWindow(false);
              }}
            >
              <CloseIcon sx={{ color: "white", fontSize: "13px" }} />
            </WindowGridCloseIcon>
            <Grid sx={{ width: "160px" }}>
              {[...Array(6)].map((_, index) => (
                <WindowHeaderLines key={index} />
              ))}
            </Grid>
            <Grid>My Projects</Grid>
            <Grid sx={{ width: "199px" }}>
              {[...Array(6)].map((_, index) => (
                <WindowHeaderLines key={index} />
              ))}
            </Grid>
          </WindowGridHeader>
          <Divider
            sx={{
              height: "1px",
              backgroundColor: "black",
            }}
          />
          <Grid sx={{ height: "300px", overflow: "scroll", padding: "16px" }}>
            {projects.map((project, index) => (
              <DesktopButton
                key={index}
                disableRipple
                onDoubleClick={() => handleProjectClick(project)}
                isActive={displayMyProjectsWindow}
                sx={{ marginRight: (index + 1) % 4 === 0 ? "0" : "24px" }}
              >
                <img
                  src={project.image}
                  alt={project.alt}
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
                  {project.title}
                </div>
              </DesktopButton>
            ))}
          </Grid>
        </WindowGrid>
      </Draggable>
    </>
  );
};

export default MyProjectsWindow;
