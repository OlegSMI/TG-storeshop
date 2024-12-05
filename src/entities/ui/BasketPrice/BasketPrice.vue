<script setup lang="ts">
import Tokens from "../../../shared/ui/Tokens/Tokens.vue";
// defineProps<{ price: number }>();
</script>

<template>
  <div class="basket-price">
    <div class="all-price">
      <p>Всего</p>
      <div class="count">
        <p>3 шт. ·</p>
        <Tokens :tokens="800" class="count-tokens" />
      </div>
    </div>
    <div class="balance">
      <p>Ваш баланс</p>
      <Tokens :tokens="500" class="balance-tokens" />
    </div>
  </div>
</template>

<style scoped>
.basket-price {
  width: 343px;
  background-color: #efefef;
  border-radius: 12px;
}
.all-price {
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;

  color: #000000;
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
  color: #000000;
  font-weight: 400;

  padding: 0 16px 12px 16px;

  .balance-tokens {
    font-weight: 400;
  }
}
</style>
