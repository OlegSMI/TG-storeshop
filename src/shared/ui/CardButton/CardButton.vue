<script setup lang="ts">
import addItemIconBlue from "@shared/assets/addItemIcon-blue.svg";
import addItemIconWhite from "@shared/assets/addItemIcon-white.svg";
import delItemIconWhite from "@shared/assets/delItemIcon-white.svg";
import tokenItemBlue from "@shared/assets/tokenIcon-blue.svg";
import tokenItemWhite from "@shared/assets/tokenIcon-white.svg";

const props = defineProps<{
  price: string;
  count: number;
  limitQuantity: string;
  visibleToken?: boolean;
}>();

const emit = defineEmits<{
  (e: "addProductCart"): void;
  (e: "remProductCart"): void;
}>();

const globalAddEmit = () => {
  if (props.count == 0) {
    emit("addProductCart");
  }
};

const addProductEmit = (e: MouseEvent) => {
  e.stopPropagation();
  if (props.count < Number(props.limitQuantity)) {
    emit("addProductCart");
  }
};

const remProductEmit = (e: MouseEvent) => {
  e.stopPropagation();
  emit("remProductCart");
};
</script>

<template>
  <button
    :class="`button-wrapper${count > 0 ? '-active' : ''}`"
    @click="globalAddEmit"
  >
    <transition name="fade-slide">
      <div v-if="count > 0" class="counting-wrapper">
        <img
          :src="delItemIconWhite"
          alt=""
          class="counting-button"
          @click="remProductEmit"
        />
      </div>
    </transition>
    <div class="counting-value">
      {{ Number(price) * (count > 0 ? count : 1) }}
      <img
        v-if="visibleToken"
        :src="count > 0 ? tokenItemWhite : tokenItemBlue"
        alt=""
      />
    </div>
    <div class="counting-wrapper">
      <img
        :src="count > 0 ? addItemIconWhite : addItemIconBlue"
        alt=""
        class="counting-button"
        @click="addProductEmit"
      />
    </div>
  </button>
</template>

<style scoped lang="scss">
.button-wrapper {
  background-color: var(--tertiary-fill-background);
  color: var(--button-color);
  transition: width 0.3s ease;
  &-active {
    background-color: var(--link-color);
    color: var(--button-text-color);
  }
}
button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  .counting {
    &-wrapper {
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;
    }
    &-value {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    &-button {
      width: 12px;
      height: 12px;
    }
  }

  &:hover {
    cursor: pointer;
  }
}

.fade-slide-enter-active {
  transition: all 2.3s ease;
  width: 12px;
}

.fade-slide-enter {
  width: 0;
}
</style>
