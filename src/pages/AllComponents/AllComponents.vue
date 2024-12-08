<script setup lang="ts">
import CardButton from "@shared/ui/CardButton/CardButton.vue";
import NavBarButton from "@shared/ui/NavBarButton/NavBarButton.vue";

// import RouterItem from "../../shared/ui/RouterItem/RouterItem.vue";

import Header from "@widgets/ui/Header/Header.vue";

import BasketItem from "@entities/ui/BasketItem/BasketItem.vue";

import BasketPrice from "@entities/ui/BasketPrice/BasketPrice.vue";

import TextArea from "@shared/ui/TextArea/TextArea.vue";

import Warning from "@shared/ui/Warning/Warning.vue";

import ProfileRouter from "@entities/ui/ProfileRouter/ProfileRouter.vue";

// import HistoryItem from "../../entities/ui/HistoryItem/HistoryItem.vue";

import ProfileInfo from "@entities/ui/ProfileInfo/ProfileInfo.vue";

// import storeRouterIcon from "../../assets/storeRouterIcon.svg";
import { BackButton, MainButton } from "vue-tg";
import router from "@app/router/router";
import basketItemAvatar from "@assets/basketItemAvatar.svg";
import testProfileImg from "@assets/testProfileImg.svg";
</script>

<template>
  <!-- <div>adsads</div> -->
  <MainButton text="allcomponents" />
  <BackButton @click="router.go(-1)" />
  <CardButton :price="100" :isChecked="false" />
  <CardButton :price="100" :isChecked="true" />
  <NavBarButton name="Одежда" :isChecked="true" />
  <NavBarButton name="Аксессуары" :isChecked="false" />

  <!-- <CatalogCard :img="testCatalogImg" /> -->

  <!-- <RouterItem
    :img="storeRouterIcon"
    title="Store"
    text="Внутренний маркетплейс"
  /> -->

  <Header />

  <BasketItem
    :img="basketItemAvatar"
    title="Бейсболка BASE белая"
    price="200"
    :count="2"
  />

  <BasketPrice />

  <TextArea />

  <Warning text="Пу-пу-пу, не хватает" />

  <ProfileRouter />

  <!-- <HistoryItem
  :img="testHistoryImg"
    text="Бейсболка BASE белая"
    status="posted"
    :price="-200"
    :count="2"
    />
    <HistoryItem
    :img="testHistoryImg"
    text="Бейсболка BASE белая"
    status="cancelled"
    :price="-200"
    :count="2"
    /> -->

  <ProfileInfo :img="testProfileImg" name="Fortune" :count="500" />
  <ProfileInfo name="Fortune" :count="500" />
</template>
