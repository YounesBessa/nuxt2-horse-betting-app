<template>
  <div class="page">
    <h1>Ajouter un pari</h1>
    <form>
      <label for="name">Poney</label>
      <select v-model="poney">
      <option selected value="" >Veuillez selectionner un poney</option>
      <option v-for="poney in poneys" :key="poney.id" :value="poney">
        {{ poney.name }}
      </option>
      </select>
      <label for="bet">Mise</label>
      <input id="bet" v-model="bet" type="number" @input="calculateGain" />
      <span class="gain">{{ gain }}</span>
      <button type="submit" @click="createBet">Parier</button>
      <NuxtLink to="/poney">Retour</NuxtLink>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PoneyService from '@/plugins/services/PoneyService'

export default Vue.extend({
  name: 'AddBetPage',
  data(){
    return {
      poneys: PoneyService.getPoneys(),
      poney: Object,
      bet: 0,
      odds: 0,
      gain: 0
    }
  },
  methods: {
    createBet(e:any){
      e.preventDefault();
      
    },
    calculateGain(){
      this.gain = this.bet * this.poney.odds;
    }
   }

})
</script>
