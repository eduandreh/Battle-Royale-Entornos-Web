<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <header><HeaderComponent /></header>

  <RouterView />
</template>
