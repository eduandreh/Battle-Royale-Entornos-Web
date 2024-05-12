<template>
  <section class="flex flex-col min-h-screen">
    <h2 class="text-2xl font-bold mb-4">Buy Attack</h2>
    <article class="grid grid-cols-3 gap-5">
      <section
        class="bg-steel text-white p-4 rounded-lg shadow-lg flex flex-col items-center"
        v-for="attack in attacks.slice(0, 9)"
        :key="attack.attack_ID"
      >
        <h3 class="mt-2">Nombre: {{ attack.attack_ID }}</h3>
        <h4>Posiciones: {{ attack.positions }}</h4>
        <h4 class="text-xl font-bold">$ {{ attack.price }}</h4>
        <button class="bg-buttons text-white p-2 rounded-md w-1/2 m-5">
          Buy: {{ attack.price }} coins
        </button>
      </section>
    </article>
  </section>
</template>



<script>
export default {
  data() {
    return {
      attacks: [
        {attack_ID: '',
        positions: '',
        img: '',
        power: 0,
        price: 0,
        level_needed: 0,
        on_sale: true}
      ]
    };
  },
  methods: {
    fetchAttackData() {
      const url = `https://balandrau.salle.url.edu/i3/shop/attacks`;
      
      const headers = {
        'Bearer': localStorage.getItem('authToken'), 
        'Content-Type': 'application/json'
      };

      fetch(url, { method: 'GET', headers: headers })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          this.attacks = data; 
        })
        .catch(error => {
          console.error('Error fetching attack data:', error);
        });
    }
  },
  mounted() {
    this.fetchAttackData();
  }
}
</script>
