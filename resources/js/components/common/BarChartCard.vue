<template>
    <div class="overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 sm:px-6 sm:pt-6 dark:border-gray-800 dark:bg-white/[0.03]">
        <div class="flex items-center justify-between">
            <div>
                <h3 class="text-lg font-semibold text-gray-800 dark:text-white/90">{{ title }}</h3>
                <p v-if="subtitle" class="mt-1 text-theme-xs text-gray-500 dark:text-gray-400">
                    {{ subtitle }}
                </p>
            </div>
        </div>

        <div class="max-w-full overflow-x-auto custom-scrollbar">
            <div ref="chartEl" class="-ml-5 h-[320px] min-w-[640px] pl-2 xl:min-w-full"></div>
            <p v-if="!hasData" class="px-5 pb-5 text-sm text-gray-500 dark:text-gray-400">
                Data belum tersedia.
            </p>
        </div>
    </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';

const props = defineProps({
    title: {
        type: String,
        default: 'Chart',
    },
    subtitle: {
        type: String,
        default: '',
    },
    chartData: {
        type: Object,
        default: () => ({
            categories: [],
            series: [],
        }),
    },
    colors: {
        type: Array,
        default: () => ['#2563eb'],
    },
    horizontal: {
        type: Boolean,
        default: false,
    },
});

const chartEl = ref(null);
let chartInstance = null;
let themeObserver = null;

const hasData = computed(() => props.chartData.categories?.length);

const getLabelColor = () =>
    document.documentElement.classList.contains('dark') ? '#e2e8f0' : '#334155';

const buildOptions = () => ({
    series: props.chartData.series ?? [],
    colors: props.colors,
    chart: {
        fontFamily: 'Outfit, sans-serif',
        type: 'bar',
        height: 320,
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            horizontal: props.horizontal,
            columnWidth: '45%',
            borderRadius: 6,
            borderRadiusApplication: 'end',
        },
    },
    dataLabels: {
        enabled: true,
        offsetY: props.horizontal ? 0 : -10,
        offsetX: props.horizontal ? 8 : 0,
        style: {
            colors: [getLabelColor()],
            fontSize: '12px',
            fontWeight: 600,
        },
    },
    stroke: {
        show: true,
        width: 4,
        colors: ['transparent'],
    },
    xaxis: {
        categories: props.chartData.categories ?? [],
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        labels: {
            rotate: props.horizontal ? 0 : -30,
        },
    },
    yaxis: {
        labels: {
            formatter: (value) => Math.round(value),
        },
    },
    grid: {
        yaxis: {
            lines: {
                show: true,
            },
        },
    },
    fill: {
        opacity: 1,
    },
    tooltip: {
        x: {
            show: false,
        },
    },
});

const renderChart = () => {
    if (!chartEl.value || !window.ApexCharts) {
        return;
    }

    if (chartInstance) {
        chartInstance.updateOptions(
            {
                xaxis: {
                    categories: props.chartData.categories ?? [],
                },
                series: props.chartData.series ?? [],
                dataLabels: {
                    style: {
                        colors: [getLabelColor()],
                    },
                },
            },
            false,
            true
        );
        return;
    }

    chartInstance = new window.ApexCharts(chartEl.value, buildOptions());
    chartInstance.render();
};

onMounted(() => {
    renderChart();

    themeObserver = new MutationObserver(() => {
        if (chartInstance) {
            chartInstance.updateOptions(
                {
                    dataLabels: {
                        style: {
                            colors: [getLabelColor()],
                        },
                    },
                },
                false,
                false
            );
        }
    });

    themeObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class'],
    });
});

watch(
    () => props.chartData,
    () => {
        renderChart();
    },
    { deep: true }
);

onBeforeUnmount(() => {
    if (chartInstance) {
        chartInstance.destroy();
        chartInstance = null;
    }
    if (themeObserver) {
        themeObserver.disconnect();
    }
});
</script>
