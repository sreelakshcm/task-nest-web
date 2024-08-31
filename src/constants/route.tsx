/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';

// const Help = lazy(() => import('../pages/Login'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Tasks = lazy(() => import('../pages/TaskList'));
const Category = lazy(() => import('../pages/Category'));

export const ROUTES = [
  {
    path: '/dashboard',
    component: <Dashboard />,
    label: 'Dashboard',
  },
  {
    path: '/tasks',
    component: <Tasks />,
    label: 'Tasks',
  },
  {
    path: '/category',
    component: <Category />,
    label: 'Category',
  },
  // {
  //   path: '/help',
  //   component: <Help />,
  //   label: 'Help',
  // },
];
