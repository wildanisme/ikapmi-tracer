<template>
    <Head title="Map Alumni" />
    <div class="grid grid-cols-12 gap-4 md:gap-6">
        <div class="col-span-12">
            <div class="flex flex-wrap items-center gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4 dark:border-gray-800 dark:bg-white/[0.03]">
                <div class="text-sm font-medium text-gray-700 dark:text-gray-300">Filter</div>
                <div class="w-[200px]">
                    <SearchableSelect
                        v-model="filters.year"
                        :options="filterOptions.years"
                        placeholder="Tahun Lulus"
                        @update:modelValue="applyFilters"
                    />
                </div>
                <div class="w-[240px]">
                    <SearchableSelect
                        v-model="filters.job"
                        :options="filterOptions.jobs"
                        placeholder="Pekerjaan"
                        @update:modelValue="applyFilters"
                    />
                </div>
                <div class="w-[240px]">
                    <SearchableSelect
                        v-model="filters.city"
                        :options="filterOptions.cities"
                        placeholder="Kota Asal"
                        @update:modelValue="applyFilters"
                    />
                </div>
                <div class="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-2 py-1 dark:border-gray-800 dark:bg-gray-900">
                    <button
                        type="button"
                        class="rounded-md px-3 py-1 text-xs font-semibold"
                        :class="filters.mode === 'city' ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-gray-300'"
                        @click="setMode('city')"
                    >
                        Asal (City)
                    </button>
                    <button
                        type="button"
                        class="rounded-md px-3 py-1 text-xs font-semibold"
                        :class="filters.mode === 'domisili' ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-gray-300'"
                        @click="setMode('domisili')"
                    >
                        Domisili
                    </button>
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

        <div class="col-span-12">
            <AlumniDemographic
                :cities="mapStats"
                :title="filters.mode === 'domisili' ? 'Peta Persebaran Domisili Alumni' : 'Peta Persebaran Alumni'"
                :subtitle="subtitleText"
                map-id="petaOverviewMap"
                height-class="h-[400px]"
                :show-dropdown="false"
                :fit-to-data="false"
                :initial-center="[-2.5, 118]"
                :initial-zoom="5"
            />
        </div>
        <div class="col-span-12">
            <TopCitiesList :items="topCities" />
        </div>
    </div>
</template>

<script setup>
import { Head, router } from '@inertiajs/vue3';
import { computed, onMounted, reactive } from 'vue';
import AppLayout from '../../Layouts/AppLayout.vue';
import AlumniDemographic from '../../components/dashboard/AlumniDemographic.vue';
import SearchableSelect from '../../components/common/SearchableSelect.vue';
import TopCitiesList from '../../components/maps/TopCitiesList.vue';

const props = defineProps({
    mapStats: {
        type: Array,
        default: () => [],
    },
    filterOptions: {
        type: Object,
        default: () => ({
            years: [],
            jobs: [],
            cities: [],
        }),
    },
    filters: {
        type: Object,
        default: () => ({
            year: '',
            job: '',
            city: '',
            mode: 'city',
        }),
    },
    topCities: {
        type: Array,
        default: () => [],
    },
});

const filters = reactive({
    year: props.filters.year ?? '',
    job: props.filters.job ?? '',
    city: props.filters.city ?? '',
    mode: props.filters.mode ?? 'city',
});

const hasFilterOptions = computed(() => {
    const years = props.filterOptions?.years?.length ?? 0;
    const jobs = props.filterOptions?.jobs?.length ?? 0;
    const cities = props.filterOptions?.cities?.length ?? 0;
    return years + jobs + cities > 0;
});

const applyFilters = () => {
    router.get('/map', { ...filters }, {
        preserveState: true,
        preserveScroll: true,
        replace: true,
        only: ['mapStats', 'topCities', 'filters'],
    });
};

const setMode = (mode) => {
    filters.mode = mode;
    applyFilters();
};

const resetFilters = () => {
    filters.year = '';
    filters.job = '';
    filters.city = '';
    filters.mode = 'city';
    applyFilters();
};

const activeFilters = computed(() => {
    const items = [];
    if (filters.year) {
        items.push({ key: 'year', label: 'Tahun', value: filters.year });
    }
    if (filters.job) {
        items.push({ key: 'job', label: 'Pekerjaan', value: filters.job });
    }
    if (filters.city) {
        items.push({ key: 'city', label: 'Kota', value: filters.city });
    }
    if (filters.mode && filters.mode !== 'city') {
        items.push({ key: 'mode', label: 'Mode', value: 'Domisili' });
    }
    return items;
});

const clearFilter = (key) => {
    if (key === 'year') {
        filters.year = '';
    }
    if (key === 'job') {
        filters.job = '';
    }
    if (key === 'city') {
        filters.city = '';
    }
    if (key === 'mode') {
        filters.mode = 'city';
    }
    applyFilters();
};

const subtitleText = computed(() => {
    const parts = [];
    if (filters.year) {
        parts.push(`Tahun ${filters.year}`);
    }
    if (filters.job) {
        parts.push(filters.job);
    }
    if (filters.city) {
        parts.push(`Kota asal: ${filters.city}`);
    }
    return parts.length ? `Filter: ${parts.join(' • ')}` : 'Gambaran umum alumni berdasarkan kota/kabupaten';
});

const loadFilterOptions = () => {
    if (hasFilterOptions.value) {
        return;
    }
    router.reload({
        only: ['filterOptions'],
        preserveState: true,
        preserveScroll: true,
        replace: true,
    });
};

onMounted(() => {
    loadFilterOptions();
});

defineOptions({
    layout: AppLayout,
});
</script>
