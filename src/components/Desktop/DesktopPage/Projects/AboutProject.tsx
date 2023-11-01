import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { Dispatch, SetStateAction } from "react";
import { Button, Grid } from "@mui/material";
import { ProjectData } from "../../../../model/ProjectData.ts";

export interface AboutProjectProps {
  open: boolean;
  data?: ProjectData;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const AboutProject: React.FC<AboutProjectProps> = ({ open, data, setOpen }) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)} // Add this onClose prop
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "700px", // Set your width here
            border: "2px solid black",
          },
        },
      }}
    >
      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingTop: "16px",
          paddingRight: "16px",
        }}
      >
        <img
          src={data?.alertImage}
          alt=""
          style={{ width: "55px", paddingLeft: "16px", paddingTop: "16px" }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            paddingLeft: "16px",
          }}
        >
          {data?.description}
        </div>
      </Grid>
      <Grid
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          padding: "0px 4px 4px 0px",
        }}
      >
        <Button
          disableRipple
          onClick={() => {
            window.open(data?.url, "_blank");
            setOpen(false);
          }}
          sx={{
            border: "2px solid black",
            color: "black",
            borderRadius: "33px",
          }}
          disabled={data?.type === "Private"}
        >
          Proceed
        </Button>
      </Grid>
    </Dialog>
  );
};

export default AboutProject;
