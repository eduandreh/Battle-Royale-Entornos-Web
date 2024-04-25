<template>
  <form @submit.prevent="loginUser" class="space-y-6">
    <div>
      <label for="email" class="block text-sm font-medium leading-6 text-white">Email</label>
      <div class="mt-2">
        <input v-model="user.player_ID" id="player_ID" type="text" autocomplete="text" required class="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Enter your email"/>
      </div>
    </div>

    <fieldset>
      <label for="password" class="block text-sm font-medium leading-6 text-white">Password</label>
      <input v-model="user.password" id="password" type="password" autocomplete="current-password" required class="mt-2 block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-buttons sm:text-sm sm:leading-6" placeholder="Enter your password"/>
    </fieldset>

    <button type="submit" class="flex w-full justify-center mt-8 rounded-md bg-buttons px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-buttons focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-buttons">Sign in</button>
  </form>
</template>


<script>
import { ref } from 'vue';
import { saveToken, isAuthenticated } from '../utils/auth';  // Utility function to save token
import { useRouter } from 'vue-router';



export default {
  name: "LoginComponent",
  setup() {
    const user = ref({
      player_ID: '',
      password: '',
      img: ''

    });
    const router = useRouter();

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
        console.log(user.value);
        if (data.token) {
          console.log('Login successful:', data.token);
          saveToken(data.token); 
          isAuthenticated.value = true; 
          router.push('/');
          window.location.reload();
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
