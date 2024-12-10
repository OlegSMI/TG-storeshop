<template>
  <div class="loading-dots">
    <span class="dot" v-for="index in 3" :key="index"></span>
  </div>
</template>

<script lang="ts"></script>

<style scoped>
.loading-dots {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.dot {
  width: 10px;
  height: 10px;
  margin: 0 1px;
  border-radius: 50%;
  background-color: #3498db; /* Цвет точек */
  animation: dot-flashing 0.9s infinite both;
}

.dot:nth-child(1) {
  animation-delay: 0s;
}

.dot:nth-child(2) {
  animation-delay: 0.3s;
}

.dot:nth-child(3) {
  animation-delay: 0.6s;
}

@keyframes dot-flashing {
  0%,
  80%,
  100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
</style>
