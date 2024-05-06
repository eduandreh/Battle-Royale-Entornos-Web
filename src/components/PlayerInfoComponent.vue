<template>
  <article class="bg-gray-900 text-white p-4 rounded-lg shadow-lg flex flex-col items-center">
    <section class="flex items-center justify-center space-x-10 w-full">
      <img :src="player.img" alt="User" class="w-24 h-24 rounded-full mb-2"/>
      <h1 class="text-2xl font-bold">{{ player.player_ID }}</h1>
    </section>

    <section class="flex items-center justify-between space-x-10">
      <div class="flex flex-col items-center">
        <h2 class="text-lg font-semibold p-2">COINS</h2>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/battle-royale-8ef31.appspot.com/o/Game-Gold-Coin-PNG.png?alt=media&token=515825c8-c5ca-44d8-9deb-b36c6cde2b42"
          alt="Coin"
          class="w-20 h-20 mr-2 p-2"
        />
        <span class="text-lg font-semibold p-2">{{ player.coins }}</span>
      </div>

      <div class="flex flex-col items-center">
        <h2 class="text-lg font-semibold p-9">LEVEL</h2>
        <div class="w-full bg-gray-700 rounded-full h-5 overflow-hidden">
          <div class="bg-purple-600 h-5" :style="{ width: player.xp + '%' }"></div>
        </div>
        <span class="text-lg font-semibold p-9">{{ player.level }}</span>
      </div>
    </section>

    <!-- <ul class="flex justify-between w-full p-4 bg-steel rounded-3xl">
      <li class="flex flex-col items-center">
        <span class="text-sm font-semibold">Kills</span>
        <span>{{ player.level }}</span>
      </li>
      <li class="flex flex-col items-center">
        <span class="text-sm font-semibold">Games</span>
        <span>{{ player.xp }}</span>
      </li>
      <li class="flex flex-col items-center">
        <span class="text-sm font-semibold">Time</span>
        <span>{{ player.playTime }}</span>
      </li>
    </ul> -->
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
    }
  },
  mounted() {
    this.fetchPlayerData();
  }
}
</script>