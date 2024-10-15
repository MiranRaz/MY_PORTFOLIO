import jcs from '../assets/global/jcs.png';
import nf from '../assets/global/nf.png';
import macbeth from '../assets/global/macbeth.png';
import travel from '../assets/global/travel.png';
import thebase from '../assets/global/thebase.png';
import bmw from '../assets/global/bmw.png';
import bloola from '../assets/global/bloola.png';
import bbk from '../assets/global/bbk.jpg';
import theme from '../assets/global/theme.png';
import scrollable from '../assets/global/scrollable.png';
import scroll from '../assets/global/scroll.png';
import imagereveal from '../assets/global/imagereveal.png';
import ttt from '../assets/global/ttt.png';
import alert from '../assets/desktop/alert.jpg';
import bomb from '../assets/desktop/bomb.jpg';
import invoices from '../assets/global/invoices-logo.png';
import { ProjectData } from '../model/ProjectData.ts';

const projects: ProjectData[] = [
  {
    image: jcs,
    alt: 'judo club sarajevo',
    title: 'Judo Club Sarajevo',
    description: 'This is a website made using Gatsby and GraphQL.',
    url: 'https://judoclubsarajevo.com',
    alertImage: alert,
    type: 'Deployed',
  },
  {
    image: invoices,
    alt: 'invoices app',
    title: 'Invoices app',
    description:
      'This is an invoice tracking application made using Angular. The app was made using a figma file provided by the Frontend Mentor course',
    url: 'https://invoice-app-cyan-phi.vercel.app/',
    alertImage: alert,
    type: 'Deployed',
  },
  {
    image: nf,
    alt: 'nas film',
    title: '"Nas Film" Production',
    description:
      'This is a website made using Next 13 and GSAP. The idea was to make a infinite scroll app with a lot of interesting and creative animations.',
    url: 'https://nasfilm.vercel.app',
    alertImage: alert,
    type: 'Deployed',
  },
  {
    image: macbeth,
    alt: 'macbeth',
    title: 'Macbeth band',
    description: 'This is a website made using React JS.',
    url: 'https://macbeth-bay.vercel.app/',
    alertImage: alert,
    type: 'Deployed',
  },
  {
    image: travel,
    alt: 'travel',
    title: 'Travel app',
    description: 'This is a website made using React JS.',
    url: 'https://asbloola.github.io/travel/',
    alertImage: alert,
    type: 'Deployed',
  },
  {
    image: thebase,
    alt: 'thebase',
    title: 'The Base',
    description: 'This is a website made using React JS.',
    url: 'https://miranraz.github.io/theBase/',
    alertImage: alert,
    type: 'Deployed',
  },
  {
    image: bmw,
    alt: 'bmw',
    title: 'BMW',
    description:
      'Sorry... Due to the items in my contract, BMW projects are not available for public!',
    url: '',
    alertImage: bomb,
    type: 'Private',
  },
  {
    image: bbk,
    alt: 'bbk',
    title: 'Deutsche Bundesbank',
    description:
      'Sorry... Due to the items in my contract, Deutsche Bundesbank projects are not available for public!',
    url: '',
    alertImage: bomb,
    type: 'Private',
  },
  {
    image: bloola,
    alt: 'bloola factory',
    title: 'bloola Factory',
    description:
      'Sorry... Due to the items in my contract, bloola Factory projects are not available for public!',
    url: '',
    alertImage: bomb,
    type: 'Private',
  },
  {
    image: theme,
    alt: 'theme',
    title: 'Theme switch',
    description:
      'This is a website made to deploy to NPM to be used as a library',
    url: 'https://theme-switch-lime.vercel.app/',
    alertImage: alert,
    type: 'NPM projects',
  },
  {
    image: scrollable,
    alt: 'scrollable',
    title: 'Scrollable section',
    description:
      'This is a website made to deploy to NPM to be used as a library',
    url: 'https://react-gsap-scrollable-section.vercel.app/',
    alertImage: alert,
    type: 'NPM projects',
  },
  {
    image: scroll,
    alt: 'scroll',
    title: 'Custom scrollbar',
    description:
      'This is a website made to deploy to NPM to be used as a library',
    url: 'https://custom-scrollbar.vercel.app/',
    alertImage: alert,
    type: 'NPM projects',
  },
  {
    image: imagereveal,
    alt: 'imagereveal',
    title: 'Image reveal',
    description:
      'This is a website made to deploy to NPM to be used as a library',
    url: 'https://image-reveal-six.vercel.app/',
    alertImage: alert,
    type: 'NPM projects',
  },
  {
    image: ttt,
    alt: 'tic tac toe',
    title: 'Tic-Tac-Toe',
    description: 'This was my first `real` app made using React JS',
    url: 'https://miranraz.github.io/TicTacToe-ReactJS/',
    alertImage: alert,
    type: 'Games',
  },
];

export default projects;
