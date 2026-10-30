<script lang="ts" setup>
const appStore = useAppStore();
</script>

<template>
  <main class="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center">
    <h1 class="text-4xl">Welcome to {{ appStore.name }}</h1>
  </main>
</template>
