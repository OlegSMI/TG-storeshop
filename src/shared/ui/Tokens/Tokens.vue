<script setup lang="ts">
import { computed } from "vue";
import { useWebAppTheme } from "vue-tg";
import tokenIconBlack from "../../assets/tokenIcon-black.svg";
import tokenIconWhite from "../../assets/tokenIcon-white.svg";

defineProps<{ tokens: number }>();
const colorScheme = computed(() => useWebAppTheme().colorScheme.value);
</script>

<template>
  <div class="tokens">
    <p class="balance">{{ tokens }}</p>
    <img v-if="colorScheme == 'dark'" :src="tokenIconWhite" alt="" />
    <img v-else :src="tokenIconBlack" alt="" />
  </div>
</template>

<style scoped>
.tokens {
  display: flex;
  font-weight: 510;
  font-size: 17px;
  line-height: 18px;

  p {
    color: var(--text-color);
    margin-right: 4px;
  }

  img {
    /* widows: 18px; */
    width: 18px;
    height: 18px;
    fill: red;
    color: red;
  }
}
</style>
