<script setup lang="ts">
import BoiteUtilisateur from "@/components/BoiteUtilisateur.vue";
import { ref, Ref } from "vue";

const users: Ref<Utilisateur[]> = ref([{
  id: 4,
  adresseEmail: "toto@gouv.fr",
  login: "toto",
  premium: false
}]);
</script>

<template>
  <div v-for="user in users" :key="user.id">
    <BoiteUtilisateur :utilisateur="user" />
  </div>
</template>

<style scoped>

</style>
