<script setup>
import ArenaGridComponent from '../components/ArenaGridComponent.vue';
import EquippedAttacksComponent from '../components/EquippedAttacksComponent.vue';
import MovementComponent from '../components/MovementComponent.vue';
import GameEndComponent from '../components/GameEndComponent.vue';

</script>

<template>
  <section class="relative">
    <section class="justify-center align-center flex-1">
      <h1 class="text-3xl font-bold mt-10 mx-20">Battle Royal Game</h1>
      <ArenaGridComponent />
    </section>
    <section class="absolute bottom-2 left-20">
      <h3 class="text-xl text-white font-semibold m-2">Equipped Attacks</h3>
      <EquippedAttacksComponent />
    </section>
    <section class="absolute bottom-12 right-40 m-5 p-5">
      <MovementComponent />
    </section>
    <section class="absolute bottom-0 right-40 ">
      <GameEndComponent />
    </section>
  </section>
</template>
