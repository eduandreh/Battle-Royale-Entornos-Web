<template>
    <div class="bg-placeholder flex flex-col min-h-screen">
        <h3 class="text-xl font-bold mt-10 mx-40">Inventory</h3>
        <form class="flex flex-col">
            <section class=" grid grid-rows-4 grid-flow-col gap-8 m-5 justify-center">
                <section class="bg-steel text-white p-6 rounded-lg shadow-lg flex flex-col items-center" v-for="index in Count" :key="index">
                    <img class="rounded-lg" src="https://via.placeholder.com/70x70" alt="Descripción de la imagen 1">
                    
          </section>
                
                
            </section>
            
        </form>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        Count: 24 
      };
    }
  };
  </script>