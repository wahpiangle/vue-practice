<template>
    <h1 class="text-2xl font-bold">{{ product.title }}</h1>
    <p class="mt-2">{{ product.description }}</p>
    <p class="mt-2 text-lg font-semibold">${{ product.price }}</p>
    <NuxtImg placeholder placeholder-class="w-20 h-20" :src="product.image" alt="Product Image"
        class="mt-4 w-20 rounded" />
</template>

<script lang="ts" setup>
defineProps<{
    product: Product;
}>();
</script>

<style></style>