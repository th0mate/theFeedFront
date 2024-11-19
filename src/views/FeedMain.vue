<script setup lang="ts">
import BoitePublication from "@/components/BoitePublication.vue";
import {ref, Ref} from "vue";
import type {Publication} from "@/types";

const publications: Ref<Publication[]> = ref([{
  id: 3,
  message: "Hello world !!",
  datePublication: "2023-09-15T12:02:09.037Z",
  auteur: {
    id: 4,
    adresseEmail: "toto@gouv.fr",
    login: "toto",
    premium: false
  }
}]);
</script>

<template>

  <h1>Accueil</h1>

  <div v-for="publication in publications" :key="publication.id">
    <BoitePublication :publication="publication"/>
  </div>

</template>

<style scoped>

</style>
