<template>
    <div class="rounded-2xl border border-gray-200 bg-white pt-4 dark:border-gray-800 dark:bg-white/[0.03]">
        <div class="flex flex-col gap-3 px-5 mb-4 sm:px-6">
            <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h3 class="text-lg font-semibold text-gray-800 dark:text-white/90">Talent Market</h3>
                    <p class="text-theme-xs text-gray-500 dark:text-gray-400">Daftar alumni berdasarkan pekerjaan</p>
                </div>
            </div>
            <div class="flex flex-col gap-3 sm:flex-row sm:flex-nowrap sm:items-center sm:overflow-x-auto sm:overflow-y-visible sm:pb-1">
                <div class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 shrink-0">
                    <span>Show</span>
                    <select
                        v-model="filters.per_page"
                        class="h-[42px] rounded-lg border border-gray-300 bg-transparent px-3 text-sm text-gray-800 shadow-theme-xs focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-blue-800 shrink-0"
                        @change="applyFilters({ page: 1 })"
                    >
                        <option v-for="size in perPageOptions" :key="size" :value="size">
                            {{ size }}
                        </option>
                    </select>
                    <span>entries</span>
                </div>

                <div class="relative shrink-0">
                    <button type="button" class="absolute -translate-y-1/2 left-4 top-1/2">
                        <svg class="fill-gray-500 dark:fill-gray-400" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.04199 9.37381C3.04199 5.87712 5.87735 3.04218 9.37533 3.04218C12.8733 3.04218 15.7087 5.87712 15.7087 9.37381C15.7087 12.8705 12.8733 15.7055 9.37533 15.7055C5.87735 15.7055 3.04199 12.8705 3.04199 9.37381ZM9.37533 1.54218C5.04926 1.54218 1.54199 5.04835 1.54199 9.37381C1.54199 13.6993 5.04926 17.2055 9.37533 17.2055C11.2676 17.2055 13.0032 16.5346 14.3572 15.4178L17.1773 18.2381C17.4702 18.531 17.945 18.5311 18.2379 18.2382C18.5308 17.9453 18.5309 17.4704 18.238 17.1775L15.4182 14.3575C16.5367 13.0035 17.2087 11.2671 17.2087 9.37381C17.2087 5.04835 13.7014 1.54218 9.37533 1.54218Z" fill=""/>
                        </svg>
                    </button>
                    <input
                        v-model="filters.search"
                        type="text"
                        placeholder="Cari nama / pekerjaan / perusahaan"
                        class="h-[42px] w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pl-[42px] pr-4 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-blue-800 sm:w-[260px] shrink-0"
                        @input="onSearchInput"
                    />
                </div>

                <div class="w-[220px] shrink-0">
                    <SearchableSelect
                        v-model="filters.job"
                        :options="filterOptions.jobs"
                        placeholder="Pilih Pekerjaan"
                        @update:modelValue="applyFilters({ page: 1 })"
                    />
                </div>

                <div class="w-[200px] shrink-0">
                    <SearchableSelect
                        v-model="filters.graduation_year"
                        :options="filterOptions.years"
                        placeholder="Tahun Lulus"
                        @update:modelValue="applyFilters({ page: 1 })"
                    />
                </div>

                <div class="w-[220px] shrink-0">
                    <SearchableSelect
                        v-model="filters.province"
                        :options="filterOptions.provinces"
                        placeholder="Provinsi"
                        @update:modelValue="onProvinceChange"
                    />
                </div>

                <div class="w-[220px] shrink-0">
                    <SearchableSelect
                        v-model="filters.city"
                        :options="cityOptions"
                        placeholder="Kota/Kab"
                        :disabled="isCityDisabled"
                        @update:modelValue="applyFilters({ page: 1 })"
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

            <div v-if="activeFilters.length" class="flex flex-wrap items-center gap-2 text-sm">
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

        <div class="overflow-hidden">
            <div class="max-w-full px-5 overflow-x-auto">
                <table class="min-w-full">
                    <thead>
                        <tr class="border-gray-200 border-y dark:border-gray-700">
                            <th class="px-4 py-3 font-normal text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                <button class="inline-flex items-center gap-1" @click="toggleSort('name')">
                                    Nama
                                    <span class="text-xs">{{ sortIndicator('name') }}</span>
                                </button>
                            </th>
                            <th class="px-4 py-3 font-normal text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                <button class="inline-flex items-center gap-1" @click="toggleSort('job')">
                                    Pekerjaan
                                    <span class="text-xs">{{ sortIndicator('job') }}</span>
                                </button>
                            </th>
                            <th class="px-4 py-3 font-normal text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                <button class="inline-flex items-center gap-1" @click="toggleSort('company')">
                                    Perusahaan
                                    <span class="text-xs">{{ sortIndicator('company') }}</span>
                                </button>
                            </th>
                            <th class="px-4 py-3 font-normal text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                <button class="inline-flex items-center gap-1" @click="toggleSort('graduation_year')">
                                    Tahun Lulus
                                    <span class="text-xs">{{ sortIndicator('graduation_year') }}</span>
                                </button>
                            </th>
                            <th class="px-4 py-3 font-normal text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                Kota/Kab
                            </th>
                            <th class="px-4 py-3 font-normal text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                Pendidikan
                            </th>
                            <th class="px-4 py-3 font-normal text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                Universitas
                            </th>
                            <th class="px-4 py-3 font-normal text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                        <tr v-for="talent in talents.data" :key="talent.id">
                            <td class="px-4 py-3 whitespace-nowrap">
                                <p class="text-sm font-medium text-gray-900 dark:text-white/90">{{ talent.name }}</p>
                            </td>
                            <td class="px-4 py-3 whitespace-nowrap">
                                <p class="text-sm text-gray-500 dark:text-gray-400">{{ talent.job || '-' }}</p>
                            </td>
                            <td class="px-4 py-3 whitespace-nowrap">
                                <p class="text-sm text-gray-500 dark:text-gray-400">{{ talent.company || '-' }}</p>
                            </td>
                            <td class="px-4 py-3 whitespace-nowrap">
                                <p class="text-sm text-gray-500 dark:text-gray-400">{{ talent.graduation_year || '-' }}</p>
                            </td>
                            <td class="px-4 py-3 whitespace-nowrap">
                                <p class="text-sm text-gray-500 dark:text-gray-400">{{ talent.city || '-' }}</p>
                            </td>
                            <td class="px-4 py-3 whitespace-nowrap">
                                <p class="text-sm text-gray-500 dark:text-gray-400">{{ talent.education_last || '-' }}</p>
                            </td>
                            <td class="px-4 py-3 whitespace-nowrap">
                                <p class="text-sm text-gray-500 dark:text-gray-400">{{ talent.university || '-' }}</p>
                            </td>
                            <td class="px-4 py-3 whitespace-nowrap">
                                <a
                                    v-if="whatsappLink(talent.phone_number)"
                                    :href="whatsappLink(talent.phone_number)"
                                    target="_blank"
                                    rel="noopener"
                                    class="inline-flex items-center gap-2 rounded-lg border border-green-600/20 bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700 hover:bg-green-100 dark:border-green-500/20 dark:bg-green-500/10 dark:text-green-300"
                                >
                                    Hubungi
                                </a>
                                <span v-else class="text-sm text-gray-400">-</span>
                            </td>
                        </tr>
                        <tr v-if="!talents.data.length">
                            <td class="px-4 py-6 text-center text-sm text-gray-500 dark:text-gray-400" colspan="8">
                                Data talent tidak ditemukan.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="px-6 py-4 border-t border-gray-200 dark:border-white/[0.05]">
            <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <span class="hidden text-sm text-gray-600 dark:text-gray-300 sm:block">
                    Showing {{ metaSource.from ?? 0 }} to {{ metaSource.to ?? 0 }} of {{ metaSource.total ?? 0 }} entries
                </span>

                <div class="flex items-center justify-between gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-theme-xs dark:border-gray-800 dark:bg-white/[0.03] sm:min-w-[320px]">
                    <button
                        class="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-theme-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03]"
                        :disabled="currentPage <= 1"
                        :class="currentPage <= 1 ? 'opacity-50 cursor-not-allowed' : ''"
                        @click="goToPage(currentPage - 1)"
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.58301 9.99868C2.58272 10.1909 2.65588 10.3833 2.80249 10.53L7.79915 15.5301C8.09194 15.8231 8.56682 15.8233 8.85981 15.5305C9.15281 15.2377 9.15297 14.7629 8.86018 14.4699L5.14009 10.7472L16.6675 10.7472C17.0817 10.7472 17.4175 10.4114 17.4175 9.99715C17.4175 9.58294 17.0817 9.24715 16.6675 9.24715L5.14554 9.24715L8.86017 5.53016C9.15297 5.23717 9.15282 4.7623 8.85983 4.4695C8.56684 4.1767 8.09197 4.17685 7.79917 4.46984L2.84167 9.43049C2.68321 9.568 2.58301 9.77087 2.58301 9.99715C2.58301 9.99766 2.58301 9.99817 2.58301 9.99868Z" fill="currentColor"/>
                        </svg>
                        <span class="hidden sm:inline">Previous</span>
                    </button>

                    <span class="block text-sm font-medium text-gray-700 dark:text-gray-400 sm:hidden">
                        Page {{ currentPage }} of {{ totalPages }}
                    </span>

                    <ul class="hidden items-center gap-1 sm:flex">
                        <li v-for="page in displayedPages" :key="page">
                            <button
                                v-if="page !== '...'"
                                class="flex h-9 w-9 items-center justify-center rounded-lg text-theme-sm font-medium"
                                :class="currentPage === page ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-blue-500/[0.08] hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-500'"
                                @click="goToPage(page)"
                            >
                                {{ page }}
                            </button>
                            <span v-else class="flex h-9 w-9 items-center justify-center text-gray-500">...</span>
                        </li>
                    </ul>

                    <button
                        class="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-theme-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03]"
                        :disabled="currentPage >= totalPages"
                        :class="currentPage >= totalPages ? 'opacity-50 cursor-not-allowed' : ''"
                        @click="goToPage(currentPage + 1)"
                    >
                        <span class="hidden sm:inline">Next</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.4175 9.9986C17.4178 10.1909 17.3446 10.3832 17.198 10.53L12.2013 15.5301C11.9085 15.8231 11.4337 15.8233 11.1407 15.5305C10.8477 15.2377 10.8475 14.7629 11.1403 14.4699L14.8604 10.7472L3.33301 10.7472C2.91879 10.7472 2.58301 10.4114 2.58301 9.99715C2.58301 9.58294 2.91879 9.24715 3.33301 9.24715L14.8549 9.24715L11.1403 5.53016C10.8475 5.23717 10.8477 4.7623 11.1407 4.4695C11.4336 4.1767 11.9085 4.17685 12.2013 4.46984L17.1588 9.43049C17.3173 9.568 17.4175 9.77087 17.4175 9.99715C17.4175 9.99763 17.4175 9.99812 17.4175 9.9986Z" fill="currentColor"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, reactive } from 'vue';
