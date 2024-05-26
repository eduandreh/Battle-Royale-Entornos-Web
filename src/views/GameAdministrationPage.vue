<script setup>
import JoinComponent from '../components/JoinComponent.vue';
import GameCreationComponent from '../components/GameCreationComponent.vue';
import GameFinderComponent from '../components/GameFinderComponent.vue';
</script>
<template>
  <section class="m-14 p-4 flex lg:gap-x-12">
    <div class="w-1/3 justify-start">
      <GameCreationComponent />
    </div>
    <div class="w-2/3 justify-center">
      <section>
        <GameFinderComponent />
      </section>
      <main><JoinComponent /></main>
    </div>
  </section>
</template>
