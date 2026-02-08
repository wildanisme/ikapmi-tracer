<template>
    <div
        :class="sidebar.state.isMobileOpen ? 'block xl:hidden' : 'hidden'"
        class="fixed z-50 h-screen w-full bg-gray-900/50"
        @click="sidebar.setMobileOpen(false)"
    ></div>
</template>

<script setup>
import { useSidebarStore } from '../../stores/sidebar';

const sidebar = useSidebarStore();
</script>
