<script setup>
import JoinComponent from '../components/JoinComponent.vue';
import PlayerInfoComponent from '../components/PlayerInfoComponent.vue';
import EquipAttacksComponent from '../components/EquipAttacksComponent.vue';

</script>
<template>
  <section class="m-14 p-4 flex flex-col lg:flex-row lg:gap-x-10">
  <div class="flex flex-col w-1/4  justify-start">
    <section>
    <PlayerInfoComponent />
  </section>
    <!-- <section style="transform: scale(0.8);">
    <EquipAttacksComponent />
  </section> -->
  </div>
  
  <div class="w-3/4 justify-center">
    <section >
    <JoinComponent />
  </section>
  
  </div>
</section>

  
</template>