<template>
  <a-input v-model:value="inputValue" placeholder="请输入内容" />
</template>

<script lang="ts">
  export default {
    name: 'InputCard',
  }
</script>

<script setup lang="ts">
import { computed } from '@vue/runtime-core';

interface Props {
  modelValue: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
})
const emit = defineEmits<{
  (e: 'update:modelValue', val: string): void
}>()

const inputValue = computed({
  get() {
    return props.modelValue
  },
  set(newValue: string) {
    emit('update:modelValue', newValue)
  }
});
</script>
