<script setup lang="ts">
import logo from "../assets/logo.svg";
import fence from "../assets/fence.svg";
import avatarIcon from "../assets/avatar.svg";

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
      <img :src="avatarIcon" class="avatar" alt="" />
    </div>
  </div>
</template>

<style scoped>
.header {
  width: 375px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
}

.logo {
  display: flex;
  color: #8e8e93;

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

  &:hover {
    cursor: pointer;
  }
}

.fence {
  margin: 0 12px;
}
</style>
