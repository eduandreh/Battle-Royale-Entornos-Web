<template>
  <form @submit.prevent="loginUser" class="space-y-6">
    <div>
      <label for="email" class="block text-sm font-medium leading-6 text-white">Email address</label>
      <div class="mt-2">
        <input v-model="user.email" id="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Enter your email"/>
      </div>
    </div>

    <div>
      <label for="password" class="block text-sm font-medium leading-6 text-white">Password</label>
      <div class="mt-2">
        <input v-model="user.password" id="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-buttons sm:text-sm sm:leading-6" placeholder="Enter your password"/>
      </div>
    </div>

    <div>
      <button type="submit" class="flex w-full justify-center mt-8 rounded-md bg-buttons px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-buttons focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-buttons">Sign in</button>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue';
import { saveToken } from '../utils/auth';  // Utility function to save token

export default {
  name: "LoginComponent",
  setup() {
    const user = ref({
      email: '',
      password: ''
    });

    const loginUser = () => {
      const apiURL = 'https://balandrau.salle.url.edu/i3/players/join';  // Update with your actual API URL
      fetch(apiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user.value)
      })
      .then(response => response.json())
      .then(data => {
        if (data.token) {
          saveToken(data.token);  
        } else {
          throw new Error('Authentication failed');  
        }
      })
      .catch(error => {
        console.error('Login Error:', error);
        alert("Authentication error, please check your username and password");
      });
    };

    return { user, loginUser };
  }
}
</script>
