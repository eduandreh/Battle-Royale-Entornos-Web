<template>
    <div class="flex flex-col min-h-screen">
        <h2 class="text-2xl font-bold mb-4">What do you want to play?</h2>
        <form class="flex flex-col justify-start">
            <nav class="flex flex-row w-full gap-4 "> 
                <input type="text" class="bg-placeholder rounded-xl p-4 mb-4 w-3/4" placeholder="Search for favorite game" />
                <button class="bg-buttons text-white rounded-md w-1/4 h-10 ">Filter</button>
            </nav>
            <section class="grid grid-rows-3 grid-flow-col gap-4 m-5"> 
                <section v-for="index in AvailableGamesCount" :key="index">
                    <img src="https://via.placeholder.com/188x100" alt="Descripción de la imagen 1">
                    <h3>Title 1</h3>
          </section>
                
                
            </section>
            <router-link to="/game"><button class="bg-buttons text-white p-2 rounded-md w-1/2 mt-8"> Join </button>
</router-link>

        </form>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        AvailableGamesCount: 9 
      };
    }
  };
  </script>