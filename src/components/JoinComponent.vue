<template>
  <section class="flex flex-col min-h-screen">
    <form class="flex flex-col justify-start">
      <section class="grid grid-rows-3 grid-flow-col gap-4 m-5">
        <article v-for="index in AvailableGamesCount" :key="index">
          <div class="bg-steel text-white p-4 rounded-lg shadow-lg flex flex-col items-center">
            <h3 class="mt-2">Game</h3>
            <h3 class="mt-2">Date:</h3>
            <h3 class="mt-2">Player:</h3>
          </div>
          <h1>Game 10x6</h1>
        </article>
      </section>

      <router-link to="/game">
        <button type="submit" class="bg-buttons text-white p-2 rounded-md w-1/2 mt-8">
          Join
        </button>
      </router-link>
    </form>
  </section>
</template>


<script>
export default {
  data() {
    return {
      AvailableGamesCount: 9,
    };
  },
};
</script>
