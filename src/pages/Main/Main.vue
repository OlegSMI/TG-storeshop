<script setup lang="ts">
// import Header from "../../widgets/ui/Header/Header.vue";
import { Header, Catalog } from "../../widgets";
import NavBar from "../../entities/ui/NavBar/NavBar.vue";
// import Catalog from "../../widgets/Catalog/Catalog.vue";
</script>

<template>
  <div class="main">
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
