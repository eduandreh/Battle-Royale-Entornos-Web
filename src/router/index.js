import { createRouter, createWebHistory } from 'vue-router';
import PlayerManagementPage from '../views/PlayerManagementPage.vue';
import AttackManagementPage from '../views/AttackManagementPage.vue';
import RankingsPage from '../views/RankingsPage.vue';
import PlayerGameHistoryPage from '../views/PlayerGameHistoryPage.vue';
import GameAdministrationPage from '../views/GameAdministrationPage.vue';
import StorePage from '../views/StorePage.vue';
import GamePage from '../views/GamePage.vue';
import Login from '../components/LoginComponent.vue';
import { isAuthenticated } from '../utils/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: () => {
        return isAuthenticated() ? '/player-management' : '/login';
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (isAuthenticated()) {
          next({ name: 'PlayerManagement' });
        } else {
          next();
        }
      },
    },
    {
      path: '/player-management',
      name: 'PlayerManagement',
      component: PlayerManagementPage,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/attack-management',
      name: 'AttackManagement',
      component: AttackManagementPage,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/rankings',
      name: 'Rankings',
      component: RankingsPage,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/player-game-history',
      name: 'PlayerGameHistory',
      component: PlayerGameHistoryPage,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/game-administration',
      name: 'GameAdministration',
      component: GameAdministrationPage,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/store',
      name: 'Store',
      component: StorePage,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/game',
      name: 'Game',
      component: GamePage,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (!isAuthenticated()) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;
