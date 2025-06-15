<template>
    <Motion as="ul" :variants="container" initial="hidden" animate="visible" :transition="{
        type: 'spring',
        delayChildren: 0.5,
        staggerChildren: 0.2,
    }" class="rounded-2xl  list-none p-2 aspect-square bg-green-400/20 w-1/3 flex items-center flex-col">
        <motion.h1 class="text-2xl font-bold" :variants="items">{{ product.title }}
        </motion.h1>
        <motion.p class="text-gray-700" :variants="items">Product ID:
            {{ product.id }}</motion.p>
        <motion.p class="text-gray-700" :variants="items">Category:
            {{ product.category }}</motion.p>
        <motion.p class="mt-2" :variants="items">{{ product.description }}</motion.p>
        <Motion :variants="items">
            <NuxtImg placeholder placeholder-class="w-20 h-20" :src="product.image" alt="Product Image"
                class="mt-4 w-20 rounded" />
        </Motion>
        <motion.p :variants="items">
            ${{ product.price }}
        </motion.p>
        <motion.button :variants="items"
            class="rounded-2xl bg-green-300 px-4 py-2 mt-2 cursor-pointer hover:scale-110 transition ease-in-out">
            Add to Cart
        </motion.button>
    </Motion>
</template>

<script lang="ts" setup>
import { motion, Motion } from 'motion-v';
defineProps<{
    product: Product;
}>();
const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
    },
}

const items = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};


</script>

<style></style>