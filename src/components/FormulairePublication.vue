<script setup lang="ts">
import { ref, type Ref } from "vue";
import { apiStore } from "@/util/apiStore";

const message: Ref<string> = ref('');

const envoyer = () => {
  apiStore.createRessource('publications', {message: message.value})
    .then(reponseJSON => {
      console.log(reponseJSON);
      message.value = '';
    });
}
</script>

<template>
  <form @submit.prevent="envoyer">
    <fieldset>
      <legend>Nouveau feedy</legend>
      <div>
        <textarea v-model="message" minlength="4" maxlength="200" cols="60" placeholder="Votre nouveau feed"></textarea>
      </div>
      <div>
        <button type="submit">Publier</button>
      </div>
    </fieldset>
  </form>
</template>

<style scoped>
form{
  display:flex;
  justify-content: space-evenly;
  align-items:center;
  background-color: rgb(225, 235, 250);
}
</style>
