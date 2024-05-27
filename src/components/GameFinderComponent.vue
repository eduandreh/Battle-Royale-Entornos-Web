<template>
  <section>
    <h1 class="text-2xl font-bold mb-4">What do you want to play?</h1>
    <form class="flex flex-col justify-start mb-4" @submit.prevent="handleSearch">
      <div class="flex flex-row w-full gap-4 mb-4">
        <input
          type="text"
          v-model="searchText"
          class="bg-placeholder rounded-xl p-4 w-3/4"
          placeholder="Search for favorite game"
        />
        <button class="bg-buttons text-white rounded-md w-1/4 h-10">
          Search
        </button>
      </div>
      <div class="flex flex-row w-full gap-4">
        <button @click="filterGames('all')" type="button" class="bg-buttons text-white rounded-md w-1/4 h-10">
          All
        </button>
        <button @click="filterGames('started')" type="button" class="bg-buttons text-white rounded-md w-1/4 h-10">
          Started
        </button>
        <button @click="filterGames('not_started')" type="button" class="bg-buttons text-white rounded-md w-1/4 h-10">
          Not Started
        </button>
        <button @click="filterGames('finished')" type="button" class="bg-buttons text-white rounded-md w-1/4 h-10">
          Finished
        </button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      searchText: '',
      filter: 'all',
    };
  },
  methods: {
    filterGames(filter) {
      this.filter = filter;
      this.$emit('filter', { filter, searchText: this.searchText });
    },
    handleSearch() {
      this.$emit('search', { filter: this.filter, searchText: this.searchText });
    },
  },
};
</script>