<script setup>
import PlayerInfoComponent from '../components/PlayerInfoComponent.vue';
import StatisticsComponent from '../components/StatisticsComponent.vue';
import GameLogsComponent from '../components/GameLogsComponent.vue';
</script>

<template>
  <section class="m-14 p-4 flex flex-col lg:flex-row lg:gap-x-10">
    <div class="lg:w-1/4 mb-4 lg:mb-0">
      <PlayerInfoComponent />
    </div>
    <div class="lg:w-3/4 flex flex-col">
      <div class="mb-8">
        <StatisticsComponent />
      </div>
      <h2 class="text-2xl font-bold mb-8">Game History</h2>
      <div>
        <GameLogsComponent />
      </div>
    </div>
  </section>
</template>
