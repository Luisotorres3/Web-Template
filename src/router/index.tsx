import React from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ProjectsPage from '../pages/ProjectsPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'projects',
        element: <ProjectsPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
