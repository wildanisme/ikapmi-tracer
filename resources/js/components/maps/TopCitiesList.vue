<template>
    <div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white/90">Top Kota Alumni</h3>
        <p class="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">5 kota dengan alumni terbanyak</p>

        <div class="mt-5 space-y-4">
            <div v-for="(item, index) in items" :key="item.city" class="space-y-2">
                <div class="flex items-center justify-between text-sm">
                    <span class="font-medium text-gray-700 dark:text-gray-200">
                        {{ index + 1 }}. {{ item.city }}
                    </span>
                    <span class="text-gray-500 dark:text-gray-400">{{ formatNumber(item.total) }}</span>
                </div>
                <div class="h-2 w-full rounded-full bg-gray-100 dark:bg-gray-800">
                    <div
                        class="h-2 rounded-full bg-blue-500"
                        :style="{ width: `${percentage(item.total)}%` }"
                    ></div>
                </div>
                <div class="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                    <span>L: {{ formatNumber(item.male) }}</span>
                    <span>P: {{ formatNumber(item.female) }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    items: {
        type: Array,
        default: () => [],
    },
});

const maxTotal = computed(() => Math.max(1, ...props.items.map((item) => item.total ?? 0)));

const percentage = (value) => Math.round((value / maxTotal.value) * 100);
const formatNumber = (value) => new Intl.NumberFormat('id-ID').format(value ?? 0);
</script>
