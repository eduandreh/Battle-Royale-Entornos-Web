<template>
  <header>
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <RouterLink to="/" class="text-sm font-semibold leading-6 text-gray-900">
          <span class="sr-only">Battle Royale</span>
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
        </RouterLink>
      </div>

      <PopoverGroup class="hidden lg:flex lg:gap-x-12">


        <RouterLink to="/game-administration" class="text-sm font-semibold leading-6 text-900">Game</RouterLink>
        <RouterLink to="/store" class="text-sm font-semibold leading-6 text-900">Store</RouterLink>
        <RouterLink to="/rankings" class="text-sm font-semibold leading-6 text-900">Ranking</RouterLink>
        <RouterLink to="/attack-management" class="text-sm font-semibold leading-6 text-900">My Attacks</RouterLink>
        <RouterLink to="/player-game-history" class="text-sm font-semibold leading-6 text-900">Game History</RouterLink>
      </PopoverGroup>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" class="text-sm font-semibold leading-6 text-900">Log in <span
            aria-hidden="true">&rarr;</span></a>
      </div>
    </nav>

  </header>
</template>

<script setup>





</script>