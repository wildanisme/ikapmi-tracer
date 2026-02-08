<template>
    <Head title="Talent Market" />
    <div class="grid grid-cols-12 gap-4 md:gap-6">
        <div class="col-span-12">
            <TalentTable :talents="talents" :filters="filters" :filter-options="filterOptions" />
        </div>
    </div>
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
import AppLayout from '../../Layouts/AppLayout.vue';
import TalentTable from '../../components/talent/TalentTable.vue';

defineProps({
    talents: {
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
            jobs: [],
            years: [],
            provinces: [],
            citiesByProvince: {},
        }),
    },
});

defineOptions({
    layout: AppLayout,
});
</script>
