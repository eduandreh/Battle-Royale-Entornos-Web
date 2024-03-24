<template>
  <div class="flex flex-col min-h-screen">
    <form class="flex flex-col justify-start">
      <section class="grid grid-rows-3 grid-flow-col gap-4 m-5">
        <section v-for="index in AvailableGamesCount" :key="index">
          <img
            class="w-48 h-28"
            src="https://firebasestorage.googleapis.com/v0/b/battle-royale-8ef31.appspot.com/o/Rectangle%206496.png?alt=media&token=80a5f0cc-1a84-42a6-83c6-d3188800bdba"
            alt="Descripción de la imagen 1"
          />
          <h3>Game 10x6</h3>
        </section>
      </section>

      <router-link to="/game"
        ><button class="bg-buttons text-white p-2 rounded-md w-1/2 mt-8">
          Join
        </button>
      </router-link>
    </form>
  </div>
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
