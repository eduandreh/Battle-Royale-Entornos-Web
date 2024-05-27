<template>
  <section class="text-2xl text-white font-semibold mx-10">
    <h1>Equipped Attacks</h1>
  </section>
  <section class="flex flex-row justify-center">
    <section v-if="attacks.length === 0">
      <section class="grid grid-cols-3 gap-4">
        <article v-for="n in 3" :key="n" class="bg-steel p-20 rounded-lg text-center m-5 "></article>
      </section>
    </section>
    <section v-else class="grid grid-cols-3 gap-4">
      <article
        v-for="attack in attackEquipped"
        :key="attack.attack_ID"
        class="flex flex-col items-center scale-75"
      >
        <attack-component :attack="attack" />
        <button
          class="bg-buttons text-white font-bold py-2 px-4 rounded mt-2 justify-center align-center"
          @click="unEquipAttack(attack)"
        >
          Unequip
        </button>
      </article>
    </section>
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
    };
  },
  computed: {
    attackEquipped() {
      return this.attacks.filter((attack) => attack.equipped);
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
    unEquipAttack(attack) {
      const url = `https://balandrau.salle.url.edu/i3/players/attacks/${attack.attack_ID}`;

      const headers = {
        Bearer: localStorage.getItem('authToken'),
        'Content-Type': 'application/json',
      };

      fetch(url, { method: 'DELETE', headers: headers })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(() => {
          this.fetchAttackData();
        })
        .catch((error) => {
          console.error('Error unequipping attack:', error);
          this.fetchAttackData();
        });
    },
  },
  mounted() {
    this.fetchAttackData();
  },
};
</script>
