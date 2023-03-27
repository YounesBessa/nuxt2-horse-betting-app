<template>
  <div class="page">
    <h1>Ajouter un poney</h1>
    <form>
      <label for="name">Nom</label>
      <input id="name" v-model="name" type="text" />
      <label for="color">Couleur</label>
      <input id="color" v-model="color" type="text" />
      <label for="odds">Cote</label>
      <input id="odds" v-model="odds" type="number" />
      <button type="submit" @click="createPoney">Ajouter</button>
      <NuxtLink to="/poney">Retour</NuxtLink>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PoneyService from '@/plugins/services/PoneyService'

export default Vue.extend({
  name: 'AddPoneyPage',
  data(){
    return {
      name: '',
      color: '',
      odds: 0
    }
  },
  methods: {
    createPoney(e:any){
      e.preventDefault();
      const poney = {
        name: this.name,
        color: this.color,
        odds: this.odds
      }
      PoneyService.addPoney(poney);
    }
   }

})
</script>
