<script setup>
import LoginComponent from '../components/LoginComponent.vue';
import RegisterComponent from '../components/RegisterComponent.vue';
</script>

<template>
  <section class="flex flex-row h-screen">
  <div
    class="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h1
        class="text-center text-3xl font-bold leading-9 tracking-tight text-white"
      >
        Welcome to Battle Royale!
      </h1>
    </div>

    <div v-show="showLogin" class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <LoginComponent />
    </div>
    <div v-show="!showLogin" class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <RegisterComponent />
      </div>
      <p class="mt-6 text-center text-sm text-gray-600">
        <button @click="toggleView" class="font-medium text-indigo-600 hover:text-indigo-500">
          {{ showLogin ? "Don't have a player? Register here" : "Already have a player? Login here" }}
        </button>
      </p>
  </div>
  <section class="flex flex-1 flex col">
    <img class="w-full h-screen object-cover" src="https://firebasestorage.googleapis.com/v0/b/battle-royale-8ef31.appspot.com/o/1000_F_590653427_7twYGD4CQQd9Ss7yz0pCklMEaJxe.jpg?alt=media&token=50b741b7-f712-408d-9597-b1b2bcddf99b" alt="Login-background-image">
  </section>
    </section>
</template>

<script>
export default {
  data() {
    return {
      showLogin: true, 
    };
  },
  methods: {
    toggleView() {
      this.showLogin = !this.showLogin; 
    }
  }
};
</script>
