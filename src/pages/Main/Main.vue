<script setup lang="ts">
import Header from "../../widgets/header/ui/Header.vue";
import NavBar from "../../entities/ui/NavBar/NavBar.vue";
import CatalogCard from "../../entities/ui/CatalogCard/CatalogCard.vue";

import testCatalogImg from "../../assets/testcatalogimg.svg";
</script>

<template>
  <div class="main">
    <Header />
    <NavBar />
    <div class="catalog">
      <CatalogCard :img="testCatalogImg" />
      <CatalogCard :img="testCatalogImg" />
      <CatalogCard :img="testCatalogImg" />
      <CatalogCard :img="testCatalogImg" />
    </div>
  </div>
</template>
<style scoped>
.main {
  padding: 16px;
}
.catalog {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 17px;
  padding: 16px 0 0 0;
}
</style>
