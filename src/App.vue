<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import { RouterView } from 'vue-router';
import { isUserAuthenticated } from './router';
const isAuthenticated = isUserAuthenticated();
import CreationPlayerPage from './views/CreationPlayerPage.vue';
</script>

<template>
  <template v-if="isAuthenticated">
    <header><HeaderComponent /></header>
    <RouterView />
  </template>
  <CreationPlayerPage v-else />
</template>

