<template>
  <section class="flex flex-col min-h-screen">
    <h2 class="text-2xl font-bold mb-4">Sell Attack</h2>
    <form class="flex flex-col">
      <div class="grid grid-rows-3 grid-flow-col gap-5">
        <article
          class="bg-steel text-white p-4 rounded-lg shadow-lg flex flex-col items-center"
          v-for="index in Count"
          :key="index"
        >
          <img
            class="w-24 h-24"
            src="https://firebasestorage.googleapis.com/v0/b/battle-royale-8ef31.appspot.com/o/Mask%20group%20(1).png?alt=media&token=46348657-f7cc-4dd8-beed-d1d2426abc8a"
            alt="Descripción de la imagen 1"
          />
          <h3 class="mt-2">Handfull of Buncoin</h3>
          <button class="bg-buttons text-white p-2 rounded-md w-1/2 mt-8">
            Sell
          </button>
        </article>
      </div>
    </form>
  </section>
</template>


<script>
export default {
  data() {
    return {
      Count: 9,
    };
  },
};
</script>
