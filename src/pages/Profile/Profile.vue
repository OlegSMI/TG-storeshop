<script setup lang="ts">
import ProfileInfo from "../../entities/ui/ProfileInfo/ProfileInfo.vue";
import ProfileRouter from "../../entities/ui/ProfileRouter/ProfileRouter.vue";
</script>

<template>
  <div class="profile">
    <ProfileInfo name="Fortune" :count="500" />
    <div class="items">
      <p class="heading">AYA Store</p>
      <ProfileRouter />
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
