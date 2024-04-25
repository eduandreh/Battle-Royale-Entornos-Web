<template>
    <div class="flex min-h-full flex-1 flex-col justify-center">
  
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-white"
              >Email</label
            >
            <div class="mt-2">
              <input
                v-model="user.player_ID"
                id="email"
                name="email"
                type="email"
                autocomplete="Please Enter your Username"
                required=""
                class="p-4 block w-full rounded-md border-0 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
  
          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-white"
                >Password</label
              >
            </div>
            <div class="mt-2">
              <input
              v-model="user.password"
                id="password"
                name="password"
                type="password"
                autocomplete="Please Enter your Username"
                required=""
                class="p-4 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-buttons sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <h4 class="font-semibold">Avatar</h4>
          <section class="grid grid-rows-2 grid-flow-col gap-5">
            <section
              class="flex flex-col items-center"
              v-for="index in avatarUrls"
              :key="index"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/battle-royale-8ef31.appspot.com/o/Web3%20Avatar.png?alt=media&token=15ad53df-9078-411d-b148-692af9062855https://firebasestorage.googleapis.com/v0/b/battle-royale-8ef31.appspot.com/o/Web3%20Avatar.png?alt=media&token=15ad53df-9078-411d-b148-692af9062855"
                alt="User"
                class="w-20 h-20 rounded-full mb-2"
              />
            </section>
          </section>
          <div>
            <button
              type="submit"
              class="flex w-full justify-center mt-8 rounded-md bg-buttons px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-buttons focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-buttons"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  export default {
  data() {
    return {
      user: ref({
        player_ID: '',
        password: '',
        img: '',
      }),
      avatarUrls: [
        // Replace these with actual URLs for your 6 avatar images
        'https://example.com/avatar1.png',
        'https://example.com/avatar2.png',
        // ... add more avatar URLs
      ],
    };
  },
  methods: {
    RegisterUser() {
      const apiURL = 'https://balandrau.salle.url.edu/i3/players';
      fetch(apiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.user.value),
      })
        .then(response => response.json())
        .catch(error => {
          console.error('Error:', error);
        });
    },
  },
  // Add error handling for the form submission
  mounted() {
    // Check if avatarUrls has at least one URL
    if (this.avatarUrls.length === 0) {
      console.error('Error: No avatar URLs provided in avatarUrls array.');
    }
  },
};
  </script>