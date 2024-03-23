<template>
    <h3 class="text-xl font-bold mt-10 mx-40">Battle Royal Game</h3>
    <div class="flex flex-row justify-center m-">
        <section class="grid grid-rows-5 grid-flow-col gap-5">
            <section class="bg-steel text-white p-10 rounded-lg shadow-lg flex flex-col items-center" v-for="index in Count" :key="index">              
            </section>   
        </section>  
    </div>         
</template>

<script>
export default {
    data() {
        return {
            Count: 30
        };
    }
};
</script>
