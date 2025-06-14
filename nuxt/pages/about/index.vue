<template>
    About Page
</template>

<script lang="ts" setup>
await useFetch('/api/hello', {
    method: 'POST',
    body: {
        name: 'John Doe',
        age: 30,
    },
})

await useFetch('/api/products/2', {
    method: 'GET',
    query: {
        name: 'John Doe',
        age: 30,
    },
})
</script>

<style></style>