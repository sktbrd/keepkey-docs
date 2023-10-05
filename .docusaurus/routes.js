import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/fr/markdown-page',
    component: ComponentCreator('/fr/markdown-page', 'eb9'),
    exact: true
  },
  {
    path: '/fr/search',
    component: ComponentCreator('/fr/search', '9cf'),
    exact: true
  },
  {
    path: '/fr/docs',
    component: ComponentCreator('/fr/docs', '134'),
    routes: [
      {
        path: '/fr/docs/category/tutorial---device-in-depth',
        component: ComponentCreator('/fr/docs/category/tutorial---device-in-depth', '24e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fr/docs/category/tutorial---keepkey-sdk-intergration',
        component: ComponentCreator('/fr/docs/category/tutorial---keepkey-sdk-intergration', '615'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fr/docs/category/tutorial---user-basics',
        component: ComponentCreator('/fr/docs/category/tutorial---user-basics', '9ea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fr/docs/category/tutorial---user-basics-1',
        component: ComponentCreator('/fr/docs/category/tutorial---user-basics-1', 'ada'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fr/docs/intro',
        component: ComponentCreator('/fr/docs/intro', '70b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fr/docs/new-users/Start Here',
        component: ComponentCreator('/fr/docs/new-users/Start Here', '244'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fr/docs/new-users/Understanding The Desktop Application',
        component: ComponentCreator('/fr/docs/new-users/Understanding The Desktop Application', 'b43'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fr/docs/new-users/WalletConnect',
        component: ComponentCreator('/fr/docs/new-users/WalletConnect', 'b67'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fr/docs/tutorial-basics/get-started',
        component: ComponentCreator('/fr/docs/tutorial-basics/get-started', 'd90'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fr/docs/tutorial-basics/how-to-wipe',
        component: ComponentCreator('/fr/docs/tutorial-basics/how-to-wipe', 'b3f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fr/docs/tutorial-basics/updating-keepkey',
        component: ComponentCreator('/fr/docs/tutorial-basics/updating-keepkey', '15f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fr/docs/tutorial-device/useing-kkcli',
        component: ComponentCreator('/fr/docs/tutorial-device/useing-kkcli', '428'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fr/docs/tutorial-device/using-go-keepkey',
        component: ComponentCreator('/fr/docs/tutorial-device/using-go-keepkey', '987'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fr/docs/tutorial-device/verifiying-firmware',
        component: ComponentCreator('/fr/docs/tutorial-device/verifiying-firmware', '25b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fr/docs/tutorial-extras/build-a-dapp',
        component: ComponentCreator('/fr/docs/tutorial-extras/build-a-dapp', '3f6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/fr/docs/tutorial-extras/REST-api',
        component: ComponentCreator('/fr/docs/tutorial-extras/REST-api', 'd1a'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/fr/',
    component: ComponentCreator('/fr/', '9a6'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
