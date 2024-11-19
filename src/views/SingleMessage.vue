<script setup lang="ts">
import type {Publication} from "@/types";
import {ref, type Ref} from "vue";
import BoitePublication from "@/components/BoitePublication.vue";


const publication: Ref<Publication> = ref({
  id: 3,
  message: "Hello world !!",
  datePublication: "2023-09-15T12:02:09.037Z",
  auteur: {
    id: 4,
    adresseEmail: "toto@gouv.fr",
    login: "toto",
    premium: false
  }
});
</script>

<template>
  <BoitePublication :publication="publication"/>
</template>

<style scoped>

</style>
