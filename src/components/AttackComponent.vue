<template>
  
    <section v-if="attack" class="flex flex-row gap-12 justify-center m-5">
      <article class="bg-buttons p-6 rounded-lg text-center">
        <img
          class="rounded-lg w-40 h-40"
          src= "https://firebasestorage.googleapis.com/v0/b/battle-royale-8ef31.appspot.com/o/Mask%20group%20(2).png?alt=media&token=e5dd47e6-2e39-49c8-9b5e-cafa9c24958f"
          alt="Handful of Buncoin"
        />
        <h4 class="mt-2">{{attack.attack_ID}}</h4>
      </article>
      
    </section>
  </template>

<script>

export default {
    name: 'AttackComponent',
  props: {
    attack: {
        type: Object,
        required: true
      
    },
    

}
}
</script>