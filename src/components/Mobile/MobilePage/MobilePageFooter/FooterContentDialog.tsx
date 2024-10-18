import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { Dispatch, SetStateAction } from 'react';
import {
  Button,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
} from '@mui/material';

export interface FooterContentDialogProps {
  openInfo: boolean;
  setOpenInfo: Dispatch<SetStateAction<boolean>>;
  project: any;
}

export const FooterContentDialog: React.FC<FooterContentDialogProps> = ({
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
            width: '80%',
            height: '40%',
          },
        },
      }}
    >
      <DialogTitle sx={{ fontSize: '20px' }}>Contact: </DialogTitle>
      <DialogContent>
        <DialogContentText
          sx={{
            fontSize: '16px',
            color: 'black',
            background: 'white',
            borderRadius: '5px',
            border: '1px solid white',
          }}
        >
          {project.map((projects: any) => (
            <React.Fragment key={projects.label}>
              <Divider />
              <a
                href={projects?.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: '50%', textDecoration: 'none', color: 'black' }}
              >
                <Grid
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <img
                    src={projects?.icon}
                    alt=""
                    style={{ height: '20px', paddingLeft: '8px' }}
                  />
                  <p>{projects?.label}</p>
                </Grid>
              </a>
              <Divider />
            </React.Fragment>
          ))}
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
            width: '100%',
          }}
        >
          Close
        </Button>
      </Grid>
    </Dialog>
  );
};
