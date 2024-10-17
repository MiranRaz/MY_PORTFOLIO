import { Button, Grid } from '@mui/material';
import logo_dark from '../../../assets/global/logo_dark.png';
import { useEffect, useState } from 'react';
import Battery6BarIcon from '@mui/icons-material/Battery6Bar';
import MobileDialog from '../MobileDialog.tsx';
import { MobilePageFooter } from './MobilePageFooter/MobilePageFooter.tsx';
import projects from '../../../data/projectData.ts';
import { InformationDialog } from './InformationDialog/InformationDialog.tsx';

const MobilePage = () => {
  const [openInitialModal, setOpenInitialModal] = useState<boolean>(true);
  const [openInfo, setOpenInfo] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<any>(null); // New state for selected project

  const [currentTime, setCurrentTime] = useState('');
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const amPm = hours >= 12 ? 'PM' : 'AM';
      const hours12 = hours % 12 || 12;
      const formattedTime = `${hours12}:${String(minutes).padStart(
        2,
        '0'
      )} ${amPm}`;
      setCurrentTime(formattedTime);
    };

    updateTime();

    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Grid
      sx={{
        height: window?.innerHeight,
        color: '#B9B7B8',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <MobileDialog open={openInitialModal} setOpen={setOpenInitialModal} />
      <Grid
        sx={{
          height: '5%',
          width: '100vw',
          backgroundColor: '#B9B7B8',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Grid>
          <img
            src={logo_dark}
            alt={'logo'}
            style={{
              height: '22px',
              paddingLeft: '24px',
            }}
          />
        </Grid>
        <Grid sx={{ color: 'black' }}>{currentTime}</Grid>
        <Grid style={{ height: '25px', paddingRight: '24px' }}>
          <Battery6BarIcon
            sx={{
              transform: 'rotate(90deg)',
              fontSize: '25px',
              color: 'black',
            }}
          />
        </Grid>
      </Grid>
      <Grid
        sx={{
          height: '100%',
          backgroundColor: '#B9B7B8',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ display: 'flex', height: '100%', padding: '4px' }}>
          <Grid
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              justifyItems: 'center',
              width: '100%',
              alignItems: 'center',
            }}
          >
            {projects.map((project, index) => (
              <Grid
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
                onClick={() => {
                  setSelectedProject(project); // Set the selected project
                  setOpenInfo(true);
                }}
              >
                <Button disableRipple>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '46px',
                      height: '46px',
                      padding: '8px 0px',
                    }}
                  />
                </Button>
                <p
                  style={{
                    textAlign: 'center',
                    color: 'black',
                    marginTop: '0px',
                    fontSize: '13px',
                  }}
                >
                  {project.title}
                </p>
              </Grid>
            ))}
          </Grid>
        </div>
      </Grid>
      <MobilePageFooter />
      <InformationDialog
        openInfo={openInfo}
        setOpenInfo={setOpenInfo}
        project={selectedProject}
      />
    </Grid>
  );
};

export default MobilePage;
