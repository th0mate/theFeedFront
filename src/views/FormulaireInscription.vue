<script setup lang="ts">
import {ref, type Ref} from "vue";
import {apiStore} from "@/util/apiStore";
import {notify} from "@kyvg/vue3-notification";
import router from "@/router";

const login: Ref<string> = ref('');
const mdp: Ref<string> = ref('');
const mail: Ref<string> = ref('');

const inscrire = () => {
  apiStore.createRessource('utilisateurs', {login: login.value, plainPassword: mdp.value, adresseMail: mail.value, premium: false})
    .then(() => {
      notify({
        type: 'success',
        title: 'Inscription réussie',
      });
      login.value = '';
      mdp.value = '';

      router.push({name: 'feed'});
    });
}
</script>

<template>

  <div class="wrapper">
    <div class="top">
      <h3>Création du profil</h3>
    </div>
    <form @submit.prevent="inscrire" class="content">
      <div class="group">
        <label>Login</label>
        <input type="text" minlength="4" maxlength="20" v-model="login" placeholder="Login">
      </div>
      <div class="group">
        <label>Adresse Mail</label>
        <input type="email" minlength="4" maxlength="20" v-model="mail" placeholder="email">
      </div>
      <div class="group">
        <label>Mot de passe</label>
        <input type="password" minlength="4" maxlength="20" v-model="mdp" placeholder="Mot de passe">
      </div>
      <button type="submit">
        Valider
      </button>
    </form>
  </div>
</template>

<style scoped>
@import "@/components/css/content-box.css";
</style>
