<script setup lang="ts"></script>

<template>
  <textarea
    class="text-area"
    placeholder="Подробности доставки (Адрес/Индекс)"
  ></textarea>
</template>

<style scoped>
.text-area {
  width: 343px;
  height: 90px;
  outline: none;
  background-color: var(--bg-color);
  border: 1px solid var(--hint-color);
  border-radius: 12px;
  color: var(--hint-color);
  font-weight: 510;
  font-size: 14px;
  line-height: 18px;
  padding: 12px 16px;
  resize: none;
}
</style>
