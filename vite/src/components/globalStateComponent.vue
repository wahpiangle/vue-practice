<template>
    <div>
        {{ store.count }}
    </div>
    <button @click="store.increment">
        Increment
    </button>
</template>

<script lang="ts" setup>
import { store } from '../composables/store';


</script>

<style></style>