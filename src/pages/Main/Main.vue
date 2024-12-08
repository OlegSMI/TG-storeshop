<script setup lang="ts">
// import Header from "../../widgets/ui/Header/Header.vue";
import { BackButton, MainButton } from "vue-tg";
import router from "@app/router/router";
import NavBar from "@entities/ui/NavBar/NavBar.vue";
// import Header from "../../widgets/header/ui/Header.vue";
import Catalog from "@widgets/ui/Catalog/Catalog.vue";
import Header from "@widgets/ui/Header/Header.vue";
// import Catalog from "../../widgets/Catalog/Catalog.vue";

const mainButtonHandler = () => {
  router.push("/basket");
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
<style scoped></style>
