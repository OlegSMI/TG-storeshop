<script setup lang="ts">
import { computed } from "vue";
import Tokens from "../Tokens/Tokens.vue";

const props = defineProps<{
  id: number;
  img: string;
  text: string;
  status: "processed" | "posted" | "cancelled";
  price: number;
  count: number;
}>();

interface StatusDetails {
  message: string;
  class: "processed" | "posted" | "cancelled";
}

const statuses: StatusDetails[] = [
  {
    message: "В обработке",
    class: "processed",
  },
  {
    message: "Аннулирован",
    class: "cancelled",
  },
  {
    message: "Отправлено",
    class: "posted",
  },
];

const getStatusClass = (status: string) =>
  computed(() => statuses.find((el) => el.message == status)).value?.class;

const statusIsPosted = (status: string) => getStatusClass(status) != "posted";
</script>

<template>
  <div class="history-item">
    <img :src="props.img" alt="Image" />
    <div class="description">
      <p class="title">{{ props.text }}</p>
      <p :class="`${getStatusClass(status)}`">
        {{ status }} ·
        <span class="count-items">{{ props.count }} шт.</span>
      </p>
    </div>
    <Tokens
      :tokens="price * count"
      :style="{ opacity: statusIsPosted(status) && 0.4 }"
    />
  </div>
</template>

<style scoped>
.history-item {
  padding: 8px 0px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  justify-content: space-between;

  img {
    margin-right: 12px;

    border-radius: 12px;
    width: 48px;
    height: 48px;
    object-fit: cover;
  }

  .description {
    .title {
      color: var(--text-color);
      font-weight: 510;
    }
  }
}

.processed {
  color: var(--hint-color);
}
.posted {
  color: var(--text-confirm-color);
}
.cancelled {
  color: var(--text-destruсtive-color);
}

.count-items {
  color: var(--hint-color);
}
</style>
