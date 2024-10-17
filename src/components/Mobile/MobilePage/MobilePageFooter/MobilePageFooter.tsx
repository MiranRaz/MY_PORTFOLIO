import { Button, Grid } from '@mui/material';
import bckgMobile from '../../../../assets/mobile/bckgMobile.png';
import bckMobileBelow from '../../../../assets/mobile/bckMobileBelow.png';
import call from '../../../../assets/mobile/call.png';
import contacts from '../../../../assets/mobile/contacts.png';
import mail from '../../../../assets/mobile/mail.png';
import settings from '../../../../assets/mobile/settings.png';

export const MobilePageFooter = () => {
  return (
    <>
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
                width: '50px',
                height: '50px',
                padding: '8px 0px',
              }}
            />
          </Button>
          <Button disableRipple>
            <img
              src={mail}
              alt="asd"
              style={{
                width: '50px',
                height: '50px',
                padding: '8px 0px',
              }}
            />
          </Button>
          <Button disableRipple>
            <img
              src={contacts}
              alt="asd"
              style={{
                width: '50px',
                height: '50px',
                padding: '8px 0px',
              }}
            />
          </Button>
          <Button disableRipple>
            <img
              src={settings}
              alt="asd"
              style={{
                width: '50px',
                height: '50px',
                padding: '8px 0px',
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
            padding: '4px 0px',
          }}
        >
          <div>Contact</div>
        </Grid>
        <Grid
          sx={{
            padding: '4px 0px',
          }}
        >
          <div>Mail</div>
        </Grid>
        <Grid
          sx={{
            padding: '4px 0px',
          }}
        >
          <div>About</div>
        </Grid>
        <Grid
          sx={{
            padding: '4px 0px',
          }}
        >
          <div>Knowledge</div>
        </Grid>
      </Grid>
    </>
  );
};
