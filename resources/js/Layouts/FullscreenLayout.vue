<template>
    <div>
        <Preloader />
        <slot />
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Preloader from '../components/common/Preloader.vue';
import { useThemeStore } from '../stores/theme';

const theme = useThemeStore();

onMounted(() => {
    theme.initTheme();
});
</script>
