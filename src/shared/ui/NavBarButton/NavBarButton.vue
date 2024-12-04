<script setup lang="ts">
defineProps<{ name: string; isChecked: boolean }>();
</script>

<template>
  <button
    :style="{
      color: isChecked ? '#FFFFFF' : '#000000',
      backgroundColor: isChecked ? '#007AFF' : '#EFEFEF',
    }"
  >
    {{ name }}
  </button>
</template>

<style scoped>
button {
  background-color: ;
}
</style>
