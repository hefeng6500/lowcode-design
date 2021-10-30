<template>
  <a-button :type="props.type" @click="btnClick">{{ props.text }}</a-button>
</template>
<script lang="ts">
export default {
  name: "ButtonCard"
}
</script>
<script setup lang="ts">

type BtnType = "default" | "primary" | "link" | "text" | "dashed" | "ghost" | undefined;

interface Props {
  type: BtnType,
  text: string
}

const emit = defineEmits<{
  (e: 'click'): void
}>()
const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
})
const btnClick = () => {
  emit('click')
}
</script>
