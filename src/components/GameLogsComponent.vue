<script setup>
import GameReplayComponent from './GameReplayComponent.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <form class="flex flex-col justify-start">
      <section class="grid gap-x-8 gap-y-4 grid-cols-1">
        <section v-for="index in playerInfoCount" :key="index">
          <GameReplayComponent />
        </section>
      </section>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playerInfoCount: 5,
    };
  },
};
</script>
