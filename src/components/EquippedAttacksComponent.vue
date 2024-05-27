<template>
<section class="flex flex-row gap-8 justify-center">
    <section v-if="attacks.length === 0">
      <section class="grid grid-cols-3 gap-4">
        <article v-for="n in 3" :key="n" class="bg-steel p-10 rounded-lg text-center mt-5"></article>
      </section>
    </section>
    <article v-else class="bg-steel rounded-lg text-center p-4 w-12 h-12 scale-75 m-5"
      v-for="attack in attackEquipped"
      :key="attack.attack_ID"
    >
      <attack-component :attack="attack" />
    </article>
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
  },
  mounted() {
    this.fetchAttackData();
  },
};
</script>
