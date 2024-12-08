<script setup lang="ts">
import { BackButton, MainButton } from "vue-tg";
import router from "@app/router/router";
import ProfileInfo from "@entities/ui/ProfileInfo/ProfileInfo.vue";
import ProfileRouter from "@entities/ui/ProfileRouter/ProfileRouter.vue";
</script>

<template>
  <div>
    <MainButton text="Оформить заказ" />
    <BackButton @click="router.go(-1)" />
    <div class="profile">
      <ProfileInfo name="Fortune" :count="500" />
      <div class="items">
        <p class="heading">AYA Store</p>
        <ProfileRouter />
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile {
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: start;
}
.heading {
  font-weight: 510;
  color: #8e8e93;
  text-align: left;
  padding: 16px 0 8px 0;
}
</style>
