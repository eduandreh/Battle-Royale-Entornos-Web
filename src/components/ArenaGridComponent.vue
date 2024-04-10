<template>
  <section class="flex flex-row justify-center m-">
    <div class="grid grid-rows-5 grid-flow-col gap-5">
      <section
        class="bg-steel text-white p-10 rounded-lg shadow-lg flex flex-col items-center"
        v-for="index in Count"
        :key="index"
      ></section>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      Count: 30,
    };
  },
};
</script>
