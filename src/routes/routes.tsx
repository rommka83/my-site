/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';

const App = lazy(() => import('../app/App'));
const AboutMePage = lazy(() => import('../pages/AboutMePage'));
const GeneralPage = lazy(() => import('../pages/GeneralPage'));
const ProjectPage = lazy(() => import('../pages/ProjectPage'));
const TechnologiesPage = lazy(() => import('../pages/TechnologiesPage'));

export const routes = [
  {
    path: '/my-site',
    element: <App />,
    children: [
      {
        index: true,
        element: <GeneralPage />,
      },
      {
        path: '/my-site/projects',
        element: <ProjectPage />,
      },
      {
        path: '/my-site/technologies',
        element: <TechnologiesPage />,
      },
      {
        path: '/my-site/about-me',
        element: <AboutMePage />,
      },
    ],
  },
];
