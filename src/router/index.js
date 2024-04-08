import { createRouter, createWebHistory } from 'vue-router';

import PlayerManagementPage from '../views/PlayerManagementPage.vue';
import AttackManagementPage from '../views/AttackManagementPage.vue';
import RankingsPage from '../views/RankingsPage.vue';
import PlayerGameHistoryPage from '../views/PlayerGameHistoryPage.vue';
import GameAdministrationPage from '../views/GameAdministrationPage.vue';
import StorePage from '../views/StorePage.vue';
import GamePage from '../views/GamePage.vue';
import CreationPlayerPage from '../views/CreationPlayerPage.vue';

function isUserAuthenticated() {
  return true;
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: CreationPlayerPage,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/',
      name: 'Home',
      component: PlayerManagementPage,
      meta: {
        requiresAuth: true,
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


//Navigation guard
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !isUserAuthenticated()) {
    next('/login');
  } else if (to.path === '/login' && isUserAuthenticated()) {
    next('/');
  } else {
    next();
  }
});

export default router;
