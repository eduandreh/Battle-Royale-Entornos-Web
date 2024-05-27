<template>
  <div class="flex min-h-full flex-1 flex-col justify-center">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent="RegisterUser" class="space-y-6">
        <div>
          <label
            for="username"
            class="block text-sm font-medium leading-6 text-white"
            >Username</label
          >
          <div class="mt-2">
            <input
              v-model="user.player_ID"
              id="username"
              name="username"
              type="text"
              autocomplete="username"
              required
              class="p-4 block w-full rounded-md border-0 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label
            for="password"
            class="block text-sm font-medium leading-6 text-white"
            >Password</label
          >
          <div class="mt-2">
            <input
              v-model="user.password"
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="p-4 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-buttons sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <h4 class="font-semibold">Avatar</h4>
        <section class="grid grid-rows-2 grid-flow-col gap-5">
          <div
            v-for="(img, index) in images"
            :key="index"
            class="cursor-pointer"
          >
            <img
              :src="img.src"
              :alt="'Image ' + (index + 1)"
              @click="selectImage(img)"
              :class="{ 'ring-4 ring-indigo-500': selectedImage === img }"
              class="rounded-md hover:ring-2 hover:ring-indigo-300 transition-all"
            />
          </div>
        </section>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center mt-8 rounded-md bg-buttons px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-buttons focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-buttons"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'RegisterComponent',
  setup() {
    const user = ref({
      player_ID: '',
      password: '',
      img: '',
    });

    const images = ref([
      {
        src: 'https://firebasestorage.googleapis.com/v0/b/battle-royale-8ef31.appspot.com/o/Web3%20Avatar%206.png?alt=media&token=d04a0152-15bf-48aa-90ae-79df3a61b3f1',
      },
      {
        src: 'https://firebasestorage.googleapis.com/v0/b/battle-royale-8ef31.appspot.com/o/Web3%20Avatar-2.png?alt=media&token=13fed6fc-4157-4bcc-ae00-770526d5a4d8',
      },
      {
        src: 'https://firebasestorage.googleapis.com/v0/b/battle-royale-8ef31.appspot.com/o/Web3%20Avatar-3.png?alt=media&token=10b7ba8a-e057-489b-b703-2840b5448d77',
      },
      {
        src: 'https://firebasestorage.googleapis.com/v0/b/battle-royale-8ef31.appspot.com/o/female%2015.png?alt=media&token=4ffc5397-3e80-4577-89f5-715bb9973532',
      },
      {
        src: 'https://firebasestorage.googleapis.com/v0/b/battle-royale-8ef31.appspot.com/o/Web3%20Avatar.png?alt=media&token=d7252ac3-2052-44cc-854f-1bffadc2455f',
      },
      {
        src: 'https://firebasestorage.googleapis.com/v0/b/battle-royale-8ef31.appspot.com/o/Web3%20Avatar-1.png?alt=media&token=8c4d4a53-05fd-4141-a6b8-1de7f99c35da',
      },
    ]);

    const selectedImage = ref(null);

    const selectImage = (img) => {
      selectedImage.value = img;
      user.value.img = img.src;
    };

    const RegisterUser = () => {
      const apiURL = 'https://balandrau.salle.url.edu/i3/players';
      fetch(apiURL, {
        method: 'POST',

        headers: { 'Content-Type': 'application/json' },

        body: JSON.stringify(user.value),
      })
        .then((response) => {
          if (response.ok && response.status === 201) {
            alert('Register successful! Please login to continue');
          } else {
            throw new Error(`Register failed: ${response.status}`);
          }
        })
        .then(alert('Register successful! Please login to continue'))
        .catch((error) => {
          console.error('Error:', error);
          alert('Registration failed: ' + error.message);
        });
    };

    return { user, RegisterUser, images, selectedImage, selectImage };
  },
};
</script>
