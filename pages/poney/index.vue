<template>
  <div class="page">
    <h1>Liste des poneys</h1>
    <NuxtLink to="/poney/add">Ajouter</NuxtLink>
    <ul>
      <li v-for="poney in poneys" :key="poney.id">
        <NuxtLink :to="`/poney/${poney.id}`">
          {{ poney.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PoneyService from '~/plugins/services/PoneyService';

export default Vue.extend({
  name: 'PoneyListPage',
  data() {
    return { poneys:PoneyService.getPoneys()
      
    }
  },
})
</script>
