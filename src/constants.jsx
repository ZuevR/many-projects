import React from 'react';
import { AiOutlineDashboard } from 'react-icons/ai';

export const menuStages = {
  mainOpened: 1,
  subOpened: 2,
  subClosed: 3,
  mainClosed: 4,
};

export const menuSize = {
  full: 'full',
  half: 'half',
};

export const items = [
  {
    id: 1,
    label: 'Dashboard',
    to: '/dashboard',
    active: false,
    icon: <AiOutlineDashboard />,
    subItems: [
      {
        id: 1,
        label: 'Main page',
        to: '/dashboard/main-page',
        active: false,
        icon: <AiOutlineDashboard />,
      },
      {
        id: 2,
        label: 'Secondary page',
        to: '/dashboard/secondary-page',
        active: false,
        icon: <AiOutlineDashboard />,
      },
    ],
  },
  {
    id: 2,
    label: 'Application',
    to: '/application',
    active: false,
    icon: <AiOutlineDashboard />,
    subItems: [
      {
        id: 1,
        label: 'Options',
        to: '/application/options',
        active: false,
        icon: <AiOutlineDashboard />,
      },
      { id: 2, label: 'List', to: '/application/list', active: false, icon: <AiOutlineDashboard /> },
    ],
  },
  {
    id: 3,
    label: 'Worker',
    to: '/worker',
    active: false,
    icon: <AiOutlineDashboard />,
    subItems: [
      { id: 1, label: 'Subject', to: '/worker/subject', active: false, icon: <AiOutlineDashboard /> },
      { id: 2, label: 'Object', to: '/worker/object', active: false, icon: <AiOutlineDashboard /> },
    ],
  },
  {
    id: 4,
    label: 'Blank page',
    to: '/blank-page',
    active: false,
    icon: <AiOutlineDashboard />,
    subItems: [],
  },
];
