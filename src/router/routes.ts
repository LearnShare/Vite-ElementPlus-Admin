import {
  RouteRecord,
} from 'vue-router';
import {
  HomeFilled as IconHomeFilled,
  Collection as IconCollection,
  Monitor as IconMonitor,
  Film as IconFilm,
  DataLine as IconDataLine,
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
        path: 'chart',
        name: 'chart',
        component: () => import('@/pages/chart/index.vue'),
        meta: {
          title: 'Chart',
          icon: IconDataLine,
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
