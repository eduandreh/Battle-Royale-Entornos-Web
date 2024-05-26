<template>
  <section class="bg-placeholder flex flex-col min-h-screen">
    <h3 class="text-2xl font-bold mt-10 mx-20">Inventory</h3>
    <form class="flex flex-row">
      <article
        class="m-5 mr-20 ml-20 grid grid-cols-6 grid-flow-row gap-5 justify-center"
      >
        <section
          v-for="attack in attackEquipped"
          :key="attack.attack_ID"
          class="items-center justify-center align-center flex flex-col"
        >
          <attack-component :attack="attack" />
          <button
            class="bg-buttons text-white font-bold py-2 px-4 rounded mt-2 justify-center align-center"
            @click="equipAttack(attack)"
          >
            Equip
          </button>
        </section>
      </article>
    </form>
  </section>
</template>

<script>
import AttackComponent from '../components/AttackComponent.vue';

export default {
  components: {
    AttackComponent,
  },
  data() {
    return {
      attacks: [],
      Count: 24,
    };
  },
  computed: {
    filledAttacks() {
      return this.attacks.slice(0, this.Count);
    },
    attackEquipped() {
      return this.attacks.filter((attack) => !attack.equipped);
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
  },
  mounted() {
    this.fetchAttackData();
  },
};
</script>
