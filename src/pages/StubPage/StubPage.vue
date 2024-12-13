<script setup lang="ts">
import duckRouterIcon from "@assets/router/duckRouterIcon.svg";
</script>

<template>
  <div class="empty">
    <img :src="duckRouterIcon" alt="" />
    <div class="empty-text">
      <h2>
        Мы не смогли вас идентифицировать среди сотрудников компании AYA Group
      </h2>
      <span
        >Если вы считаете что это ошибка, свяжитесь с офис менеджером компании
        для получения доступа</span
      >
      <div class="link">Тут ссылка</div>
      <div class="link">И тут ссылка</div>
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

.link {
  font-size: 17px;
  color: var(--link-color);
  font-weight: 590px;
}
</style>
