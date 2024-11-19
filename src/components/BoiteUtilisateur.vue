<script setup lang="ts">
import type {Utilisateur} from '@/types';
defineProps<{utilisateur: Utilisateur}>();
</script>

<template>
  <div class="content-box">
    <div class="top">
      Profil de <router-link class="clickable" :to="{name: 'singleUser', params: {id: utilisateur.id}}">{{ utilisateur.login }}</router-link>
    </div>
    <div class="content">
      <div class="group">
        <label>Login</label>
        <input :value="utilisateur.login" >
      </div>
      <div class="group">
        <label>Adresse e-mail</label>
        <input :value="utilisateur.adresseEmail" >
      </div>
    </div>
  </div>
</template>


<style scoped>
@import "@/components/css/content-box.css";
</style>
