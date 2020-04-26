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
  { id: 1, refId: 1, label: 'default 1', active: false, icon: <AiOutlineDashboard /> },
  { id: 2, refId: 1, label: 'default 2', active: false, icon: <AiOutlineDashboard /> },
  { id: 3, refId: 1, label: 'default 3', active: false, icon: <AiOutlineDashboard /> },
  { id: 4, refId: 1, label: 'default 4', active: false, icon: <AiOutlineDashboard /> },
  { id: 5, refId: 2, label: 'default 4', active: false, icon: <AiOutlineDashboard /> },
  { id: 6, refId: 2, label: 'default 4', active: false, icon: <AiOutlineDashboard /> },
  { id: 7, refId: 2, label: 'default 4', active: false, icon: <AiOutlineDashboard /> },
];
