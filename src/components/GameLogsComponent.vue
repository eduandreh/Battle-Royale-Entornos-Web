<script setup>
import GameReplayComponent from './GameReplayComponent.vue';
</script>

<template>
  <form class="flex flex-col min-h-screen">
    <div class="flex flex-col justify-start">
      <section class="grid gap-x-8 gap-y-4 grid-cols-1">
        <section v-for="game in games" :key="game.game_ID">
          <GameReplayComponent :game="game"/>
        </section>
      </section>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      games: [],
    };
  },
  methods: {
    async fetchGames() {
      const playerId = localStorage.getItem('id-player');
      const authToken = localStorage.getItem('authToken');
      const url = `https://balandrau.salle.url.edu/i3/players/${playerId}/games/finished`;

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Bearer': localStorage.getItem('authToken'), 
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        this.games = data;
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    }
  },
  mounted() {
    this.fetchGames();
  }
};
</script>