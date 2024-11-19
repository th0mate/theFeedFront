<script setup lang="ts">
import {useRoute} from 'vue-router'

const route = useRoute()
const id = route.params.id
</script>

<template>
  <p>J'affiche l'id {{ id }}</p>
</template>

<style scoped>

</style>
