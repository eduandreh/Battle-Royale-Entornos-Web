<template>
  <section class="bg-placeholder flex flex-col min-h-screen">
    <h1 class="text-xl font-bold mt-10 mx-40">Inventory</h1>
    <form class="flex flex-col">
      <div class="grid grid-rows-4 grid-flow-col gap-8 m-5 justify-center">
        <article
          class="bg-steel text-white p-6 rounded-lg shadow-lg flex flex-col items-center"
          v-for="index in Count"
          :key="index"
        >
          <img
            class="rounded-lg w-20 h-20"
            src="https://firebasestorage.googleapis.com/v0/b/battle-royale-8ef31.appspot.com/o/Mask%20group.png?alt=media&token=2bacb511-4213-4718-ab65-242e1b4f426e"
            alt="Descripción de la imagen 1"
          />
        </article>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      Count: 24,
    };
  },
};
</script>
