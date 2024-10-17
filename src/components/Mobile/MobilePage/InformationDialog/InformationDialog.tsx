import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { Dispatch, SetStateAction } from 'react';
import {
  Button,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from '@mui/material';

export interface InformationDialogProps {
  openInfo: boolean;
  setOpenInfo: Dispatch<SetStateAction<boolean>>;
  project: any;
}

export const InformationDialog: React.FC<InformationDialogProps> = ({
  openInfo,
  setOpenInfo,
  project,
}) => {
  return (
    <Dialog
      open={openInfo}
      onClose={() => setOpenInfo(true)}
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
      <DialogTitle sx={{ fontSize: '20px' }}>{project?.title}</DialogTitle>
      <DialogContent>
        <DialogContentText
          sx={{
            fontSize: '12px',
            color: 'white',
          }}
        >
          {project?.description}
        </DialogContentText>
      </DialogContent>
      <Grid
        sx={{ display: 'flex', justifyContent: 'center', p: 1, gap: '6px' }}
      >
        <Button
          onClick={() => setOpenInfo(false)}
          sx={{
            color: 'white',
            border: '1px solid white',
            width: '50%',
          }}
        >
          Close
        </Button>
        <a
          href={project?.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ width: '50%' }}
        >
          <Button
            onClick={() => setOpenInfo(false)}
            sx={{
              color: 'black',
              background: '#B9B7B8',
              border: '1px solid white',
              width: '100%',
            }}
          >
            Visit
          </Button>
        </a>
      </Grid>
    </Dialog>
  );
};
