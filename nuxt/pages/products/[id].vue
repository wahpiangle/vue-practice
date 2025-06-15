<template>

    <Head>
        <title>Products</title>
    </Head>
    <div v-if="product" class="bg-white p-4 rounded-lg shadow">
        <ProductsInfo :product />
    </div>
</template>

<script lang="ts" setup>

import { useRoute } from 'vue-router';
definePageMeta({
    layout: 'products',
})

const route = useRoute();
const id = route.params.id as string;
const { data: product } = await useFetch<Product>(
    `https://fakestoreapi.com/products/${id}`,
)

if (!product.value) {
    throw createError({
        statusCode: 404,
        message: 'Product not found',
    });
}
</script>

<style></style>