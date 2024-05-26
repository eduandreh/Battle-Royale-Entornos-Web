<script setup>
import CreateAttackComponent from '../components/CreateAttackComponent.vue';
import BuyAttackComponent from '../components/BuyAttackComponent.vue';
import SellAttackComponent from '../components/SellAttackComponent.vue';
import { ref } from 'vue';

const activeTab = ref('buy');
</script>

<template>
  <section class="m-14 p-4 flex lg:gap-x-12">
    <aside class="w-1/3 justify-start">
      <CreateAttackComponent />
    </aside>

    <article class="flex flex-col w-2/3 justify-center">
      <section class="flex flex-row justify-center">
        <button
          class="m-2 p-2 pr-12 pl-12 font-bold text-white bg-buttons rounded hover:bg-hover"
          :class="{ 'border-2 border-white': activeTab === 'buy' }"
          @click="activeTab = 'buy'"
        >
          Buy
        </button>
        <button
          class="m-2 p-2 pr-12 pl-12 font-bold text-white bg-buttons rounded hover:bg-hover"
          :class="{ 'border-2 border-white': activeTab === 'sell' }"
          @click="activeTab = 'sell'"
        >
          Sell
        </button>
      </section>
      <section v-show="activeTab === 'buy'">
        <BuyAttackComponent />
      </section>

      <section v-show="activeTab === 'sell'">
        <SellAttackComponent />
      </section>
    </article>
  </section>
</template>
