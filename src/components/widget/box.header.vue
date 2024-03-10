<template>
  <div class="d-flex pa-4">
    <h1 class="text-blue-darken-4"><v-icon class="mr-2" color="blue-darken-4" :icon="icon"></v-icon>{{ title }}</h1>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  title: String,
  icon: String,
})

</script>

<style lang="scss" scoped></style>