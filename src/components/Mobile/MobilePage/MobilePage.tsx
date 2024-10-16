import { Button, Grid } from '@mui/material';
import logo_light from '../../../assets/global/logo_light.png';
import { useEffect, useState } from 'react';
import Battery6BarIcon from '@mui/icons-material/Battery6Bar';
import MobileDialog from '../MobileDialog.tsx';
import call from '../../../assets/mobile/call.png';
import contacts from '../../../assets/mobile/contacts.png';
import mail from '../../../assets/mobile/mail.png';
import settings from '../../../assets/mobile/settings.png';
import { MobilePageFooter } from './MobilePageFooter/MobilePageFooter.tsx';
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
        height: window?.innerHeight,
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
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          justifyContent: 'space-between',
          padding: '24px 0px',
        }}
      >
        <div>
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
                  width: '64px',
                  height: '64px',
                  padding: '8px 0px',
                }}
              />
            </Button>
            <Button disableRipple>
              <img
                src={mail}
                alt="asd"
                style={{
                  width: '64px',
                  height: '64px',
                  padding: '8px 0px',
                }}
              />
            </Button>
            <Button disableRipple>
              <img
                src={contacts}
                alt="asd"
                style={{
                  width: '64px',
                  height: '64px',
                  padding: '8px 0px',
                }}
              />
            </Button>
            <Button disableRipple>
              <img
                src={settings}
                alt="asd"
                style={{
                  width: '64px',
                  height: '64px',
                  padding: '8px 0px',
                }}
              />
            </Button>
          </Grid>
          <Grid
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              justifyItems: 'center',
            }}
          >
            <Grid>
              <div>Phone</div>
            </Grid>
            <Grid>
              <div>Mail</div>
            </Grid>
            <Grid>
              <div>Contact</div>
            </Grid>
            <Grid>
              <div>Settings</div>
            </Grid>
          </Grid>
        </div>

        <div>
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
                  width: '64px',
                  height: '64px',
                  padding: '8px 0px',
                }}
              />
            </Button>
            <Button disableRipple>
              <img
                src={mail}
                alt="asd"
                style={{
                  width: '64px',
                  height: '64px',
                  padding: '8px 0px',
                }}
              />
            </Button>
            <Button disableRipple>
              <img
                src={contacts}
                alt="asd"
                style={{
                  width: '64px',
                  height: '64px',
                  padding: '8px 0px',
                }}
              />
            </Button>
            <Button disableRipple>
              <img
                src={settings}
                alt="asd"
                style={{
                  width: '64px',
                  height: '64px',
                  padding: '8px 0px',
                }}
              />
            </Button>
          </Grid>
          <Grid
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              justifyItems: 'center',
            }}
          >
            <Grid>
              <div>Phone</div>
            </Grid>
            <Grid>
              <div>Mail</div>
            </Grid>
            <Grid>
              <div>Contact</div>
            </Grid>
            <Grid>
              <div>Settings</div>
            </Grid>
          </Grid>
        </div>

        <div>
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
                  width: '64px',
                  height: '64px',
                  padding: '8px 0px',
                }}
              />
            </Button>
            <Button disableRipple>
              <img
                src={mail}
                alt="asd"
                style={{
                  width: '64px',
                  height: '64px',
                  padding: '8px 0px',
                }}
              />
            </Button>
            <Button disableRipple>
              <img
                src={contacts}
                alt="asd"
                style={{
                  width: '64px',
                  height: '64px',
                  padding: '8px 0px',
                }}
              />
            </Button>
            <Button disableRipple>
              <img
                src={settings}
                alt="asd"
                style={{
                  width: '64px',
                  height: '64px',
                  padding: '8px 0px',
                }}
              />
            </Button>
          </Grid>
          <Grid
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              justifyItems: 'center',
            }}
          >
            <Grid>
              <div>Phone</div>
            </Grid>
            <Grid>
              <div>Mail</div>
            </Grid>
            <Grid>
              <div>Contact</div>
            </Grid>
            <Grid>
              <div>Settings</div>
            </Grid>
          </Grid>
        </div>

        <div>
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
                  width: '64px',
                  height: '64px',
                  padding: '8px 0px',
                }}
              />
            </Button>
            <Button disableRipple>
              <img
                src={mail}
                alt="asd"
                style={{
                  width: '64px',
                  height: '64px',
                  padding: '8px 0px',
                }}
              />
            </Button>
            <Button disableRipple>
              <img
                src={contacts}
                alt="asd"
                style={{
                  width: '64px',
                  height: '64px',
                  padding: '8px 0px',
                }}
              />
            </Button>
            <Button disableRipple>
              <img
                src={settings}
                alt="asd"
                style={{
                  width: '64px',
                  height: '64px',
                  padding: '8px 0px',
                }}
              />
            </Button>
          </Grid>
          <Grid
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              justifyItems: 'center',
            }}
          >
            <Grid>
              <div>Phone</div>
            </Grid>
            <Grid>
              <div>Mail</div>
            </Grid>
            <Grid>
              <div>Contact</div>
            </Grid>
            <Grid>
              <div>Settings</div>
            </Grid>
          </Grid>
        </div>
      </Grid>
      <MobilePageFooter />
    </Grid>
  );
};

export default MobilePage;
