<template>
    <Head title="Line Chart" />
    <PageBreadcrumb pageTitle="Line chart" />
    <div class="space-y-6">
        <ComponentCard title="Line chart 1">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chartThree" class="min-w-[1000px]"></div>
            </div>
        </ComponentCard>

        <ComponentCard title="Line chart 2">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chartEight" class="min-w-[1000px]"></div>
            </div>
        </ComponentCard>

        <ComponentCard title="Line chart 3">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chartThirteen" class="min-w-[1000px]"></div>
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
import initChartThree from '../../components/chart/chart-3';
import { initChartEight } from '../../components/chart/chart-8';
import { initChartThirteen } from '../../components/chart/chart-13';

defineOptions({
    layout: AppLayout,
});

onMounted(() => {
    requestAnimationFrame(() => {
        initChartThree();
        initChartEight();
        initChartThirteen();
    });
});
</script>
