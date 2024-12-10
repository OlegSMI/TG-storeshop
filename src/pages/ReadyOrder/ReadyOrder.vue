<script setup lang="ts">
import storeRouterIcon from "@assets/router/storeRouterIcon.svg";
import { useRouter } from "vue-router";
import { BackButton, MainButton } from "vue-tg";

const router = useRouter();

const handleMainButton = () => {
  router.push("/main");
};
</script>

<template>
  <div class="empty">
    <MainButton text="К каталогу" @click="handleMainButton" />
    <BackButton @click="router.go(-1)" />
    <img :src="storeRouterIcon" alt="" />
    <div class="empty-text">
      <h2>Заказ оформлен</h2>
      <span>С вами свяжутся</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@mixin flex-column-center($gap) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: $gap;
}

@mixin absolute-centered() {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.empty {
  @include flex-column-center(24px);
  @include absolute-centered();
  width: 100%;

  &-text {
    @include flex-column-center(8px);
    color: var(--text-color);

    span {
      max-width: 200px;
    }
  }
  img {
    min-width: 80px;
    min-height: 80px;
  }
}
</style>
