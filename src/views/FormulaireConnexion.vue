<script setup lang="ts">
import {ref} from 'vue';
import {apiStore} from "@/util/apiStore";
import router from "@/router";
import { notify } from "@kyvg/vue3-notification";

const connectingUser = ref({
  login: "",
  password:""
});
function connect():void{
  apiStore.login(connectingUser.value.login, connectingUser.value.password)
    .then(reponseJSON => {
      if (reponseJSON['success']) {
        notify({
          type: 'success',
          title: 'Connexion réussie',
        });
        router.push({name: 'feed'});
      } else {
        notify({
          type: 'warn',
          title: 'Connexion impossible',
          text: 'Mot de passe ou identifiant incorrect'
        });
      }
    });
}
</script>

<template>
  <div class="wrapper">
    <div class="top">
      <h3>Création du profil</h3>
    </div>
    <form @submit.prevent="connect" class="content">
      <div class="group">
        <label>Login</label>
        <input v-model="connectingUser.login" >
      </div>
      <div class="group">
        <label>Mot de passe</label>
        <input type="password" v-model="connectingUser.password" >
      </div>
      <button type="submit">
        Connexion
      </button>
    </form>
  </div>
</template>

<style scoped>
@import "@/components/css/content-box.css";
</style>
