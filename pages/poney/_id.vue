<template>
  <div class="page">
    <h1>Détails du poney N°{{ poney.id }} </h1>

    <p>ID: {{ poney.id }}</p>
    <p>Name: {{ poney.name }}</p>
    <p>Color: {{ poney.color }}</p>
    <p>Odds: {{ poney.odds }}</p>
    <p>Number of bets: {{ poney.betCount }}</p>

    <NuxtLink to="/poney">Retour</NuxtLink>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PoneyService from '~/plugins/services/PoneyService';

export default Vue.extend({
  name: 'PoneyDetailsPage',
  data(){
    return {
      poney: PoneyService.getPoney(+this.$route.params.id)
    }
  }
})
</script>
