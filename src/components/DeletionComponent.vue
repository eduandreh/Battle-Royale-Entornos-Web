<template>
  <div>
    <button class="bg-buttons text-white font-bold py-2 px-4 rounded m-2" @click="fetchDeletePlayer">Delete Player</button>
  </div>
</template>

<script>
export default {
  methods: {
    fetchDeletePlayer() {
      const url = `https://balandrau.salle.url.edu/i3/players/`;

      const headers = new Headers({
        'Bearer' : localStorage.getItem('authToken'),
        'Content-Type': 'application/json'
      });

      fetch(url, { method: 'DELETE', headers: headers })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); 
        })
        .then(data => {
          console.log('Player deleted:', data);
          this.$router.push('/login'); 
        })
        .catch(error => {
          console.error('Error deleting player:', error);
        });
    }
  },
  mounted() {
    this.fetchDeletePlayer();
  }
}

</script>