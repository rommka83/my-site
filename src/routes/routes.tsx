import App from '../app/App';
import { AboutMePage } from '../pages/AboutMePage';
import { GeneralPage } from '../pages/GeneralPage';
import { ProjectPage } from '../pages/ProjectPage';
import { TechnologiesPage } from '../pages/TechnologiesPage';

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <GeneralPage />,
      },
      {
        path: '/projects',
        element: <ProjectPage />,
      },
      {
        path: '/technologies',
        element: <TechnologiesPage />,
      },
      {
        path: '/about-me',
        element: <AboutMePage />,
      },
    ],
  },
];
