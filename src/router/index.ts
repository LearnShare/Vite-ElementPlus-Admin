import {
  createRouter,
  createWebHistory,
  Router,
} from 'vue-router';

import routes from './routes';

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  /* const hasLogin = false;

  // login check
  if (to.meta
      && to.meta.login
      && !hasLogin) {
    next({
      name: 'login',
      query: {
        redirect: to.path,
      },
      replace: true,
    });
  } */

  // auto set page title
  if (to.meta.title) {
    document.title = to.meta.title;
  }

  next();
});

export default router;
