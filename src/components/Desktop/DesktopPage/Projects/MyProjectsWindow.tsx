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

import { ProjectData } from "../../../../model/ProjectData.ts";
import AboutProject from "./AboutProject.tsx";
import projects from "../../../../data/projectData.ts";

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
