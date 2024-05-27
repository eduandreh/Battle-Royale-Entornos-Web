<template>
  <section class="flex flex-col min-h-screen">
    <section class="grid grid-cols-2 gap-4 m-5 overflow-y-auto">
      <article v-for="game in filteredGames" :key="game.game_ID" class="flex flex-col items-center bg-placeholder text-white rounded-lg shadow-lg">
        <h3 class="mt-2">Game: {{ game.game_ID }}</h3>
        <h3 class="mt-2">Date: {{ formatDate(game.creation_date) }}</h3>
        <h3 class="mt-2">Players: {{ game.players_games.length }}</h3>
        <h1>Game {{ game.size }}x{{ game.size }}</h1>
        <router-link v-if="!game.start" to="/game">
          <button type="button" class="bg-buttons text-white p-2 rounded-md w-full mt-4">
            Join
          </button>
        </router-link>
      </article>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    games: Array,
  },
  computed: {
    filteredGames() {
      return this.games.filter(game => !game.start);
    }
  },
  methods: {
    formatDate(dateString) {
      const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
      const date = new Date(dateString);
      return date.toLocaleDateString(undefined, options);
    },
  },
};
</script>