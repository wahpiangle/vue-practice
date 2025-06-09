<script setup lang="ts">
import { ref } from 'vue'
import GlobalStateComponent from './globalStateComponent.vue';

defineProps<{ msg: string }>()

const count = ref(0)

function incrementCount() {
  count.value++;
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <button type="button" @click="incrementCount">incrementCount button</button>
  </div>
  <GlobalStateComponent />

</template>

<style scoped></style>
