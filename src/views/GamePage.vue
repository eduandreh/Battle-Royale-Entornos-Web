<script setup>
import ArenaGridComponent from '../components/ArenaGridComponent.vue';
import EquippedAttacksComponent from '../components/EquippedAttacksComponent.vue';
</script>

<template>
  <section class="relative">
    <section class="justify-center align-center flex-1">
      <ArenaGridComponent />
    </section>
    <section class="absolute bottom-0 left-20">
      <EquippedAttacksComponent />
    </section>
  </section>
</template>
