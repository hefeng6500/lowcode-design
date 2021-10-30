<template>setting</template>
<script setup lang="ts">
import { computed, reactive, ref } from '@vue/runtime-core';
import { useStore } from 'vuex'
import { key } from '../../store'
const store = useStore(key)

store.state.count // 类型为 number
</script>
<style lang="scss">
</style>
