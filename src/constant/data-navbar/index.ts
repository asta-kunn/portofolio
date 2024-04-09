import {
  LuHome, LuUser2, LuNewspaper, LuLayout,
} from 'react-icons/lu';

const dataNavbar = [
  {
    title: 'Home',
    pathname: '/',
    Icon: LuHome,
  },
  {
    title: 'About',
    pathname: '/about',
    Icon: LuUser2,
  },
  {
    title: 'Projects',
    pathname: '/projects',
    Icon: LuLayout,
  },
  {
    title: 'Blog',
    pathname: '/blog',
    Icon: LuNewspaper,
  },
];

export default dataNavbar;
