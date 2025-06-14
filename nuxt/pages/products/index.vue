<template>
    <div class="grid grid-cols-4 gap-3">
        <ProductsCard v-for="product in products" :key="product.id" :product="product" />
    </div>
</template>

<script lang="ts" setup>

const { data: products } = await useFetch<Product[]>(
    'https://fakestoreapi.com/products/',
)
</script>
