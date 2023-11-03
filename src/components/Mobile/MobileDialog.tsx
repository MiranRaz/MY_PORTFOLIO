import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { Dispatch, SetStateAction } from "react";
import { DialogContent, DialogContentText, DialogTitle } from "@mui/material";

export interface MobileDialogProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileDialog: React.FC<MobileDialogProps> = ({ open, setOpen }) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(true)} // Add this onClose prop
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            border: "2px solid white",
            backgroundColor: "rgba(14, 25, 67, 0.7)",
            color: "white",
          },
        },
      }}
    >
      <DialogTitle sx={{ fontSize: "20px" }}>
        This site is unavailable
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          sx={{
            fontSize: "12px",
            color: "white",
          }}
        >
          The mobile portfolio is currently being made. Please check out the
          portfolio website on the desktop site!
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default MobileDialog;
