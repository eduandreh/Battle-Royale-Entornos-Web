<template>
  <div class="flex flex-col min-h-screen">
    <section class="grid gap-x-8 gap-y-4 grid-cols-1 p-5">
      <section v-for="player in filteredPlayers" :key="player.player_ID" class="w-full bg-gray-900 text-white p-4 rounded-lg shadow-lg flex flex-col items-center">
        <section class="flex items-center justify-between space-x-8 w-full p-5">
          <h1 class="text-2xl font-bold">Player: {{ player.player_ID }}</h1>
          <h1 class="text-2xl font-bold">Level: {{ player.level }}</h1>
          <h1 class="text-2xl font-bold">Coins: {{ player.coins }}</h1>
          <h1 class="text-2xl font-bold">Xp: {{ player.xp }}</h1>
        </section>
      </section>
    </section>
  </div>
</template>

<script>
export default defineComponent({
  props: {
    filterText: String
  },
  data() {
    return {
      players: []
    };
  },
  computed: {
    sortedPlayers() {
      const sorted = this.players.sort((a, b) => b.xp - a.xp);
      return sorted;
    },
    filteredPlayers() {
      return this.sortedPlayers.filter(player =>
        player.player_ID.toLowerCase().includes(this.filterText.toLowerCase())
      );
    }
  },
  methods: {
    fetchPlayers() {
      const url = `https://balandrau.salle.url.edu/i3/players`;
      
      const headers = {
        'Bearer': localStorage.getItem('authToken'), 
        'Content-Type': 'application/json'
      };

      fetch(url, { method: 'GET', headers: headers })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          this.players = data;
          console.log('Updated players data:', this.players);
        })
        .catch(error => {
          console.error('Error fetching player data:', error);
        });
    },
  },
  mounted() {
    this.fetchPlayers();
  }
})
</script>
