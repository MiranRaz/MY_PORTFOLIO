import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import {
  Button,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from '@mui/material';

export interface MobileDialogProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileDialog: React.FC<MobileDialogProps> = ({ open, setOpen }) => {
  const [showCloseButton, setShowCloseButton] = useState(false);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setShowCloseButton(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(true)} // Add this onClose prop
      sx={{
        '& .MuiDialog-container': {
          '& .MuiPaper-root': {
            border: '2px solid white',
            backgroundColor: 'rgba(14, 25, 67, 0.7)',
            color: 'white',
          },
        },
      }}
    >
      <DialogTitle sx={{ fontSize: '20px' }}>Desktop site!</DialogTitle>
      <DialogContent>
        <DialogContentText
          sx={{
            fontSize: '12px',
            color: 'white',
          }}
        >
          For the best experience please check out the portfolio website on the
          desktop site!
        </DialogContentText>
      </DialogContent>
      {showCloseButton && (
        <Grid sx={{ display: 'flex', justifyContent: 'center', p: 1 }}>
          <Button
            onClick={() => setOpen(false)}
            sx={{
              color: 'white',
              background: '#0081F8',
              border: '1px solid white',
              marginTop: '16px',
              borderRadius: '50px',
              width: '50%',
            }}
          >
            Close
          </Button>
        </Grid>
      )}
    </Dialog>
  );
};

export default MobileDialog;
