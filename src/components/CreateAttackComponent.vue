<template>
  <section class="flex flex-col">
    <h2 class="text-2xl font-bold mb-4">Create Attack</h2>
    <form @submit.prevent="CreateAttackComponent" class="flex flex-col justify-start">
      <section class="flex flex-col">
        <label for="gameName" class="text-sm">Name</label>
        <input
          v-model="attack.attack_ID"
          type="text"
          id="gameName"
          class="bg-placeholder rounded-xl p-4 mb-4 w-3/4 mt-2"
          placeholder="Attack Name"
        />
      </section>
      <section class="flex flex-col">
        <label for="gameName" class="text-sm">Coordinates (x,y)</label>
        <input
          v-model="attack.positions"
          type="text"
          id="gameName"
          class="bg-placeholder rounded-xl p-4 mb-4 w-3/4 mt-2"
          placeholder="Ex: (1,2)"
        />
      </section>

      <button
      type="submit"
       class="bg-buttons text-white p-2 rounded-md w-1/2 mt-8">
        Create Attack
      </button>
    </form>
  </section>
</template>

<script>
import { ref } from 'vue';

export default {
  name: "CreateAttackComponent",
  setup() {
    const attack = ref({
      attack_ID: '',
      positions: '',
      img: 'pruena.jpg',
    });

    const CreateAttackComponent = () => {
    
      const apiURL = 'https://balandrau.salle.url.edu/i3/shop/attacks';
      fetch(apiURL, {
        method: 'POST',

        headers: { 'Bearer': localStorage.getItem('authToken'),
                   'Content-Type': 'application/json' },

        body: JSON.stringify(attack.value)
      })
      .then(response => {
    if (response.ok && response.status === 201) {
      
        console.log('Creation successful, no content to return.');
        
      
    } else {
      throw new Error(`Creation failed: ${response.status}`);
    }
  })
      .then(data => {
        console.log('Creation successful:', data);
      })
      .catch(error => {
        console.error('Error:', error);
        console.log(JSON.stringify(attack.value));
        alert('Creation failed: ' + error.message);
      });
    };

    return { attack, CreateAttackComponent };
  },
};

</script>
