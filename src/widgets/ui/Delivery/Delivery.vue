<script setup lang="ts">
import TextArea from "@shared/ui/TextArea/TextArea.vue";
import Warning from "@shared/ui/Warning/Warning.vue";
</script>

<template>
  <div>
    <!-- TODO: Добавить проверку на количесвто денег -->
    <!-- <Warning text="Пу-пу-пу, не хватает" /> -->
    <h1 class="title">Информация о доставке</h1>

    <TextArea />
  </div>
</template>

<style scoped>
.title {
  color: var(--text-color);
  padding: 16px 16px 8px 0;
}
</style>
