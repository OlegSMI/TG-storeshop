<script setup lang="ts">
import logo from "./assets/logo.svg";
import fence from "./assets/fence.svg";
import avatarIcon from "./assets/avatar.svg";

import Tokens from "../../../shared/ui/Tokens/Tokens.vue";
</script>

<template>
  <div class="header">
    <div class="logo">
      <img :src="logo" alt="" />
      <img :src="fence" class="fence" alt="" />
      <p>Store</p>
    </div>
    <div class="user">
      <Tokens :tokens="500" />
      <router-link :to="'/profile'" class="avatar">
        <img :src="avatarIcon" alt="" />
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.header {
  /* width: 375px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 8px 16px; */
}

.logo {
  display: flex;
  color: var(--hint-color);
  padding: 0 16px;

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
