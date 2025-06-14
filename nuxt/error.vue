<template>
    <div class="h-screen flex flex-col justify-center items-center bg-gray-100">
        <h1 class="text-4xl font-bold mb-4">Error: {{ error.statusCode }}</h1>
        <p class="text-lg text-gray-700">{{ error.message }}</p>
        <NuxtLink to="/" class="mt-6 text-blue-500 hover:underline">Go back to Home</NuxtLink>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    error: {
        statusCode: number;
        message: string;
    };
}>();
</script>

<style></style>