<script setup lang="ts">
import BoiteUtilisateur from "@/components/BoiteUtilisateur.vue";
import {ref} from "vue";
import {apiStore} from "@/util/apiStore";

const users = ref([]);


apiStore.getAll('utilisateurs')
  .then(reponseJSON => {
    users.value = reponseJSON['member'];
    console.log(users.value);
  });



</script>

<template>
  <div v-for="user in users" :key="user.id">
    <BoiteUtilisateur :utilisateur="user"/>
  </div>
</template>

<style scoped>

</style>
