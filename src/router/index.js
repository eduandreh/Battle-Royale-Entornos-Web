import { createRouter, createWebHistory } from 'vue-router'

import PlayerManagementPage from '../views/PlayerManagementPage.vue';
import AttackManagementPage from '../views/AttackManagementPage.vue';
import RankingsPage from '../views/RankingsPage.vue';
import PlayerGameHistoryPage from '../views/PlayerGameHistoryPage.vue';
import GameAdministrationPage from '../views/GameAdministrationPage.vue';
import StorePage from '../views/StorePage.vue';
import GamePage from '../views/GamePage.vue';
import CreationPlayerPage from '../views/CreationPlayerPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: CreationPlayerPage
    },
    {
        path: '/',
        name: 'Home',
        component: PlayerManagementPage

    },
    {
        path: '/player-management',
        name: 'PlayerManagement',
        component: PlayerManagementPage
      },
      {
        path: '/attack-management',
        name: 'AttackManagement',
        component: AttackManagementPage
      },
      {
        path: '/rankings',
        name: 'Rankings',
        component: RankingsPage
      },
      {
        path: '/player-game-history',
        name: 'PlayerGameHistory',
        component: PlayerGameHistoryPage
      },
      {
        path: '/game-administration',
        name: 'GameAdministration',
        component: GameAdministrationPage
      },
      {
        path: '/store',
        name: 'Store',
        component: StorePage
      },
      {
        path: '/game',
        name: 'Game',
        component: GamePage
      },
      
  ]
})

export default router


