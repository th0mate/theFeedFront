<script setup lang="ts">
import {useRoute} from 'vue-router'
import BoiteUtilisateur from "@/components/BoiteUtilisateur.vue";
import { ref, type Ref } from "vue";
import type {Utilisateur} from "@/types";
import {apiStore} from "@/util/apiStore";

const route = useRoute();
const id = route.params.id;

const user: Ref<Utilisateur> = ref('Chargement...');


apiStore.getById('utilisateurs', id)
  .then(reponseJSON => {
    user.value = reponseJSON;
  });

</script>

<template>
  <BoiteUtilisateur :utilisateur="user" />
</template>

<style scoped>

</style>
