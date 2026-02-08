<template>
    <div class="overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 sm:px-6 sm:pt-6 dark:border-gray-800 dark:bg-white/[0.03]">
        <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white/90">Alumni Chart </h3>
            <DropdownMenu />
        </div>

        <div class="max-w-full overflow-x-auto custom-scrollbar">
            <div ref="chartEl" class="-ml-5 h-[320px] min-w-[690px] pl-2 xl:min-w-full"></div>
            <p v-if="!hasData" class="px-5 pb-5 text-sm text-gray-500 dark:text-gray-400">
                Belum ada data alumni berdasarkan tahun lulus.
            </p>
        </div>
    </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import DropdownMenu from '../common/DropdownMenu.vue';

const props = defineProps({
    chartData: {
        type: Object,
        default: () => ({
            categories: [],
            series: [],
        }),
    },
});

const chartEl = ref(null);
let chartInstance = null;
let themeObserver = null;

const hasData = computed(() => props.chartData.categories?.length);

const formatNumber = (value) => new Intl.NumberFormat('id-ID').format(value ?? 0);

const getLabelColor = () =>
    document.documentElement.classList.contains('dark') ? '#e2e8f0' : '#334155';

const buildOptions = () => ({
    series: props.chartData.series ?? [],
    colors: ['#2563eb', '#f97316'],
    chart: {
        fontFamily: 'Outfit, sans-serif',
        type: 'bar',
        height: 320,
        stacked: true,
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '45%',
            borderRadius: 6,
            borderRadiusApplication: 'end',
            dataLabels: {
                position: 'top',
            },
        },
    },
    dataLabels: {
        enabled: true,
        offsetY: -16,
        style: {
            colors: [getLabelColor()],
            fontSize: '12px',
            fontWeight: 600,
        },
        formatter: (val, opts) => {
            const series = opts.w?.globals?.series ?? [];
            const collapsed = new Set(opts.w?.globals?.collapsedSeriesIndices ?? []);
            const visibleIndices = series
                .map((_, index) => index)
                .filter((index) => !collapsed.has(index));

            if (!visibleIndices.length) {
                return '';
            }

            const lastVisibleIndex = visibleIndices[visibleIndices.length - 1];
            if (opts.seriesIndex !== lastVisibleIndex) {
                return '';
            }

            const totals = visibleIndices.reduce((sum, index) => {
                return sum + (Number(series[index]?.[opts.dataPointIndex]) || 0);
            }, 0);

            return formatNumber(totals);
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
    },
    legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'left',
        fontFamily: 'Outfit',
        markers: {
            radius: 99,
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
        y: {
            formatter: (val) => formatNumber(val),
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
    if (themeObserver) {
        themeObserver.disconnect();
        themeObserver = null;
    }
    if (chartInstance) {
        chartInstance.destroy();
        chartInstance = null;
    }
});
</script>
