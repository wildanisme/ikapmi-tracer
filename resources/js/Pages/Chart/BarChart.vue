<template>
    <Head title="Bar Chart" />
    <PageBreadcrumb pageTitle="Bar chart" />
    <div class="space-y-6">
        <ComponentCard title="Bar chart 1">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chartOne" class="min-w-[1000px]"></div>
            </div>
        </ComponentCard>

        <ComponentCard title="Bar chart 2">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chartSix" class="min-w-[1000px]"></div>
            </div>
        </ComponentCard>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { Head } from '@inertiajs/vue3';
import AppLayout from '../../Layouts/AppLayout.vue';
import ComponentCard from '../../components/common/ComponentCard.vue';
import PageBreadcrumb from '../../components/common/PageBreadcrumb.vue';
import initChartOne from '../../components/chart/chart-1';
import { initChartSix } from '../../components/chart/chart-6';

defineOptions({
    layout: AppLayout,
});

onMounted(() => {
    requestAnimationFrame(() => {
        initChartOne();
        initChartSix();
    });
});
</script>
