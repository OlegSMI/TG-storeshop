<script setup lang="ts">
// import Header from "../../widgets/ui/Header/Header.vue";
import { BackButton, MainButton } from "vue-tg";
import router from "../../app/router/router";
import NavBar from "../../entities/ui/NavBar/NavBar.vue";
import { Catalog, Header } from "../../widgets";
// import Catalog from "../../widgets/Catalog/Catalog.vue";

const mainButtonHandler = () => {
  console.log("main");
};
</script>

<template>
  <div class="main">
    <MainButton text="main" @click="mainButtonHandler" />
    <BackButton @click="router.go(-1)" />
    <Header />
    <NavBar />
    <Catalog />
  </div>
</template>
<style scoped>
.main {
  padding: 16px;
}
</style>
