<template>
    <div
        v-show="loaded"
        class="fixed left-0 top-0 z-999999 flex h-screen w-screen items-center justify-center bg-white dark:bg-black"
    >
        <div
            class="h-16 w-16 animate-spin rounded-full border-4 border-solid border-brand-500 border-t-transparent"
        ></div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const loaded = ref(true);

onMounted(() => {
    setTimeout(() => {
        loaded.value = false;
    }, 350);
});
</script>
