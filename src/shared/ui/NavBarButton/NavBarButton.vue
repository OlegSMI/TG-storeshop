<script setup lang="ts">
defineProps<{ name: string; isChecked: boolean }>();
</script>

<template>
  <button :class="isChecked ? 'isChecked' : 'noChecked'">
    {{ name }}
  </button>
</template>

<style scoped>
.isChecked {
  color: var(--button-text-color);
  background-color: var(--button-color);
}

.noChecked {
  color: var(--text-color);
  background-color: var(--button-main-disabled-color);
}
</style>
