<script setup lang="ts">
import { onMounted } from "vue";
import { useWebApp } from "vue-tg";

import fence from "./assets/fence.svg";
import logo from "./assets/logo.svg";

import { useProfileStore } from "@app/store/useProfileStore";
import Tokens from "@shared/ui/Tokens/Tokens.vue";

const profileStore = useProfileStore();
const photo_url = useWebApp().initDataUnsafe.user?.photo_url;

onMounted(() => {
  profileStore.getProfileData();
});
</script>

<template>
  <div class="header">
    <div class="logo">
      <img :src="logo" alt="" />
      <img :src="fence" class="fence" alt="" />
      <p>Store</p>
    </div>
    <div class="user">
      <Tokens :tokens="profileStore.profileData.amount" />
      <router-link :to="'/profile'" class="avatar">
        <img :src="photo_url" alt="" width="32" height="32" />
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
}

.logo {
  display: flex;
  color: var(--hint-color);

  p {
    align-self: center;
  }
}

.user {
  display: flex;
  align-items: center;
}

.avatar {
  margin-left: 11px;
  text-decoration: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--tertiary-fill-background);
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }
}

.fence {
  margin: 0 12px;
}
</style>
