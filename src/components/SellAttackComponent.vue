<template>
  <section class="flex flex-col min-h-screen">
    <h2 class="text-2xl font-bold mb-4">Attacks avaliable to sell</h2>
    <article class="grid grid-cols-3 gap-5">
      <section
        class="bg-steel text-white p-4 rounded-lg shadow-lg flex flex-col items-center"
        v-for="attack in attacksForSale"
        :key="attack.attack_ID"
      >
        <h3 class="mt-2">Name: {{ attack.attack_ID }}</h3>
        <h4>Coordinates: {{ attack.positions }}</h4>
        <input
          v-model="attack.priceInput"
          type="number"
          class="bg-placeholder rounded-xl p-2 mb-4 w-1/2 mt-2 text-center"
          placeholder="Price"
        />
        <button
          class="bg-buttons text-white font-semibold p-2 rounded-md w-1/2 m-5"
          @click="SellAttack(attack.attack_ID, attack.priceInput)"
        >
          Sell
        </button>
      </section>
    </article>
  </section>
</template>

<script>
export default {
  data() {
    return {
      attacks: [],
    };
  },
  computed: {
    attacksForSale() {
      return this.attacks.filter((attack) => !attack.on_sale);
    },
  },
  methods: {
    fetchAttackData() {
      const url = `https://balandrau.salle.url.edu/i3/players/attacks`;

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

    SellAttack(attack_ID, price) {
      const url = `https://balandrau.salle.url.edu/i3/shop/attacks/${attack_ID}/sell`;

      const headers = {
        Bearer: localStorage.getItem('authToken'),
        'Content-Type': 'application/json',
      };

      const body = JSON.stringify({ price });

      fetch(url, { method: 'POST', headers: headers, body: body })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(() => {
          alert('Attack sold successfully!');
          this.fetchAttackData();
        })
        .catch((error) => {
          console.error('Error selling attack:', error);
          alert('Attack sold successfully!', error);
          this.fetchAttackData();
        });
    },
  },
  mounted() {
    this.fetchAttackData();
  },
};
</script>
