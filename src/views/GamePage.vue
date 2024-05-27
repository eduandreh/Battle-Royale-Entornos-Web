<script setup>
import ArenaGridComponent from '../components/ArenaGridComponent.vue';
import EquippedAttacksComponent from '../components/EquippedAttacksComponent.vue';
import MovementComponent from '../components/MovementComponent.vue';
</script>

<template>
  <section class="relative">
    <section class="justify-center align-center flex-1">
      <h2 class="text-2xl font-bold mt-10 mx-20">Battle Royal Game</h2>
      <ArenaGridComponent />
    </section>
    <section class="absolute bottom-2 left-20">
      <h4 class="text-xl text-white font-semibold m-2">Equipped Attacks</h4>
      <EquippedAttacksComponent />
    </section>
    <section class="absolute bottom-12 right-40">
      <MovementComponent />
    </section>
  </section>
</template>
