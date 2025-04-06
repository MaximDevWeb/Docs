import { createRouter, createWebHistory } from 'vue-router';

/** Маршруты приложения */
const routes = [
  {
    path: '/',
    component: () => import('../pages/Index.vue'),
    name: 'index',
    meta: {
      title: 'Главная страница',
    },
  },
  {
    path: '/settings',
    component: () => import('../pages/Settings.vue'),
    name: 'settings',
    meta: {
      title: 'Настройки',
    },
  },
];

/** Конфигурация маршрутизации Vue Router */
export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  /** Установка заголовка страницы */
  if (to.meta.title) document.title = to.meta.title;

  next();
});
