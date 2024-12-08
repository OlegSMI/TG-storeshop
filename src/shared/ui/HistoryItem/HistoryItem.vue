<script setup lang="ts">
import Tokens from "../Tokens/Tokens.vue";

const props = defineProps<{
  img: string;
  text: string;
  status: "processed" | "posted" | "cancelled";
  price: number;
  count: number;
}>();

interface StatusDetails {
  message: string;
  color: string;
}

const statuses: Record<"processed" | "posted" | "cancelled", StatusDetails> = {
  processed: {
    message: "Обрабатывается",
    color: "#8E8E93",
  },
  posted: {
    message: "Отправлено",
    color: "#34C759",
  },
  cancelled: {
    message: "Аннулирован",
    color: "#CC2929",
  },
};

const currentStatusDetails = statuses[props.status];
</script>

<template>
  <div class="history-item">
    <img :src="props.img" alt="Image" />
    <div class="description">
      <p class="title">{{ props.text }}</p>
      <p :style="{ color: currentStatusDetails.color }">
        {{ currentStatusDetails.message }} ·
        <span :style="{ color: '#8E8E93' }">{{ props.count }} шт.</span>
      </p>
    </div>
    <Tokens
      :tokens="props.price"
      :style="{ opacity: props.status !== 'posted' && 0.4 }"
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
  }

  .description {
    .title {
      color: var(--text-color);
      font-weight: 510;
    }
  }
}
</style>
