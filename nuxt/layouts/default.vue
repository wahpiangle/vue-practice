<template>
    <nav class=" p-4 bg-gray-200">
        <ul class="flex space-x-4">
            <li v-for="link in links" :key="link.name">
                <NuxtLink :to="link.path">
                    {{ link.name }}
                </NuxtLink>
            </li>
        </ul>
    </nav>
    <slot />
</template>

<script setup lang="ts">
const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
];
</script>