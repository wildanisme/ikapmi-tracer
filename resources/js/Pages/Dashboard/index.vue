<template>
    <Head title="Ecommerce" />
    <div class="grid grid-cols-12 gap-4 md:gap-6">
        <div class="col-span-12 space-y-6 xl:col-span-12">
            <AlumniMetrics
                :total="alumniMetrics.total"
                :male="alumniMetrics.male"
                :female="alumniMetrics.female"
            />
        </div>

        <div class="col-span-12 space-y-6 xl:col-span-12">
            <AlumniDemographic :cities="alumniCityDemographics" />
        </div>

        <div class="col-span-12 xl:col-span-12">
            <AlumniChart :chart-data="alumniGraduationChart" />
        </div>

        <div class="col-span-12 grid gap-4 md:grid-cols-2 md:gap-6">
            <AlumniJobs :jobs="alumniTopJobs" />
            <AlumniCompanies :companies="alumniTopCompanies" />
        </div>
    </div>
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
import AppLayout from '../../Layouts/AppLayout.vue';
import AlumniMetrics from '../../components/dashboard/AlumniMetrics.vue';
import AlumniDemographic from '../../components/dashboard/AlumniDemographic.vue';
import AlumniChart from '../../components/dashboard/AlumniChart.vue';
import AlumniJobs from '../../components/dashboard/AlumniJobs.vue';
import AlumniCompanies from '../../components/dashboard/AlumniCompanies.vue';

defineProps({
    alumniMetrics: {
        type: Object,
        default: () => ({
            total: 0,
            male: 0,
            female: 0,
        }),
    },
    alumniCityDemographics: {
        type: Array,
        default: () => [],
    },
    alumniGraduationChart: {
        type: Object,
        default: () => ({
            categories: [],
            series: [],
        }),
    },
    alumniTopJobs: {
        type: Array,
        default: () => [],
    },
    alumniTopCompanies: {
        type: Array,
        default: () => [],
    },
});

defineOptions({
    layout: AppLayout,
});
</script>
