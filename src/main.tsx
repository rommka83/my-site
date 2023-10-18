import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@material-tailwind/react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { routes } from './routes/routes.tsx';

import './index.css';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(
  document.getElementById('root')!,
).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
