<template>
    <div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6">
        <div class="flex flex-wrap items-start justify-between gap-2">
            <div>
                <h3 class="text-lg font-semibold text-gray-800 dark:text-white/90">{{ title }}</h3>
                <p class="mt-1 text-theme-sm text-gray-500 dark:text-gray-400">
                    {{ subtitle }}
                </p>
            </div>
            <DropdownMenu v-if="showDropdown" />
        </div>

        <div class="border-gary-200 my-6 overflow-hidden rounded-2xl border bg-gray-50 px-4 py-6 dark:border-gray-800 dark:bg-gray-900 sm:px-6">
            <div
                :id="mapId"
                ref="mapElement"
                class="-mx-4 -my-6 w-full sm:-mx-6"
                :class="heightClass"
            ></div>
        </div>
        <p v-if="showFooter" class="text-xs text-gray-500 dark:text-gray-400">
            Sumber batas wilayah: geoBoundaries (BPS/WFP/OCHA), CC BY 3.0 IGO.
        </p>
        <p
            v-if="showFooter && unmatchedCitiesCount"
            class="mt-3 rounded-lg border border-yellow-200 bg-yellow-50 px-3 py-2 text-xs text-yellow-700 dark:border-yellow-500/40 dark:bg-yellow-500/10 dark:text-yellow-200"
        >
            {{ unmatchedCitiesCount }} kota tidak ditemukan di data batas wilayah, tidak ditampilkan di peta.
        </p>
    </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import DropdownMenu from '../common/DropdownMenu.vue';

const props = defineProps({
    cities: {
        type: Array,
        default: () => [],
    },
    title: {
        type: String,
        default: 'Alumni Demographic',
    },
    subtitle: {
        type: String,
        default: 'Persebaran alumni berdasarkan kota',
    },
    mapId: {
        type: String,
        default: 'alumniCityMap',
    },
    heightClass: {
        type: String,
        default: 'h-[320px] sm:h-[360px] lg:h-[420px] xl:h-[460px] 2xl:h-[520px]',
    },
    showDropdown: {
        type: Boolean,
        default: true,
    },
    showFooter: {
        type: Boolean,
        default: true,
    },
    initialCenter: {
        type: Array,
        default: () => [-2.5, 118],
    },
    initialZoom: {
        type: Number,
        default: 4,
    },
    fitToData: {
        type: Boolean,
        default: true,
    },
});

const mapInstance = ref(null);
const geojsonLayer = ref(null);
const geojsonData = ref(null);
const mapElement = ref(null);
let leafletModule = null;

const citiesList = computed(() => props.cities);
const unmatchedCitiesCount = ref(0);
const matchedCityKeys = ref(new Set());

const formatNumber = (value) => new Intl.NumberFormat('id-ID').format(value ?? 0);

const normalizeCityName = (value) => {
    return String(value ?? '')
        .toLowerCase()
        .replace(/kabupaten|kab\.?|kota adm\.?|kota administratif|kota/g, '')
        .replace(/[^a-z0-9]/g, '')
        .trim();
};

const cityStatsMap = computed(() => {
    const map = new Map();
    citiesList.value.forEach((city) => {
        map.set(normalizeCityName(city.city), city);
    });
    return map;
});

const getFeatureName = (properties = {}) => {
    return (
        properties.shapeName ||
        properties.NAME_2 ||
        properties.name ||
        properties.NAME_1 ||
        properties.NAME ||
        ''
    );
};

const loadLeaflet = async () => {
    if (leafletModule) {
        return leafletModule;
    }

    const [{ default: L }] = await Promise.all([
        import('leaflet'),
        import('leaflet/dist/leaflet.css'),
    ]);

    leafletModule = L;
    return L;
};

const getChoroplethColor = (value, maxValue) => {
    const ratio = Math.min(value / Math.max(maxValue, 1), 1);
    if (value === 0) return '#e5e7eb';
    if (ratio > 0.8) return '#1d4ed8';
    if (ratio > 0.6) return '#2563eb';
    if (ratio > 0.4) return '#3b82f6';
    if (ratio > 0.2) return '#60a5fa';
    return '#93c5fd';
};

const loadGeojson = async () => {
    if (geojsonData.value) {
        return geojsonData.value;
    }

    const response = await fetch('/geo/indonesia-kabkota.geojson');
    geojsonData.value = await response.json();
    return geojsonData.value;
};

const renderGeojson = async () => {
    if (!mapInstance.value) {
        return;
    }

    const L = await loadLeaflet();
    const data = await loadGeojson();
    const maxTotal = Math.max(1, ...citiesList.value.map((city) => city.total));

    if (geojsonLayer.value) {
        geojsonLayer.value.remove();
    }

    matchedCityKeys.value = new Set();

    geojsonLayer.value = L.geoJSON(data, {
        style: (feature) => {
            const featureName = getFeatureName(feature.properties);
            const stats = cityStatsMap.value.get(normalizeCityName(featureName));
            const total = stats?.total ?? 0;
            if (stats) {
                matchedCityKeys.value.add(normalizeCityName(featureName));
            }

            return {
                fillColor: getChoroplethColor(total, maxTotal),
                weight: 1,
                opacity: 1,
                color: '#ffffff',
                fillOpacity: total ? 0.75 : 0.2,
            };
        },
        onEachFeature: (feature, layer) => {
            const featureName = getFeatureName(feature.properties);
            const stats = cityStatsMap.value.get(normalizeCityName(featureName));
            const tooltip = stats
                ? `${featureName} - Total: ${formatNumber(stats.total)} (L: ${formatNumber(
                      stats.male
                  )}, P: ${formatNumber(stats.female)})`
                : `${featureName} - Belum ada data alumni`;

            layer.bindTooltip(tooltip, { direction: 'top', sticky: true });

            layer.on({
                mouseover: (event) => {
                    event.target.setStyle({
                        weight: 2,
                        color: '#1f2937',
                        fillOpacity: 0.9,
                    });
                },
                mouseout: (event) => {
                    geojsonLayer.value?.resetStyle(event.target);
                },
            });
        },
    }).addTo(mapInstance.value);

    if (props.fitToData && geojsonLayer.value.getBounds().isValid()) {
        mapInstance.value.fitBounds(geojsonLayer.value.getBounds(), {
            padding: [20, 20],
            maxZoom: 7,
        });
    }

    const allKeys = new Set(cityStatsMap.value.keys());
    let missing = 0;
    allKeys.forEach((key) => {
        if (!matchedCityKeys.value.has(key)) {
            missing += 1;
        }
    });
    unmatchedCitiesCount.value = missing;
};

const initMap = async () => {
    if (!mapElement.value) {
        return;
    }

    const L = await loadLeaflet();
    mapInstance.value = L.map(mapElement.value, {
        scrollWheelZoom: false,
        zoomControl: true,
    }).setView(props.initialCenter, props.initialZoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
    }).addTo(mapInstance.value);

    await renderGeojson();

    requestAnimationFrame(() => {
        mapInstance.value?.invalidateSize();
    });
};

onMounted(() => {
    initMap();
});

watch(citiesList, () => {
    renderGeojson();
});

onBeforeUnmount(() => {
    if (mapInstance.value) {
        mapInstance.value.remove();
        mapInstance.value = null;
        geojsonLayer.value = null;
    }
});
</script>
