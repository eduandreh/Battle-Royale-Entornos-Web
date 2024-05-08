<template>
  <article class="bg-steel p-8 rounded-lg shadow-md text-white">
    <h2 class="text-2xl font-bold mb-8">Win Rate</h2>
    <div class="flex justify-around text-sm font-medium mb-4">
      <div
        class="flex flex-row items-center space-x-2 p-4 bg-gray-900 rounded-lg"
      >
      <!-- /players/statistics -->
        <span>GAMES</span>
        <span>{{ statistics.games_played }}</span>
      </div>
      <div
        class="flex flex-row items-center space-x-2 p-4 bg-gray-900 rounded-lg"
      >
      <!-- /players/statistics -->
        <span>GAMES WON</span>
        <span>{{ statistics.games_won }}</span>
      </div>
      <div
        class="flex flex-row items-center space-x-2 p-4 bg-gray-900 rounded-lg"
      >
      <!-- /players/{id} -->
        <span>COINS</span>
        <span>{{ player.coins }}</span>
      </div>
    </div>
    <section
      class="flex justify-center items-center p-8 bg-gray-900 rounded-lg border-2 border-purple-600"
    >
      <div class="w-full bg-gray-700 rounded-full h-8">
        <!-- /players/{id} -->
        <div
          class="bg-purple-600 h-8 rounded-full flex justify-center items-center"
          :style="{ width: player.xp + '%' }"
        >
          <span class="text-white font-bold">{{ player.level }}</span>
        </div>
      </div>
    </section>
  </article>
</template>


<script>
export default {
  data() {
    return {
      player: {
        player_ID: '',
        img: '',
        coins: 0,
        level: 0,
        xp: 0,
      },
      statistics: {
        games_played: 0,
        games_won: 0
      }
    };
  },
  methods: {
    fetchPlayerData() {
      const playerId = localStorage.getItem('id-player');
      const url = `https://balandrau.salle.url.edu/i3/players/${playerId}`;
      
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
          this.player = data;
        })
        .catch(error => {
          console.error('Error fetching player data:', error);
        });
    },
    fetchPlayerStatistics() {
      const playerId = localStorage.getItem('id-player');
      const url = `https://balandrau.salle.url.edu/i3/players/${playerId}/statistics`;

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
          this.statistics = data;
        })
        .catch(error => {
          console.error('Error fetching player statistics:', error);
        });
    }
  },
  mounted() {
    this.fetchPlayerData();
    this.fetchPlayerStatistics();
  }
}
</script>
