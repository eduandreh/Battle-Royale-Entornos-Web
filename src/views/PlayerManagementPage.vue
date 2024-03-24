<script setup>
import JoinComponent from '../components/JoinComponent.vue';
import PlayerInfoComponent from '../components/PlayerInfoComponent.vue';
import EquippedAttacksComponent from '../components/EquippedAttacksComponent.vue';
import GameFinderComponent from '../components/GameFinderComponent.vue';

</script>
<template>
  <section class="m-10 p-4 flex flex-col lg:flex-row lg:gap-x-10">
  <div class="flex flex-col w-1/4  justify-start">
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
    <GameFinderComponent />
    </section>
    <section >
    <JoinComponent />
  </section>
  
  </div>
</section>

  
</template>