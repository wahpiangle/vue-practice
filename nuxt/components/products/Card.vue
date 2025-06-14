<template>
    <div class="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow">
        <NuxtImg placeholder placeholder-class="w-20 h-20" :src="product.image" alt="Product Image"
            class="mt-4 w-20 rounded" />
        <h1>{{ product.title }}</h1>
        <p class="mt-2 text-lg font-semibold">${{ product.price }}</p>
        <NuxtLink :to="`/products/${product.id}`" :key="product.id"
            class="bg-white p-4 rounded-lg shadow hover:bg-gray-200 mt-4">
            View Details
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    product: Product;
}>();
</script>

<style></style>