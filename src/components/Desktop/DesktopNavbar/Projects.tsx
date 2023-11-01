import { useState } from "react";
import { Box, Divider } from "@mui/material";
import { NavButton } from "../style.ts";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import projects from "../../../data/projectData.ts";
import { ProjectData } from "../../../model/ProjectData.ts";
import AboutProject from "../DesktopPage/Projects/AboutProject.tsx";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [projectData, setProjectData] = useState<ProjectData>();

  const handleProjectClick = (project: ProjectData) => {
    setOpenModal(true);
    setProjectData(project);
  };

  const renderProjectType = (type: string) => {
    return projects
      .filter((project) => project?.type === type)
      .map((project, index) => (
        <NavButton
          key={index}
          sx={{ zIndex: "2", width: "100%" }}
          onClick={() => {
            setIsVisible(false);
            handleProjectClick(project);
          }}
        >
          {project?.title}
        </NavButton>
      ));
  };

  return (
    <ClickAwayListener onClickAway={() => setIsVisible(false)}>
      <Box>
        <AboutProject
          open={openModal}
          data={projectData}
          setOpen={setOpenModal}
        />
        <NavButton
          disableRipple
          onClick={() => {
            setIsVisible(!isVisible);
          }}
          isVisible={isVisible} // Pass the isVisible state as a prop
        >
          Projects
        </NavButton>
        {/*dropdown items*/}
        <Box
          style={{
            display: isVisible ? "grid" : "none",
            height: "auto",
            width: "auto",
            backgroundColor: "white",
            border: "2px solid black",
            position: "absolute",
            top: "35px",
            left: "151px",
            zIndex: "10",
          }}
        >
          {/*  Deployed projects */}
          <Divider sx={{ fontSize: "12px", paddingTop: "8px" }}>
            Deployed
          </Divider>
          {renderProjectType("Deployed")}
          {/*  Private projects */}
          <Divider sx={{ fontSize: "12px", paddingTop: "8px" }}>
            Private
          </Divider>
          {renderProjectType("Private")}
          {/*  NPM projects */}
          <Divider sx={{ fontSize: "12px", paddingTop: "8px" }}>
            NPM projects
          </Divider>
          {renderProjectType("NPM projects")}
          {/*  Games */}
          <Divider sx={{ fontSize: "12px", paddingTop: "8px" }}>Games</Divider>
          {renderProjectType("Games")}
        </Box>
      </Box>
    </ClickAwayListener>
  );
};

export default Projects;
