import {
  RouteRecord,
} from 'vue-router';
import {
  HomeFilled as IconHomeFilled,
  Brush as IconBrush,
  Collection as IconCollection,
  Monitor as IconMonitor,
  Film as IconFilm,
  Grid as IconGrid,
} from '@element-plus/icons-vue';

const routes: RouteRecord[] = [
  // #region core pages
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/home/index.vue'),
    meta: {
      // page title
      title: 'Home',
      // menu icon
      icon: IconHomeFilled,
      // use a layout
      layout: 'LayoutMain',
    },
  },
  {
    path: '/theme',
    name: 'theme',
    component: () => import('@/pages/theme/index.vue'),
    meta: {
      title: 'Theme',
      icon: IconBrush,
      layout: 'LayoutMain',
    },
  },
  {
    path: '/pages',
    component: () => import('@/components/layouts/slot.vue'),
    meta: {
      title: 'Pages',
      icon: IconCollection,
      layout: 'LayoutMain',
    },
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/pages/dashboard/index.vue'),
        meta: {
          title: 'Dashboard',
          icon: IconMonitor,
          layout: 'LayoutMain',
        },
      },
      {
        path: 'table',
        name: 'table',
        component: () => import('@/pages/table/index.vue'),
        meta: {
          title: 'Table',
          icon: IconFilm,
          layout: 'LayoutMain',
        },
      },
      {
        path: 'grid',
        name: 'grid',
        component: () => import('@/pages/grid/index.vue'),
        meta: {
          title: 'Grid',
          icon: IconGrid,
          layout: 'LayoutMain',
        },
      },
    ],
  },
  // #endregion

  // #region error pages

  // #endregion
];

export default routes;
