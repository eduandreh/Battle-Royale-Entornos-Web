<template>
  <template v-if="isAuthenticated">
    <header><HeaderComponent /></header>
    <RouterView />
  </template>
  <CreationPlayerPage v-else />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import HeaderComponent from './components/HeaderComponent.vue';
import CreationPlayerPage from './views/CreationPlayerPage.vue';
import { RouterView } from 'vue-router';
import { isAuthenticated as checkAuth } from './utils/auth';

const isAuthenticated = ref(false);
onMounted(() => {
  isAuthenticated.value = checkAuth();
});

</script>
