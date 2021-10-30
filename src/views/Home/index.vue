<template>
  <div class="root-container">
    <div class="side-bar">
      <SideBar />
    </div>
    <div class="center-canvas">
      <CenterCanvas />
    </div>
    <div class="setting-panel">
      <SettingPanel />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from '@vue/runtime-core';

import CenterCanvas from "../CenterCanvas/CenterCanvas.vue"
import SideBar from "../Sidebar/Sidebar.vue"
import SettingPanel from "../SettingPanel/SettingPanel.vue"
import Input from "../../components/cards/Input/Input.vue"
import { cardsMap, registerAllCards } from '../../components/cards';

const value1 = ref('');

registerAllCards()
</script>

<style lang="scss">
.root-container {
  display: flex;
  width: 100%;
  height: 100%;

  .side-bar {
    width: 280px;
    border: 1px solid #ddd;
    height: 100%;
  }

  .center-canvas {
    flex: 1;
    height: 100%;
  }

  .setting-panel {
    width: 280px;
    border: 1px solid #ddd;
    height: 100%;
  }
}
</style>
