<template>
    <Head title="Buku Induk Alumni" />
    <div class="grid grid-cols-12 gap-4 md:gap-6">
        <div class="col-span-12">
            <BukuIndukTable :alumni="alumni" :filters="filters" :filter-options="filterOptions" />
        </div>
    </div>
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
import AppLayout from '../../Layouts/AppLayout.vue';
import BukuIndukTable from '../../components/alumni/BukuIndukTable.vue';

defineProps({
    alumni: {
        type: Object,
        required: true,
    },
    filters: {
        type: Object,
        default: () => ({}),
    },
    filterOptions: {
        type: Object,
        default: () => ({
            years: [],
            provinces: [],
            cities: [],
            jobs: [],
            companies: [],
            domisilis: [],
            citiesByProvince: {},
            districtsByCity: {},
        }),
    },
});

defineOptions({
    layout: AppLayout,
});
</script>
