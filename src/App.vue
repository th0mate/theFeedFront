<script setup lang="ts">

import {apiStore} from "@/util/apiStore";
import {ref} from "vue";
import {Notifications, notify} from "@kyvg/vue3-notification";

const logout = () => {
  notify({
    type: 'success',
    title: 'Déconnexion réussie',
  });
  apiStore.logout();
}

const loaded = ref(false);

apiStore.refresh();

loaded.value = true;

</script>

<template>
  <div id="wrapper" v-if="loaded">
    <header>
      <h1 @click="$router.push({name: 'feed'})">The feed</h1>
      <nav>
        <div @click="$router.push({name: 'allUsers'})">Les membres</div>
        <div v-if="!apiStore.estConnecte" @click="$router.push({name: 'register'})">S'inscrire</div>
        <div v-if="!apiStore.estConnecte" @click="$router.push({name: 'login'})">Se connecter</div>
        <div v-if="apiStore.estConnecte" @click="logout">Se déconnecter</div>
      </nav>
    </header>
    <main>
      <notifications position="bottom right" :duration="10000"/>
      <router-view/>
    </main>
  </div>
</template>


<style scoped>
#wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: rgb(225, 235, 250);
}

header {
  width: 100%;
  position: sticky;
  top: 0px;
  background-color: rgb(100, 210, 250);
  padding: 20px;
}

header h1 {
  text-align: center;
  font-family: helvetica, serif;
  font-weight: 700;
}

nav {
  box-shadow: 0 0 0.5rem #999;
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  margin: 0 auto;
}

nav > div {
  padding: 10px;
  background-color: rgb(105, 190, 250);
  flex-grow: 1;
  text-align: center;
  border: solid #22A 1px;
}

nav > div:hover {
  box-shadow: 0 0 0.3rem #000;
  cursor: pointer;
}

main {
  max-width: 1280px;
  width: 780px;
  padding: 10px;
  background-color: rgb(225, 240, 255);
  flex-grow: 1;
}

@media (max-width: 800px) {
  main {
    width: 80%;
  }
}
</style>

