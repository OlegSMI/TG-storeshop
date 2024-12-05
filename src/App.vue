<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import CardButton from "./shared/ui/CardButton/CardButton.vue";
import NavBarButton from "./shared/ui/NavBarButton/NavBarButton.vue";

import CatalogCard from "./entities/ui/CatalogCard/CatalogCard.vue";

import RouterItem from "./shared/ui/RouterItem/RouterItem.vue";

import Header from "./widgets/header/ui/Header.vue";

import testCatalogImg from "./assets/testcatalogimg.svg";
import storeRouterIcon from "./assets/storeRouterIcon.svg";
</script>

<template>
  <!-- <div>adsads</div> -->
  <CardButton :price="100" :isChecked="false" />
  <CardButton :price="100" :isChecked="true" />
  <NavBarButton name="Одежда" :isChecked="true" />
  <NavBarButton name="Аксессуары" :isChecked="false" />

  <CatalogCard :img="testCatalogImg" />

  <RouterItem
    :img="storeRouterIcon"
    title="Store"
    text="Внутренний маркетплейс"
  />

  <Header />
  <!-- <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
