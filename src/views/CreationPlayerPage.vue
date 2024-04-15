<script setup>
import LoginComponent from '../components/LoginComponent.vue';
</script>

<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2
        class="text-center text-2xl font-bold leading-9 tracking-tight text-white"
      >
        Welcome to Battle Royale!
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <LoginComponent />
    </div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <RegisterComponent />
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Count: 6,
    };
  },
};
</script>
