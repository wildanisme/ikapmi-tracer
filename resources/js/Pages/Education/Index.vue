<template>
    <Head title="Education" />
    <div class="grid grid-cols-12 gap-4 md:gap-6">
        <div class="col-span-12">
            <div class="flex flex-wrap items-center gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4 dark:border-gray-800 dark:bg-white/[0.03]">
                <div class="text-sm font-medium text-gray-700 dark:text-gray-300">Filter</div>
                <div class="w-[220px]">
                    <SearchableSelect
                        v-model="filters.graduation_year"
                        :options="filterOptions.years"
                        placeholder="Tahun Lulus"
                        @update:modelValue="applyFilters"
                    />
                </div>
                <div class="w-[240px]">
                    <SearchableSelect
                        v-model="filters.university"
                        :options="filterOptions.universities"
                        placeholder="Universitas"
                        @update:modelValue="applyFilters"
                    />
                </div>
                <button
                    type="button"
                    class="rounded-lg border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300"
                    @click="resetFilters"
                >
                    Reset
                </button>
            </div>
        </div>

        <div v-if="activeFilters.length" class="col-span-12">
            <div class="flex flex-wrap items-center gap-2 text-sm">
                <span class="text-gray-500 dark:text-gray-400">Filter aktif:</span>
                <button
                    v-for="chip in activeFilters"
                    :key="chip.key"
                    type="button"
                    class="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
                    @click="clearFilter(chip.key)"
                >
                    {{ chip.label }}: {{ chip.value }}
                    <span class="text-gray-400">×</span>
                </button>
                <button
                    type="button"
                    class="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-3 py-1 text-xs font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
                    @click="resetFilters"
                >
                    Reset
                </button>
            </div>
        </div>

        <div class="col-span-12 xl:col-span-6">
            <BarChartCard
                title="Pendidikan Terakhir Alumni"
                subtitle="Jumlah alumni berdasarkan pendidikan terakhir"
                :chart-data="educationChart"
            />
        </div>

        <div class="col-span-12 xl:col-span-6">
            <BarChartCard
                title="Top Jurusan"
                subtitle="10 jurusan dengan alumni terbanyak"
                :chart-data="departmentChart"
            />
        </div>

        <div class="col-span-12">
            <TopUniversitiesList :items="universityStats" />
        </div>
    </div>
</template>

<script setup>
import { Head, router } from '@inertiajs/vue3';
import { computed, reactive } from 'vue';
import AppLayout from '../../Layouts/AppLayout.vue';
import SearchableSelect from '../../components/common/SearchableSelect.vue';
import BarChartCard from '../../components/common/BarChartCard.vue';
import TopUniversitiesList from '../../components/education/TopUniversitiesList.vue';

const props = defineProps({
    educationStats: {
        type: Array,
        default: () => [],
    },
    departmentStats: {
        type: Array,
        default: () => [],
    },
    universityStats: {
        type: Array,
        default: () => [],
    },
    filterOptions: {
        type: Object,
        default: () => ({
            years: [],
            universities: [],
        }),
    },
    filters: {
        type: Object,
        default: () => ({
            graduation_year: '',
            university: '',
        }),
    },
});

const filters = reactive({
    graduation_year: props.filters.graduation_year ?? '',
    university: props.filters.university ?? '',
});

const educationChart = computed(() => ({
    categories: props.educationStats.map((row) => row.label),
    series: [
        {
            name: 'Jumlah',
            data: props.educationStats.map((row) => row.total),
        },
    ],
}));

const departmentChart = computed(() => ({
    categories: props.departmentStats.map((row) => row.label),
    series: [
        {
            name: 'Jumlah',
            data: props.departmentStats.map((row) => row.total),
        },
    ],
}));

const applyFilters = () => {
    router.get('/education', { ...filters }, {
        preserveState: true,
        preserveScroll: true,
        replace: true,
    });
};

const resetFilters = () => {
    filters.graduation_year = '';
    filters.university = '';
    applyFilters();
};

const activeFilters = computed(() => {
    const items = [];
    if (filters.graduation_year) {
        items.push({ key: 'graduation_year', label: 'Tahun', value: filters.graduation_year });
    }
    if (filters.university) {
        items.push({ key: 'university', label: 'Universitas', value: filters.university });
    }
    return items;
});

const clearFilter = (key) => {
    if (key === 'graduation_year') {
        filters.graduation_year = '';
    }
    if (key === 'university') {
        filters.university = '';
    }
    applyFilters();
};

defineOptions({
    layout: AppLayout,
});
</script>
