import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from '../icons';

export const mobileMenuRoutes = [
  {
    id: 1,
    name: 'Главная',
    href: '/',
  },
  {
    id: 2,
    name: 'Магазин',
    href: '/catalog',
  },
  {
    id: 3,
    name: 'О нас',
    href: '/about-us',
  },
];

export const footerSocialNetworksRoutes = [
  {
    id: 1,
    href: '#',
    icon: LinkedinIcon,
  },
  {
    id: 2,
    href: '#',
    icon: FacebookIcon,
  },
  {
    id: 3,
    href: '#',
    icon: InstagramIcon,
  },
  {
    id: 4,
    href: '#',
    icon: TwitterIcon,
  },
];

export const productSocialNetworksRoutes = footerSocialNetworksRoutes.filter(
  (route) => route.icon !== LinkedinIcon,
);
