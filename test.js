const menuItems = [
  {
    id: 1,
    label: 'Dashboard',
    active: false,
    to: '',
    subItems: [
      { id: 1, label: 'main page', to: '/dashboard/main-page', active: false },
      { id: 2, label: 'secondary page', to: '/dashboard/secondary-page', active: false },
    ],
  },
  {
    id: 2,
    label: 'Application',
    active: false,
    to: '',
    subItems: [
      { id: 1, label: 'options', to: '/application/options', active: false },
      { id: 2, label: 'list', to: '/application/list', active: false },
    ],
  },
  {
    id: 3,
    label: 'Blank page',
    active: false,
    to: '/blank-page',
    subItems: false,
  },
];

const initialPath = '/dashboard/main-page';
// const initialPath = '/blank-page';

const setActiveMenuItems = (path) => {
  for (let i = 0; i < menuItems.length; i += 1) {
    if (menuItems[i].to === path) {
      menuItems[i].active = true;
      return;
    }
  }

  for (let i = 0; i < menuItems.length; i += 1) {
    if (!menuItems[i].subItems) continue;
    for (let j = 0; j < menuItems[i].subItems.length; j += 1) {
      if (menuItems[i].subItems[j].to === path) {
        menuItems[i].active = true;
        menuItems[i].subItems[j].active = true;
        return;
      }
    }
  }
};



const init = () => {
  setActiveMenuItems(initialPath);
  console.log(menuItems);
};

window.onload = init;
