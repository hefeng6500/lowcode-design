<template>
  <div class="center-container">
    <OperateBar />
    <Canvas class="canvas" />
  </div>
</template>
<script setup lang="ts">
import OperateBar from "./OperateBar/OperateBar.vue";
import Canvas from "./Canvas/Canvas.vue";

import { computed, reactive, ref } from '@vue/runtime-core';
</script>
<style lang="scss">
.center-container {
  display: flex;
  flex-direction: column;
  height: 100%;

  .canvas {
    flex: 1;
    margin: 10px;
  }
}
</style>
