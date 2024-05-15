
<template>
  <section class="text-2xl text-white font-semibold mx-10">
    <h2>Equipped Attacks</h2>
  </section>
  <section class="flex flex-row gap-12 justify-center m-5">
    <attack-component v-for="attack in attackEquipped" :key="attack.attack_ID" :attack="attack" />
  </section>

 
</template>

<script>
import  AttackComponent from '../components/AttackComponent.vue';

export default {
  components: {
    AttackComponent
  },
  data() {
    return {
      attacks: []
    };
  },
  computed: {
      attackEquipped() {
        return this.attacks.filter(attack => attack.equipped);
    }
  },
  methods: {
    fetchAttackData() {
      const url = `https://balandrau.salle.url.edu/i3/players/attacks`;
      
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



