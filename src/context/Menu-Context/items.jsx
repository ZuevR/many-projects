import React from 'react';
import { AiOutlineDashboard } from 'react-icons/ai';

export const mainMenuItems = [
  {
    id: 1,
    label: 'Item 1',
    to: '/',
    hasSubMenu: true,
    active: true,
    icon: <AiOutlineDashboard />,
  },
  {
    id: 2,
    label: 'Item 2',
    to: '/',
    hasSubMenu: true,
    active: false,
    icon: <AiOutlineDashboard />,
  },
  {
    id: 3,
    label: 'Item 3',
    to: '/',
    hasSubMenu: false,
    active: false,
    icon: <AiOutlineDashboard />,
  },
  {
    id: 4,
    label: 'Item 4',
    to: '/',
    hasSubMenu: false,
    active: false,
    icon: <AiOutlineDashboard />,
  },
];

export const subMenuItems = [
  {
    id: 1, refId: 1, to: 'test1', label: 'default 1', active: false, icon: <AiOutlineDashboard />,
  },
  {
    id: 2, refId: 1, to: 'test2', label: 'default 2', active: false, icon: <AiOutlineDashboard />,
  },
  {
    id: 3, refId: 1, to: 'test3', label: 'default 3', active: false, icon: <AiOutlineDashboard />,
  },
  {
    id: 4, refId: 1, to: 'test4', label: 'default 4', active: false, icon: <AiOutlineDashboard />,
  },
  {
    id: 5, refId: 2, to: 'test5', label: 'default 4', active: false, icon: <AiOutlineDashboard />,
  },
  {
    id: 6, refId: 2, to: 'test6', label: 'default 4', active: false, icon: <AiOutlineDashboard />,
  },
  {
    id: 7, refId: 2, to: 'test7', label: 'default 4', active: false, icon: <AiOutlineDashboard />,
  },
];

export const items = [
  {
    id: 1,
    label: 'Dashboard',
    to: '',
    active: false,
    icon: <AiOutlineDashboard />,
    subItems: [
      { id: 1, label: 'Main page', to: '/dashboard/main-page', active: false },
      { id: 2, label: 'Secondary page', to: '/dashboard/secondary-page', active: false },
    ],
  },
  {
    id: 2,
    label: 'Application',
    to: '',
    active: false,
    icon: <AiOutlineDashboard />,
    subItems: [
      { id: 1, label: 'Options', to: '/application/options', active: false },
      { id: 2, label: 'List', to: '/application/list', active: false },
    ],
  },
  {
    id: 3,
    label: 'Worker',
    to: '',
    active: false,
    icon: <AiOutlineDashboard />,
    subItems: [
      { id: 1, label: 'Subject', to: '/worker/subject', active: false },
      { id: 2, label: 'Object', to: '/worker/object', active: false },
    ],
  },
  {
    id: 4,
    label: 'Blank page',
    to: '/blank-page',
    active: false,
    icon: <AiOutlineDashboard />,
    subItems: false,
  },
];
