<template>
  <header>
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <RouterLink
          to="/"
          class="text-sm font-semibold leading-6 text-gray-900"
        >
          <span class="sr-only">Battle Royale</span>
          <img
            class="h-8 w-auto"
            src="https://firebasestorage.googleapis.com/v0/b/battle-royale-8ef31.appspot.com/o/icons8-batalla-50%20(1).png?alt=media&token=0a8f6b03-a0be-49e6-a039-51539200cbcb"
            alt="logo"
          />
        </RouterLink>
      </div>

      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <RouterLink
          to="/game-administration"
          class="text-sm font-semibold leading-6 text-900"
          >Game</RouterLink
        >
        <RouterLink to="/store" class="text-sm font-semibold leading-6 text-900"
          >Store</RouterLink
        >
        <RouterLink
          to="/rankings"
          class="text-sm font-semibold leading-6 text-900"
          >Ranking</RouterLink
        >
        <RouterLink
          to="/attack-management"
          class="text-sm font-semibold leading-6 text-900"
          >My Attacks</RouterLink
        >
        <RouterLink
          to="/player-game-history"
          class="text-sm font-semibold leading-6 text-900"
          >Game History</RouterLink
        >
      </PopoverGroup>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <RouterLink @click="handleLogout" to="/" class="text-sm font-semibold leading-6 text-900"
          >Log out <span aria-hidden="true">&rarr;</span></RouterLink
        >
      </div>
    </nav>
  </header>
</template>

<script setup>
import { logout } from '../utils/auth';
const handleLogout = () => {
  logout();
}
</script>
