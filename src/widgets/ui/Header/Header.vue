<script setup lang="ts">
import { onMounted } from "vue";

import logo from "./assets/logo.svg";
import fence from "./assets/fence.svg";
import avatarIcon from "./assets/avatar.svg";

import Tokens from "@shared/ui/Tokens/Tokens.vue";
import { useProfileStore } from "@app/store/useProfileStore";

const profileStore = useProfileStore();

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
        <img :src="avatarIcon" alt="" />
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

  &:hover {
    cursor: pointer;
  }
}

.fence {
  margin: 0 12px;
}
</style>
