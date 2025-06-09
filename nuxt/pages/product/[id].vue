<template>
    <div>
        <p>Product ID {{ id }}</p>
    </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const id = route.params.id as string;

</script>

<style></style>