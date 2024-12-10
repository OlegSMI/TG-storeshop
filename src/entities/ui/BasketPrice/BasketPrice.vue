<script setup lang="ts">
import Tokens from "@shared/ui/Tokens/Tokens.vue";
import { storeToRefs } from "pinia";
import { Ref } from "vue";
import { useBasketStore } from "../../../app/store/useBasketStore";

const { totalItems, totalPrice } = storeToRefs(useBasketStore()) as {
  totalItems: Ref<number>;
  totalPrice: Ref<number>;
};

import { useProfileStore } from "@app/store/useProfileStore";
import { onMounted } from "vue";

const pfofileState = useProfileStore();

onMounted(() => {
  pfofileState.getProfileData();
});
</script>

<template>
  <div class="basket-price">
    <div class="all-price">
      <p>Всего</p>
      <div class="count">
        <p>{{ totalItems }} шт. ·</p>
        <Tokens :tokens="totalPrice" class="count-tokens" />
      </div>
    </div>
    <div class="balance">
      <p>Ваш баланс</p>
      <Tokens
        :tokens="pfofileState.profileData.amount"
        class="balance-tokens"
      />
    </div>
  </div>
</template>

<style scoped>
.basket-price {
  /* width: 343px; */
  background-color: var(--tertiary-fill-background);
  border-radius: 12px;
  margin: 12px 0;
}
.all-price {
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;

  color: var(--text-color);
  font-size: 17px;
  font-weight: 590;
  line-height: 22px;

  .count {
    display: flex;

    p {
      margin-right: 4px;
    }

    .count-tokens {
      font-weight: 590;
      /* font-size: 17px; */
      line-height: 22px;
      color: red;
    }
  }
}

.balance {
  display: flex;
  justify-content: space-between;
  color: var(--text-color);
  font-weight: 400;

  padding: 0 16px 12px 16px;

  .balance-tokens {
    font-weight: 400;
  }
}
</style>
