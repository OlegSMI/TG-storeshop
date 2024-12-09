<script setup lang="ts">
const isWarning = true;
</script>

<template>
  <div>
    <p class="warning">Пожалуйста, укажите адрес</p>
    <textarea
      :class="isWarning ? 'warningColor' : 'noWarningColor'"
      class="text-area"
      placeholder="Подробности доставки (Адрес/Индекс)"
    ></textarea>
  </div>
</template>

<style scoped>
.title {
  color: var(--text-color);
  padding: 16px 16px 8px 0;
}
.text-area {
  width: 100%;
  height: 90px;
  outline: none;
  background-color: var(--bg-color);

  border-radius: 12px;
  color: var(--hint-color);
  font-weight: 510;
  font-size: 14px;
  line-height: 18px;
  padding: 12px 16px;
  margin: 8px 0;
  resize: none;
}

.warningColor {
  border: 1px solid var(--text-destruсtive-color);
}

.noWarningColor {
  border: 1px solid var(--hint-color);
}

.warning {
  font-weight: 510;
  color: var(--text-destruсtive-color);
  margin: 8px 0;
}
</style>
