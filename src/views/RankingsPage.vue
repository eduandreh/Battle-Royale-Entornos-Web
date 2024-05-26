<script setup>
import { ref } from 'vue';
import PlayerListComponent from '../components/PlayerListComponent.vue';
import PlayerInfoComponent from '../components/PlayerInfoComponent.vue';

const searchText = ref('');

const handleSearch = () => {};
</script>

<template>
  <section class="m-14 p-4 flex lg:gap-x-10">
    <div class="justify-start w-1/4">
      <PlayerInfoComponent />
    </div>
    <form
      @submit.prevent="handleSearch"
      class="flex-grow flex flex-col justify-start"
    >
      <nav class="flex flex-row w-full gap-4">
        <input
          type="text"
          v-model="searchText"
          class="bg-placeholder rounded-xl p-6 mb-8 w-3/4 text-lg"
          placeholder="Find player by name"
          style="height: 3rem"
        />
        <button
          class="bg-buttons text-white rounded-md w-1/6"
          style="height: 3rem"
        >
          Search
        </button>
      </nav>
      <div class="justify-start w-full">
        <PlayerListComponent :filterText="searchText" />
      </div>
    </form>
  </section>
</template>
