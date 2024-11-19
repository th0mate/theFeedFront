<script setup lang="ts">
import {useRoute} from 'vue-router'
import BoiteUtilisateur from "@/components/BoiteUtilisateur.vue";
import { ref, type Ref } from "vue";
import type {Utilisateur} from "@/types";

const route = useRoute()
const id = route.params.id

const user: Ref<Utilisateur> = ref({
  id: Number(id),
  adresseEmail: "lapin@gmail.com",
  login: "lapin",
  premium: false
});

</script>

<template>
  <BoiteUtilisateur :utilisateur="user" />
</template>

<style scoped>

</style>
