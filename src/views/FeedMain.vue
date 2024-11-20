<script setup lang="ts">
import BoitePublication from "@/components/BoitePublication.vue";
import {ref, type Ref} from "vue";
import type {Publication} from "@/types";
import {apiStore} from "@/util/apiStore";
import FormulairePublication from "@/components/FormulairePublication.vue";

const chargerFeed = () => {
  document.location.reload();
};

const publications: Ref<Publication[]> = ref([]);

apiStore.getAll('publications')
  .then(reponseJSON => {
    publications.value = reponseJSON['member'];
  });
</script>

<template>

  <h1>Accueil</h1>


  <FormulairePublication @updated="chargerFeed" v-if="apiStore.estConnecte === true"/>

  <div v-for="publication in publications" :key="publication.id">
    <BoitePublication :publication="publication"/>
  </div>

</template>

<style scoped>

</style>
