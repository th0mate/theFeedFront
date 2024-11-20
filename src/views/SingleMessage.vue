<script setup lang="ts">
import type {Publication} from "@/types";
import {ref, type Ref} from "vue";
import BoitePublication from "@/components/BoitePublication.vue";
import {apiStore} from "@/util/apiStore";
import {useRoute} from "vue-router";


const publication: Ref<Publication> = ref('Chargement...');

const route = useRoute();
const id = route.params.id;

apiStore.getById('publications', id)
  .then(reponseJSON => {
    publication.value = reponseJSON;
  });
</script>

<template>
  <BoitePublication :publication="publication"/>
</template>

<style scoped>

</style>
