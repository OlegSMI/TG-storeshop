<script setup lang="ts">
import { onMounted } from "vue";

import { useProfileStore } from "@app/store/useProfileStore";
import Tokens from "@shared/ui/Tokens/Tokens.vue";

defineProps<{ img: string; name: string; count: number }>();

const profileStore = useProfileStore();

onMounted(() => {
  profileStore.featchProfileInfo();
});
</script>

<template>
  <div class="profile-info">
    <div v-if="img" class="image-container">
      <img :src="img" alt="" />
    </div>
    <template v-else>
      <div
        class="initial"
        :style="{ backgroundColor: '#EFEFEF', color: '#8E8E93' }"
      >
        {{ name.charAt(0).toUpperCase() }}
      </div>
    </template>
    <p class="name">{{ name }}</p>
    <Tokens :tokens="count" />
  </div>
</template>

<style scoped>
.profile-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.name {
  margin: 12px 0 4px 0;
  color: var(--text-color);
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  text-align: center;
}

.initial {
  width: 97px;
  height: 97px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 28px;
  font-weight: 700;
  line-height: 34px;
}
</style>
