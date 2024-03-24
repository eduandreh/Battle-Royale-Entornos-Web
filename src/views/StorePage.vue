<script setup>
import CreateAttackComponent from '../components/CreateAttackComponent.vue';
import BuyAttackComponent from '../components/BuyAttackComponent.vue';
import SellAttackComponent from '../components/SellAttackComponent.vue';
</script>

<template>
  <section class="m-14 p-4 flex lg:gap-x-12">
    <aside class="w-1/3 justify-start">
      <CreateAttackComponent />
    </aside>

    <article class="flex flex-col w-2/3 justify-center">
      <section>
        <BuyAttackComponent />
      </section>

      <section class="mt-10">
        <SellAttackComponent />
      </section>
    </article>
  </section>
</template>
