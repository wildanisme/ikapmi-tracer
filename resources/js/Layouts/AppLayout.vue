<template>
    <div>
        <Preloader />

        <div class="min-h-screen xl:flex">
            <Backdrop />
            <Sidebar />

            <div
                class="flex-1 transition-all duration-300 ease-in-out"
                :class="contentClasses"
            >
                <AppHeader />
                <div class="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted } from 'vue';
import AppHeader from '../components/layout/AppHeader.vue';
import Backdrop from '../components/layout/Backdrop.vue';
import Preloader from '../components/common/Preloader.vue';
import Sidebar from '../components/layout/Sidebar.vue';
import { useSidebarStore } from '../stores/sidebar';
import { useThemeStore } from '../stores/theme';

const sidebar = useSidebarStore();
const theme = useThemeStore();
let cleanup = null;

onMounted(() => {
    theme.initTheme();
    cleanup = sidebar.initSidebar();
});

onBeforeUnmount(() => {
    if (cleanup) {
        cleanup();
    }
});

const contentClasses = computed(() => ({
    'xl:ml-[290px]': sidebar.state.isExpanded || sidebar.state.isHovered || sidebar.state.isMobileOpen,
    'xl:ml-[90px]': !sidebar.state.isExpanded && !sidebar.state.isHovered,
    'ml-0': sidebar.state.isMobileOpen,
}));
</script>
