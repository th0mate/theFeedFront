<script setup lang="ts">
import type {Publication} from '@/types';

defineProps<{ publication: Publication }>();
</script>

<template>
  <div class="content-box">
    <div class="top">
      <router-link
        :to="{name:'singleUser', params: {id: publication.auteur.id}}"
        class="clickable">
        {{ publication.auteur.login }}
      </router-link>
      -- {{ (new Date(publication.datePublication)).toLocaleString("fr") }}
    </div>
    <div class="content clickable" @click="$router.push({name:'singleMessage', params: {id: publication.id}})">
      {{ publication.message }}
    </div>
  </div>
</template>

<style scoped>
@import "@/components/css/content-box.css";
</style>
