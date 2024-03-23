<template>
    <div class="flex flex-col min-h-screen">
        <h2 class="text-2xl font-bold mb-4">Sell Attack</h2>
        <form class="flex flex-col">
            <section class="grid grid-rows-3 grid-flow-col gap-5"> 
                <section class="bg-steel text-white p-4 rounded-lg shadow-lg flex flex-col items-center" v-for="index in Count" :key="index">
                    <img src="https://via.placeholder.com/100x100" alt="Descripción de la imagen 1">
                    <h3 class="mt-2">Handfull of Buncoin</h3>
                    <button class="bg-buttons text-white p-2 rounded-md w-1/2 mt-8 ">Sell</button>
          </section>
                
                
            </section>
            
        </form>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        Count: 9
    };
    }
  };
  </script>