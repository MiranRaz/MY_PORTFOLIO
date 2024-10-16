import { Button, Grid } from '@mui/material';
import bckgMobile from '../../../assets/mobile/bckgMobile.png';
import bckMobileBelow from '../../../assets/mobile/bckMobileBelow.png';
import logo_light from '../../../assets/global/logo_light.png';
import { useEffect, useState } from 'react';
import Battery6BarIcon from '@mui/icons-material/Battery6Bar';
import MobileDialog from '../MobileDialog.tsx';
import call from '../../../assets/mobile/call.png';
import contacts from '../../../assets/mobile/contacts.png';
import mail from '../../../assets/mobile/mail.png';
import settings from '../../../assets/mobile/settings.png';
const MobilePage = () => {
  const [openInitialModal, setOpenInitialModal] = useState<boolean>(true);

  const [currentTime, setCurrentTime] = useState('');
  useEffect(() => {
    // Function to update the current time with AM/PM
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

    // Update the time immediately
    updateTime();

    // Set up a timer to update the time every second (1000 milliseconds)
    const timer = setInterval(updateTime, 1000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);
  return (
    <Grid
      sx={{
        height: '100vh',
        color: 'white',
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
          backgroundColor: 'black',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Grid>
          <img
            src={logo_light}
            alt={'logo'}
            style={{ height: '22px', paddingLeft: '24px' }}
          />
        </Grid>
        <Grid>{currentTime}</Grid>
        <Grid style={{ height: '25px', paddingRight: '24px' }}>
          <Battery6BarIcon
            sx={{ transform: 'rotate(90deg)', fontSize: '25px' }}
          />
        </Grid>
      </Grid>
      <Grid
        sx={{
          height: '100%',
          backgroundColor: 'black',
        }}
      >
        hello world
      </Grid>
      <Grid
        sx={{
          backgroundImage: `url(${bckgMobile})`,
          backgroundColor: 'black',
          backgroundSize: '113%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center bottom',
        }}
      >
        <Grid
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            justifyItems: 'center',
          }}
        >
          <Button disableRipple>
            <img
              src={call}
              alt="asd"
              style={{
                width: '49px',
                height: '49px',
                padding: '12px 0px',
              }}
            />
          </Button>
          <Button disableRipple>
            <img
              src={mail}
              alt="asd"
              style={{
                width: '49px',
                height: '49px',
                padding: '12px 0px',
              }}
            />
          </Button>
          <Button disableRipple>
            <img
              src={contacts}
              alt="asd"
              style={{
                width: '49px',
                height: '49px',
                padding: '12px 0px',
              }}
            />
          </Button>
          <Button disableRipple>
            <img
              src={settings}
              alt="asd"
              style={{
                width: '49px',
                height: '49px',
                padding: '12px 0px',
              }}
            />
          </Button>
        </Grid>
      </Grid>
      <Grid
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          justifyItems: 'center',
          backgroundImage: `url(${bckMobileBelow})`,
        }}
      >
        <Grid
          sx={{
            padding: '8px 0px',
          }}
        >
          <div>Phone</div>
        </Grid>
        <Grid
          sx={{
            padding: '8px 0px',
          }}
        >
          <div>Mail</div>
        </Grid>
        <Grid
          sx={{
            padding: '8px 0px',
          }}
        >
          <div>Contact</div>
        </Grid>
        <Grid
          sx={{
            padding: '8px 0px',
          }}
        >
          <div>Settings</div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MobilePage;
