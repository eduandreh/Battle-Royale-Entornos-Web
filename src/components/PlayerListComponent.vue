<script setup>
import PlayerInfoComponent from '../components/PlayerInfoComponent.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <form class="flex flex-col justify-start">
      <section class="grid gap-x-8 gap-y-4 grid-cols-3">
        <section v-for="index in playerInfoCount" :key="index">
          <PlayerInfoComponent />
        </section>
      </section>
    </form>
  </div>
</template>

<script>
export default {
  components: {
    PlayerInfoComponent,
  },
  data() {
    return {
      playerInfoCount: 9,
    };
  },
};
</script>
