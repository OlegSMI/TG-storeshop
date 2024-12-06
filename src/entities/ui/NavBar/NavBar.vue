<script setup lang="ts">
import NavBarButton from "../../../shared/ui/NavBarButton/NavBarButton.vue";
</script>

<template>
  <div class="navbar">
    <NavBarButton name="Одежда" :isChecked="true" class="item" />
    <NavBarButton name="Аксессуары" :isChecked="false" class="item" />
    <NavBarButton name="Аксессуары" :isChecked="false" class="item" />
    <NavBarButton name="Аксессуары" :isChecked="false" class="item" />
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  gap: 8px;
  padding: 16px 0px 0px 0px;
}
</style>
