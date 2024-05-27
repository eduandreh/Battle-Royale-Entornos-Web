<template>
  <section class="flex flex-col min-h-screen">
    <h1 class="text-2xl font-bold mb-4">Buy Attack</h1>
    <div class="grid grid-cols-3 gap-5">
      <article
        class="bg-steel text-white p-4 rounded-lg shadow-lg flex flex-col items-center"
        v-for="attack in attacks.slice(0, 12)"
        :key="attack.attack_ID"
      >
        <h2 class="mt-2">Nombre: {{ attack.attack_ID }}</h2>
        <p>Posiciones: {{ attack.positions }}</p>
        <p class="text-xl font-bold">$ {{ attack.price }}</p>
        <button class="bg-buttons text-white p-2 rounded-md w-1/2 m-5">
          Buy: {{ attack.price }} coins
        </button>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      attacks: [
        {
          attack_ID: '',
          positions: '',
          img: '',
          power: 0,
          price: 0,
          level_needed: 0,
          on_sale: true,
        },
      ],
    };
  },
  methods: {
    fetchAttackData() {
      const url = `https://balandrau.salle.url.edu/i3/shop/attacks`;

      const headers = {
        Bearer: localStorage.getItem('authToken'),
        'Content-Type': 'application/json',
      };

      fetch(url, { method: 'GET', headers: headers })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          this.attacks = data;
        })
        .catch((error) => {
          console.error('Error fetching attack data:', error);
        });
    },
  },
  mounted() {
    this.fetchAttackData();
  },
};
</script>
