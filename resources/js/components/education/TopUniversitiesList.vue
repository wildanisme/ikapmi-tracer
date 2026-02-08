<template>
    <div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6">
        <div class="flex items-center justify-between">
            <div>
                <h3 class="text-lg font-semibold text-gray-800 dark:text-white/90">Top Universitas</h3>
                <p class="mt-1 text-theme-xs text-gray-500 dark:text-gray-400">
                    10 universitas dengan alumni terbanyak
                </p>
            </div>
        </div>

        <div class="mt-5">
            <div class="flex items-center justify-between border-b border-gray-200 pb-3 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:border-gray-800 dark:text-gray-400">
                <span>Universitas</span>
                <span>Total</span>
            </div>
            <div class="divide-y divide-gray-200 dark:divide-gray-800">
                <div v-for="item in items" :key="item.label" class="flex items-center justify-between py-4">
                    <span class="text-sm font-semibold text-gray-800 dark:text-white/90">
                        {{ item.label }}
                    </span>
                    <span class="text-sm text-gray-500 dark:text-gray-400">
                        {{ formatNumber(item.total) }}
                    </span>
                </div>
                <div v-if="!items.length" class="py-4 text-sm text-gray-500 dark:text-gray-400">
                    Belum ada data universitas.
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    items: {
        type: Array,
        default: () => [],
    },
});

const formatNumber = (value) => new Intl.NumberFormat('id-ID').format(value ?? 0);
</script>
