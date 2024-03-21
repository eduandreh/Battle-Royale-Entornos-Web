<script setup>
import PlayerInfoComponent from '../components/PlayerInfoComponent.vue';
</script>


<template>
  <section class="m-14 p-4 flex lg:gap-x-12">
    <div class="justify-start">
      <PlayerInfoComponent />
    </div>
    <form class="flex-grow flex flex-col justify-start">
      <nav class="flex flex-row w-full gap-4">
        <input type="text" class="bg-placeholder rounded-xl p-6 mb-4 w-3/4 text-lg" placeholder="Find player by name" style="height: 3rem;" />
        <button class="bg-buttons text-white rounded-md w-1/4" style="height: 3rem;">Filter</button>
      </nav>
    </form>
  
  </section>
</template>