import { router } from '@inertiajs/vue3';
import SearchableSelect from '../common/SearchableSelect.vue';

const props = defineProps({
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

const filters = reactive({
    search: props.filters.search ?? '',
    job: props.filters.job ?? '',
    graduation_year: props.filters.graduation_year ?? '',
    province: props.filters.province ?? '',
    city: props.filters.city ?? '',
    per_page: props.filters.per_page ?? 10,
    sort: props.filters.sort ?? '',
    direction: props.filters.direction ?? '',
});

let searchTimer = null;

const metaSource = computed(() => props.talents.meta ?? props.talents);
const currentPage = computed(() => metaSource.value?.current_page ?? 1);
const totalPages = computed(() => metaSource.value?.last_page ?? 1);
const perPageOptions = [10, 25, 50, 100];

const displayedPages = computed(() => {
    const range = [];
    for (let i = 1; i <= totalPages.value; i += 1) {
        if (i === 1 || i === totalPages.value || (i >= currentPage.value - 1 && i <= currentPage.value + 1)) {
            range.push(i);
        } else if (range[range.length - 1] !== '...') {
            range.push('...');
        }
    }
    return range;
});

const activeFilters = computed(() => {
    const items = [];
    if (filters.search) {
        items.push({ key: 'search', label: 'Pencarian', value: filters.search });
    }
    if (filters.job) {
        items.push({ key: 'job', label: 'Pekerjaan', value: filters.job });
    }
    if (filters.graduation_year) {
        items.push({ key: 'graduation_year', label: 'Tahun', value: filters.graduation_year });
    }
    if (filters.province) {
        items.push({ key: 'province', label: 'Provinsi', value: filters.province });
    }
    if (filters.city) {
        items.push({ key: 'city', label: 'Kota/Kab', value: filters.city });
    }
    return items;
});

const cityOptions = computed(() => {
    if (!filters.province) {
        return [];
    }
    return props.filterOptions.citiesByProvince?.[filters.province] ?? [];
});

const isCityDisabled = computed(() => !filters.province || !cityOptions.value.length);

const applyFilters = (extra = {}) => {
    router.get('/talent', { ...filters, ...extra }, {
        preserveState: true,
        preserveScroll: true,
        replace: true,
    });
};

const onSearchInput = () => {
    if (searchTimer) {
        clearTimeout(searchTimer);
    }
    searchTimer = setTimeout(() => {
        applyFilters({ page: 1 });
    }, 400);
};

const resetFilters = () => {
    filters.search = '';
    filters.job = '';
    filters.graduation_year = '';
    filters.province = '';
    filters.city = '';
    applyFilters({ page: 1 });
};

const clearFilter = (key) => {
    if (key === 'search') {
        filters.search = '';
    }
    if (key === 'job') {
        filters.job = '';
    }
    if (key === 'graduation_year') {
        filters.graduation_year = '';
    }
    if (key === 'province') {
        filters.province = '';
        filters.city = '';
    }
    if (key === 'city') {
        filters.city = '';
    }
    applyFilters({ page: 1 });
};

const onProvinceChange = () => {
    filters.city = '';
    applyFilters({ page: 1 });
};

const toggleSort = (column) => {
    if (filters.sort !== column) {
        filters.sort = column;
        filters.direction = 'asc';
    } else if (filters.direction === 'asc') {
        filters.direction = 'desc';
    } else {
        filters.sort = '';
        filters.direction = '';
    }
    applyFilters({ page: 1 });
};

const sortIndicator = (column) => {
    if (filters.sort !== column) {
        return '';
    }
    return filters.direction === 'desc' ? '▼' : '▲';
};

const goToPage = (page) => {
    if (page < 1 || page > totalPages.value) {
        return;
    }
    applyFilters({ page });
};

const normalizePhone = (phone) => {
    const digits = String(phone ?? '').replace(/\D/g, '');
    if (!digits) {
        return '';
    }
    if (digits.startsWith('0')) {
        return `62${digits.slice(1)}`;
    }
    if (digits.startsWith('62')) {
        return digits;
    }
    return digits;
};

const whatsappLink = (phone) => {
    const normalized = normalizePhone(phone);
    return normalized ? `https://wa.me/${normalized}` : '';
};
</script>
