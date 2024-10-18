import { Button, Grid } from '@mui/material';
import { useState } from 'react';
import bckgMobile from '../../../../assets/mobile/bckgMobile.png';
import bckMobileBelow from '../../../../assets/mobile/bckMobileBelow.png';
import call from '../../../../assets/mobile/call.png';
import contacts from '../../../../assets/mobile/contacts.png';
import settings from '../../../../assets/mobile/settings.png';
import { FooterContentDialog } from './FooterContentDialog';
import linkedin from '../../../../assets/global/lnkdn.png';
import github from '../../../../assets/global/github.png';
import mail from '../../../../assets/global/email.png';
import email from '../../../../assets/mobile/mail.png';

export const MobilePageFooter = () => {
  const [openInfo, setOpenInfo] = useState<boolean>(false);

  const contactInfo = [
    {
      label: 'Email',
      icon: mail,
      link: 'mailto:miranraznatovic@gmail.com',
    },
    {
      label: 'LinkedIn',
      icon: linkedin,
      link: 'https://www.linkedin.com/in/miran-raznatovic/',
    },
    {
      label: 'GitHub',
      icon: github,
      link: 'https://github.com/MiranRaz',
    },
  ];

  // const skills = [
  //   {
  //     label: 'React',
  //     icon: reactIcon,
  //   },
  //   {
  //     label: 'Angular',
  //     icon: angularIcon,
  //   },
  //   {
  //     label: 'Remix.js',
  //     icon: remixIcon,
  //   },
  //   {
  //     label: 'HTML & CSS',
  //     icon: remixIcon,
  //   },
  //   {
  //     label: 'JS & TS',
  //     icon: remixIcon,
  //   },
  //   {
  //     label: 'Material-UI',
  //     icon: muiIcon,
  //   },
  //   {
  //     label: 'Tailwind',
  //     icon: muiIcon,
  //   },
  //   {
  //     label: 'Bootstrap',
  //     icon: muiIcon,
  //   },
  //   {
  //     label: '.NET',
  //     icon: dotnetIcon,
  //   },
  //   {
  //     label: 'MSSQL',
  //     icon: mssqlIcon,
  //   },
  //   {
  //     label: 'Docker',
  //     icon: muiIcon,
  //   },
  //   {
  //     label: 'GIT',
  //     icon: muiIcon,
  //   },
  //   {
  //     label: 'Photoshop',
  //     icon: muiIcon,
  //   },
  //   {
  //     label: 'DaVinci Resolve',
  //     icon: muiIcon,
  //   },
  //   {
  //     label: 'Logic Pro X',
  //     icon: muiIcon,
  //   },
  // ];

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
          <Button
            disableRipple
            onClick={() => {
              setOpenInfo(true);
            }}
          >
            <img
              src={call}
              alt="Call"
              style={{
                width: '46px',
                height: '46px',
                padding: '8px 0px',
              }}
            />
            <FooterContentDialog
              openInfo={openInfo}
              setOpenInfo={setOpenInfo}
              project={contactInfo}
            />
          </Button>
          <Button disableRipple>
            <img
              src={email}
              alt="Mail"
              style={{
                width: '46px',
                height: '46px',
                padding: '8px 0px',
              }}
            />
          </Button>
          <Button disableRipple>
            <img
              src={contacts}
              alt="Contacts"
              style={{
                width: '46px',
                height: '46px',
                padding: '8px 0px',
              }}
            />
          </Button>
          <Button disableRipple>
            <img
              src={settings}
              alt="Settings"
              style={{
                width: '46px',
                height: '46px',
                padding: '8px 0px',
              }}
            />
            {/* <FooterContentDialog
              openInfo={openInfo}
              setOpenInfo={setOpenInfo}
              project={skills}
            /> */}
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
          <div
            style={{
              fontSize: '13px',
            }}
          >
            Contact
          </div>
        </Grid>
        <Grid
          sx={{
            padding: '4px 0px',
          }}
        >
          <div
            style={{
              fontSize: '13px',
            }}
          >
            Mail
          </div>
        </Grid>
        <Grid
          sx={{
            padding: '4px 0px',
          }}
        >
          <div
            style={{
              fontSize: '13px',
            }}
          >
            About
          </div>
        </Grid>
        <Grid
          sx={{
            padding: '4px 0px',
          }}
        >
          <div
            style={{
              fontSize: '13px',
            }}
          >
            Skills
          </div>
        </Grid>
      </Grid>
    </>
  );
};
