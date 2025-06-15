<template>
    <div class="text-center p-4">
        <p v-if="pending" class="text-gray-500">Loading products...</p>
        <p v-else-if="!products || products.length === 0" class="text-gray-500">No products found.</p>
        <div v-else class="grid grid-cols-4 gap-3">
            <ProductsCard v-for="product in products" :key="product.id" :product="product" />
        </div>
    </div>

</template>

<script lang="ts" setup>

const { data: products, pending } = await useFetch<Product[]>(
    'https://fakestoreapi.com/products/',
    { lazy: true }
)
</script>
