<script setup lang="ts">
import { ref, defineEmits } from "vue";

import TextArea from "@shared/ui/TextArea/TextArea.vue";
import Warning from "@shared/ui/Warning/Warning.vue";

const emit = defineEmits(["sendDataToGrandparent"]);
const dataFromChild = ref("");

const receiveDataFromChild = (data: string) => {
  dataFromChild.value = data;
  emitDataToGrandparent(data);
};

const emitDataToGrandparent = (data: string) => {
  emit("sendDataToGrandparent", data);
};

const props = defineProps({
  isTextAreaEmpty: Boolean,
  warning: Boolean,
});
</script>

<template>
  <div>
    <!-- TODO: Добавить проверку на количесвто денег -->
    <Warning text="Пу-пу-пу, не хватает" v-if="warning" />
    <div v-else>
      <h1 class="title">Информация о доставке</h1>

      <TextArea
        @sendDataToParent="receiveDataFromChild"
        :isWarning="isTextAreaEmpty"
      />
    </div>
  </div>
</template>

<style scoped>
.title {
  color: var(--text-color);
  padding: 16px 16px 8px 0;
}
</style>
