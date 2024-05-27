<template>
  <section class="m-14 p-4 flex lg:gap-x-12">
    <div class="w-1/3 justify-start">
      <GameCreationComponent />
    </div>
    <div class="w-2/3 justify-center">
      <section>
        <GameFinderComponent @filter="filterGames" @search="filterGames" />
      </section>
      <main>
        <JoinComponent :games="filteredGames" />
      </main>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import JoinComponent from '../components/JoinComponent.vue';
import GameCreationComponent from '../components/GameCreationComponent.vue';
import GameFinderComponent from '../components/GameFinderComponent.vue';

const games = ref([]);
const filteredGames = ref([]);

const fetchGames = () => {
  const url = `https://balandrau.salle.url.edu/i3/arenas`;
  const headers = {
    Bearer: localStorage.getItem('authToken'),
    'Content-Type': 'application/json',
  };

  fetch(url, { method: 'GET', headers: headers })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      games.value = data;
      filteredGames.value = data;
    })
    .catch((error) => {
      console.error('Error fetching game data:', error);
    });
};

const filterGames = ({ filter, searchText }) => {
  let filtered = games.value;

  if (filter === 'started') {
    filtered = filtered.filter((game) => game.start && !game.finished);
  } else if (filter === 'not_started') {
    filtered = filtered.filter((game) => !game.start);
  } else if (filter === 'finished') {
    filtered = filtered.filter((game) => game.finished);
  }

  if (searchText) {
    filtered = filtered.filter((game) =>
      game.game_ID.toLowerCase().includes(searchText.toLowerCase()),
    );
  }

  filteredGames.value = filtered;
};

fetchGames();
</script>
