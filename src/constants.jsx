import React from 'react';
import { TranslationOutlined, DashboardOutlined, UnorderedListOutlined } from '@ant-design/icons';

const mainMenuIconStyles = {
  fontSize: '42px',
  color: '#303030',
};

const subMenuIconStyles = {
  fontSize: '20px',
  color: '#303030',
};

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
    icon: <DashboardOutlined style={mainMenuIconStyles} />,
    subItems: [
      {
        id: 1,
        label: 'Main page',
        to: '/dashboard/main-page',
        active: false,
        icon: <DashboardOutlined style={subMenuIconStyles} />,
      },
      {
        id: 2,
        label: 'Secondary page',
        to: '/dashboard/secondary-page',
        active: false,
        icon: <DashboardOutlined style={subMenuIconStyles} />,
      },
    ],
  },
  {
    id: 2,
    label: 'Dictionary',
    to: '/dictionary',
    active: false,
    icon: <TranslationOutlined style={mainMenuIconStyles} />,
    subItems: [
      {
        id: 1,
        label: 'List',
        to: '/app/dictionary/list',
        active: false,
        icon: <UnorderedListOutlined style={subMenuIconStyles} />,
      },
      {
        id: 2,
        label: 'Options',
        to: '/app/dictionary/options',
        active: false,
        icon: <DashboardOutlined style={subMenuIconStyles} />,
      },
    ],
  },
  {
    id: 3,
    label: 'Worker',
    to: '/worker',
    active: false,
    icon: <DashboardOutlined style={mainMenuIconStyles} />,
    subItems: [
      {
        id: 1,
        label: 'Subject',
        to: '/worker/subject',
        active: false,
        icon: <DashboardOutlined style={subMenuIconStyles} />,
      },
      {
        id: 2,
        label: 'Object',
        to: '/worker/object',
        active: false,
        icon: <DashboardOutlined style={subMenuIconStyles} />,
      },
    ],
  },
  {
    id: 4,
    label: 'Blank page',
    to: '/blank-page',
    active: false,
    icon: <DashboardOutlined style={mainMenuIconStyles} />,
    subItems: [],
  },
];
