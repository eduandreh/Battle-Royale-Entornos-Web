<template>
    <div>
      <button
        class="bg-buttons text-white font-bold py-2 px-4 rounded m-2"
        @click="fetchDeletePlayer"
      >
        Leave Game
      </button>
    </div>
  </template>
  
  <script>
  export default {
    
  methods: {
      fetchPlayerData() {
        const url = `https://balandrau.salle.url.edu/i3/players/`;
  
        const headers = new Headers();
        headers.append('Authorization', `Bearer ${localStorage.getItem('authToken')}`);
        headers.append('Content-Type', 'application/json');
  
        fetch(url, { method: 'GET', headers: headers })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            this.player = data;
          })
          .catch((error) => {
            console.error('Error fetching player data:', error);
          });
      },
    },
    mounted() {
      this.fetchPlayerData();
    },
  };
  </script>
