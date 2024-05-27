<script setup>

import PlayerInfoComponent from '../components/PlayerInfoComponent.vue';
import EquippedAttacksComponent from '../components/EquippedAttacksComponent.vue';

</script>
<template>
  <section class="m-10 p-4 flex flex-col lg:flex-row lg:gap-x-10">
    <div class="flex flex-col w-1/4 justify-start">
      <section>
        <PlayerInfoComponent />
      </section>
      <section class="mt-6">
        <h4 class="text-xl text-white font-semibold m-2">Equipped Attacks</h4>
        <EquippedAttacksComponent />
      </section>
    </div>

    <div class="m-12 w-3/4 justify-center">
      <section>
        <GameFinderComponent @filter="filterGames" @search="filterGames" />
      </section>
      <section>
        <JoinComponent :games="filteredGames" />
      </section>
    </div>
  </section>
</template>


<script>
import { ref } from 'vue';
import JoinComponent from '../components/JoinComponent.vue';
import GameFinderComponent from '../components/GameFinderComponent.vue';

const games = ref([]);
const filteredGames = ref([]);

const fetchGames = () => {
  const url = `https://balandrau.salle.url.edu/i3/arenas`;
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
      games.value = data;
      filteredGames.value = data;
    })
    .catch(error => {
      console.error('Error fetching game data:', error);
    });
};

const filterGames = ({ filter, searchText }) => {
  let filtered = games.value;

  if (filter === 'started') {
    filtered = filtered.filter(game => game.start && !game.finished);
  } else if (filter === 'not_started') {
    filtered = filtered.filter(game => !game.start);
  } else if (filter === 'finished') {
    filtered = filtered.filter(game => game.finished);
  }

  if (searchText) {
    filtered = filtered.filter(game =>
      game.game_ID.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  filteredGames.value = filtered;
};

fetchGames();
</script>