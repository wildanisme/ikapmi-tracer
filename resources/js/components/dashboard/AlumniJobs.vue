<template>
    <div class="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
        <div class="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <h3 class="text-lg font-semibold text-gray-800 dark:text-white/90">Top Pekerjaan Alumni</h3>
                <p class="text-theme-xs text-gray-500 dark:text-gray-400">Top 5 berdasarkan jumlah alumni</p>
            </div>
        </div>

        <div class="max-w-full overflow-x-auto custom-scrollbar">
            <table class="min-w-full">
                <thead>
                    <tr class="border-t border-gray-100 dark:border-gray-800">
                        <th class="py-3 text-left">
                            <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Pekerjaan</p>
                        </th>
                        <th class="py-3 text-right">
                            <p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Total</p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="job in jobsList"
                        :key="job.name"
                        class="border-t border-gray-100 dark:border-gray-800"
                    >
                        <td class="py-3">
                            <p class="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                {{ job.name }}
                            </p>
                        </td>
                        <td class="py-3 text-right">
                            <p class="text-gray-500 text-theme-sm dark:text-gray-400">
                                {{ formatNumber(job.total) }}
                            </p>
                        </td>
                    </tr>
                    <tr v-if="!jobsList.length" class="border-t border-gray-100 dark:border-gray-800">
                        <td class="py-3" colspan="2">
                            <p class="text-theme-sm text-gray-500 dark:text-gray-400">Belum ada data pekerjaan alumni.</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    jobs: {
        type: Array,
        default: () => [],
    },
});

const jobsList = computed(() => props.jobs);

const formatNumber = (value) => new Intl.NumberFormat('id-ID').format(value ?? 0);
</script>
