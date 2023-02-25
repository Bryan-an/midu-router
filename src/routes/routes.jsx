import { AboutPage, SearchPage } from '../pages';

export const routes = [
  {
    path: '/:lang/about',
    Component: AboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
];
