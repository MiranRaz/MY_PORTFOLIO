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
import { ProjectData } from "../../../../model/ProjectData.ts";
import AboutProject from "./AboutProject.tsx";

const projects: ProjectData[] = [
  {
    image: jcs,
    alt: "judo club sarajevo",
    title: "Judo Club Sarajevo",
    description: "This is a website made using Gatsby and GraphQL.",
    url: "https://judoclubsarajevo.com",
  },
  {
    image: nf,
    alt: "nas film",
    title: '"Nas Film" Production',
    url: "https://nasfilm.vercel.app",
  },
  {
    image: macbeth,
    alt: "macbeth",
    title: "Macbeth band",
    url: "https://macbeth-bay.vercel.app/",
  },
  {
    image: travel,
    alt: "travel",
    title: "Travel app",
    url: "https://asbloola.github.io/travel/",
  },
  {
    image: thebase,
    alt: "thebase",
    title: "The Base",
    url: "https://miranraz.github.io/theBase/",
  },
  { image: bmw, alt: "bmw", title: "BMW", url: "" },
  {
    image: bloola,
    alt: "bloola factory",
    title: "bloola Factory",
    url: "",
  },
  { image: bbk, alt: "bbk", title: "Deutsche Bundesbank", url: "" },
  {
    image: theme,
    alt: "theme",
    title: "Theme switch",
    url: "https://theme-switch-lime.vercel.app/",
  },
  {
    image: scrollable,
    alt: "scrollable",
    title: "Scrollable section",
    url: "https://react-gsap-scrollable-section.vercel.app/",
  },
  {
    image: scroll,
    alt: "scroll",
    title: "Custom scrollbar",
    url: "https://custom-scrollbar.vercel.app/",
  },
  {
    image: imagereveal,
    alt: "imagereveal",
    title: "Image reveal",
    url: "https://image-reveal-six.vercel.app/",
  },
  {
    image: ttt,
    alt: "tic tac toe",
    title: "Tic-Tac-Toe",
    url: "https://miranraz.github.io/TicTacToe-ReactJS/",
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
    if (project?.url) {
      setOpenModal(true);
      setProjectData(project);
    } else {
      alert("This project is private");
    }
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
