<template>
    <div class="rounded-2xl border border-gray-200 bg-white pt-4 dark:border-gray-800 dark:bg-white/[0.03]">
        <div class="flex flex-col gap-3 px-5 mb-4 sm:px-6">
            <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h3 class="text-lg font-semibold text-gray-800 dark:text-white/90">Buku Induk Alumni</h3>
                    <p class="text-theme-xs text-gray-500 dark:text-gray-400">Menampilkan semua data alumni</p>
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
                        placeholder="Cari nama / NISN / NIPM"
                        class="h-[42px] w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pl-[42px] pr-4 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-blue-800 sm:w-[260px] shrink-0"
                        @input="onSearchInput"
                    />
                </div>

                <select
                    v-model="filters.gender"
                    class="h-[42px] w-[180px] rounded-lg border border-gray-300 bg-transparent px-3 text-sm text-gray-800 shadow-theme-xs focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-blue-800 shrink-0"
                    @change="applyFilters"
                >
                    <option value="">Semua Gender</option>
                    <option value="L">Laki-laki</option>
                    <option value="P">Perempuan</option>
                </select>

                <div class="w-[200px] shrink-0">
                    <SearchableSelect
                        v-model="filters.graduation_year"
                        :options="filterOptions.years"
                        placeholder="Semua Tahun Lulus"
                        @update:modelValue="applyFilters({ page: 1 })"
                    />
                </div>

                <div class="relative shrink-0">
                    <button
                        ref="downloadButtonRef"
                        type="button"
                        class="inline-flex h-[42px] items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-white/[0.03]"
                        @click="toggleDownloadMenu"
                    >
                        Download
                        <svg class="text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 20 20" fill="none">
                            <path
                                d="M5.5 7.5L10 12L14.5 7.5"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>
                </div>

                <div class="relative shrink-0">
                    <button
                        ref="filterButtonRef"
                        type="button"
                        class="inline-flex h-[42px] items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-white/[0.03]"
                        @click="toggleFilterPanel"
                    >
                        <svg class="text-gray-500 dark:text-gray-400" width="18" height="18" viewBox="0 0 20 20" fill="none">
                            <path d="M3.33398 4.1665H16.6673" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M6.66699 10H13.3337" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M9.16699 15.8335H10.8337" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                        Filter
                        <span v-if="activeFilterCount" class="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">
                            {{ activeFilterCount }}
                        </span>
                    </button>
                </div>
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

        <Teleport to="body">
            <Transition
                leave-active-class="transition ease-in duration-100"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
                <div
                    v-show="isFilterOpen"
                    ref="filterPanelRef"
                    class="z-50 w-[320px] rounded-xl border border-gray-200 bg-white p-4 text-sm shadow-theme-lg dark:border-gray-800 dark:bg-gray-900"
                    :style="filterPanelStyles"
                >
                    <div class="space-y-4">
                        <div>
                            <p class="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Provinsi</p>
                            <SearchableSelect
                                v-model="filters.province"
                                :options="filterOptions.provinces"
                                placeholder="Semua Provinsi"
                                @update:modelValue="onProvinceChange"
                            />
                        </div>
                        <div>
                            <p class="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Kota/Kab</p>
                            <SearchableSelect
                                v-model="filters.city"
                                :options="cityOptions"
                                placeholder="Semua Kota/Kab"
                                :disabled="isCityDisabled"
                                @update:modelValue="onCityChange"
                            />
                        </div>
                        <div>
                            <p class="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Kecamatan</p>
                            <SearchableSelect
                                v-model="filters.district"
                                :options="districtOptions"
                                placeholder="Semua Kecamatan"
                                :disabled="isDistrictDisabled"
                                @update:modelValue="applyFilters({ page: 1 })"
                            />
                        </div>
                        <div>
                            <p class="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Pekerjaan</p>
                            <SearchableSelect
                                v-model="filters.job"
                                :options="filterOptions.jobs"
                                placeholder="Semua Pekerjaan"
                                @update:modelValue="applyFilters({ page: 1 })"
                            />
                        </div>
                        <div>
                            <p class="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Perusahaan</p>
                            <SearchableSelect
                                v-model="filters.company"
                                :options="filterOptions.companies"
                                placeholder="Semua Perusahaan"
                                @update:modelValue="applyFilters({ page: 1 })"
                            />
                        </div>
                        <div>
                            <p class="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Domisili</p>
                            <SearchableSelect
                                v-model="filters.domisili"
                                :options="filterOptions.domisilis"
                                placeholder="Semua Domisili"
                                @update:modelValue="applyFilters({ page: 1 })"
                            />
                        </div>
                        <div class="flex items-center justify-end gap-2">
                            <button
                                type="button"
                                class="rounded-lg border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300"
                                @click="toggleFilterPanel"
                            >
                                Tutup
                            </button>
                            <button
                                type="button"
                                class="rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-700"
                                @click="toggleFilterPanel"
                            >
                                Terapkan
                            </button>
                        </div>
                    </div>
                </div>
            </Transition>
        </Teleport>

        <Teleport to="body">
            <Transition
                leave-active-class="transition ease-in duration-100"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
                <div
                    v-show="isDownloadOpen"
                    ref="downloadMenuRef"
                    class="z-50 w-[200px] rounded-xl border border-gray-200 bg-white p-2 text-sm shadow-theme-lg dark:border-gray-800 dark:bg-gray-900"
                    :style="downloadMenuStyles"
                >
                    <a
                        :href="downloadLink('csv')"
                        class="block rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-white/[0.05]"
                    >
                        Download CSV
                    </a>
                    <a
                        :href="downloadLink('xlsx')"
                        class="block rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-white/[0.05]"
                    >
                        Download Excel
                    </a>
                    <a
                        :href="downloadLink('pdf')"
                        class="block rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-white/[0.05]"
                    >
                        Download PDF (max 2000)
                    </a>
                </div>
            </Transition>
        </Teleport>

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
                                <button class="inline-flex items-center gap-1" @click="toggleSort('nisn')">
                                    NISN
                                    <span class="text-xs">{{ sortIndicator('nisn') }}</span>
                                </button>
                            </th>
                            <th class="px-4 py-3 font-normal text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                <button class="inline-flex items-center gap-1" @click="toggleSort('nipm')">
                                    NIPM
                                    <span class="text-xs">{{ sortIndicator('nipm') }}</span>
                                </button>
                            </th>
                            <th class="px-4 py-3 font-normal text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                <button class="inline-flex items-center gap-1" @click="toggleSort('gender')">
                                    Gender
                                    <span class="text-xs">{{ sortIndicator('gender') }}</span>
                                </button>
                            </th>
                            <th class="px-4 py-3 font-normal text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                <button class="inline-flex items-center gap-1" @click="toggleSort('graduation_year')">
                                    Tahun Lulus
                                    <span class="text-xs">{{ sortIndicator('graduation_year') }}</span>
                                </button>
                            </th>
                            <th class="px-4 py-3 font-normal text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                <button class="inline-flex items-center gap-1" @click="toggleSort('province')">
                                    Provinsi
                                    <span class="text-xs">{{ sortIndicator('province') }}</span>
                                </button>
                            </th>
                            <th class="px-4 py-3 font-normal text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                <button class="inline-flex items-center gap-1" @click="toggleSort('city')">
                                    Kota/Kab
                                    <span class="text-xs">{{ sortIndicator('city') }}</span>
                                </button>
                            </th>
                            <th class="px-4 py-3 font-normal text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                <button class="inline-flex items-center gap-1" @click="toggleSort('district')">
                                    Kecamatan
                                    <span class="text-xs">{{ sortIndicator('district') }}</span>
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
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                        <tr v-for="alumnus in alumni.data" :key="alumnus.id">
                            <td class="px-4 py-3 whitespace-nowrap">
                                <p class="text-sm font-medium text-gray-900 dark:text-white/90">{{ alumnus.name }}</p>
                            </td>
                            <td class="px-4 py-3 whitespace-nowrap">
                                <p class="text-sm text-gray-500 dark:text-gray-400">{{ alumnus.nisn || '-' }}</p>
                            </td>
                            <td class="px-4 py-3 whitespace-nowrap">
                                <p class="text-sm text-gray-500 dark:text-gray-400">{{ alumnus.nipm || '-' }}</p>
                            </td>
                            <td class="px-4 py-3 whitespace-nowrap">
                                <span class="rounded-full px-2 py-0.5 text-xs font-medium"
                                      :class="alumnus.gender === 'L'
                                        ? 'bg-blue-50 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400'
                                        : 'bg-pink-50 text-pink-600 dark:bg-pink-500/15 dark:text-pink-400'">
                                    {{ alumnus.gender === 'L' ? 'Laki-laki' : alumnus.gender === 'P' ? 'Perempuan' : '-' }}
                                </span>
                            </td>
                            <td class="px-4 py-3 whitespace-nowrap">
                                <p class="text-sm text-gray-500 dark:text-gray-400">{{ alumnus.graduation_year || '-' }}</p>
                            </td>
                            <td class="px-4 py-3 whitespace-nowrap">
                                <p class="text-sm text-gray-500 dark:text-gray-400">{{ alumnus.province || '-' }}</p>
                            </td>
                            <td class="px-4 py-3 whitespace-nowrap">
                                <p class="text-sm text-gray-500 dark:text-gray-400">{{ alumnus.city || '-' }}</p>
                            </td>
                            <td class="px-4 py-3 whitespace-nowrap">
                                <p class="text-sm text-gray-500 dark:text-gray-400">{{ alumnus.district || '-' }}</p>
                            </td>
                            <td class="px-4 py-3 whitespace-nowrap">
                                <p class="text-sm text-gray-500 dark:text-gray-400">{{ alumnus.job || '-' }}</p>
                            </td>
                            <td class="px-4 py-3 whitespace-nowrap">
                                <p class="text-sm text-gray-500 dark:text-gray-400">{{ alumnus.company || '-' }}</p>
                            </td>
                        </tr>
                        <tr v-if="!alumni.data.length">
                            <td class="px-4 py-6 text-center text-sm text-gray-500 dark:text-gray-400" colspan="10">
                                Data alumni tidak ditemukan.
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
import { computed, nextTick, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue';
import { router } from '@inertiajs/vue3';
import SearchableSelect from '../common/SearchableSelect.vue';
import { autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';

const props = defineProps({
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

const filters = reactive({
    search: props.filters.search ?? '',
    gender: props.filters.gender ?? '',
    graduation_year: props.filters.graduation_year ?? '',
    province: props.filters.province ?? '',
    city: props.filters.city ?? '',
    district: props.filters.district ?? '',
    job: props.filters.job ?? '',
    company: props.filters.company ?? '',
    domisili: props.filters.domisili ?? '',
    per_page: props.filters.per_page ?? 10,
    sort: props.filters.sort ?? '',
    direction: props.filters.direction ?? '',
});

let searchTimer = null;

const metaSource = computed(() => props.alumni.meta ?? props.alumni);
const currentPage = computed(() => metaSource.value?.current_page ?? 1);
const totalPages = computed(() => metaSource.value?.last_page ?? 1);
const perPageOptions = [10, 25, 50, 100];
const isFilterOpen = ref(false);
const filterButtonRef = ref(null);
const filterPanelRef = ref(null);
const filterPanelStyles = ref({ position: 'absolute', top: '0px', left: '0px', width: '320px' });
let filterCleanup = null;
const isDownloadOpen = ref(false);
const downloadButtonRef = ref(null);
const downloadMenuRef = ref(null);
const downloadMenuStyles = ref({ position: 'absolute', top: '0px', left: '0px', width: '200px' });
let downloadCleanup = null;

const downloadLink = (format) => {
    const params = new URLSearchParams({
        search: filters.search,
        gender: filters.gender,
        graduation_year: filters.graduation_year,
        province: filters.province,
        city: filters.city,
        district: filters.district,
        job: filters.job,
        company: filters.company,
        domisili: filters.domisili,
        per_page: String(filters.per_page),
        page: String(currentPage.value),
        sort: filters.sort,
        direction: filters.direction,
        download: '1',
        download_format: format,
    });

    return `/buku-induk?${params.toString()}`;
};

const hasFilterOptions = computed(() => {
    const provinces = props.filterOptions?.provinces?.length ?? 0;
    const jobs = props.filterOptions?.jobs?.length ?? 0;
    const companies = props.filterOptions?.companies?.length ?? 0;
    const domisilis = props.filterOptions?.domisilis?.length ?? 0;
    return provinces + jobs + companies + domisilis > 0;
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

const cityOptions = computed(() => {
    if (!filters.province) {
        return [];
    }
    return props.filterOptions.citiesByProvince?.[filters.province] ?? [];
});

const isCityDisabled = computed(() => !filters.province || !cityOptions.value.length);
const districtOptions = computed(() => {
    if (!filters.city || !filters.province) {
        return [];
    }
    const key = `${filters.province}::${filters.city}`;
    return props.filterOptions.districtsByCity?.[key] ?? [];
});
const isDistrictDisabled = computed(() => !filters.city || !districtOptions.value.length);
const activeFilters = computed(() => {
    const items = [];
    if (filters.search) {
        items.push({ key: 'search', label: 'Pencarian', value: filters.search });
    }
    if (filters.gender) {
        items.push({ key: 'gender', label: 'Gender', value: filters.gender === 'L' ? 'Laki-laki' : 'Perempuan' });
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
    if (filters.district) {
        items.push({ key: 'district', label: 'Kecamatan', value: filters.district });
    }
    if (filters.job) {
        items.push({ key: 'job', label: 'Pekerjaan', value: filters.job });
    }
    if (filters.company) {
        items.push({ key: 'company', label: 'Perusahaan', value: filters.company });
    }
    if (filters.domisili) {
        items.push({ key: 'domisili', label: 'Domisili', value: filters.domisili });
    }
    return items;
});
const activeFilterCount = computed(() => activeFilters.value.length);

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

const applyFilters = (extra = {}) => {
    router.get('/buku-induk', { ...filters, ...extra }, {
        preserveState: true,
        preserveScroll: true,
        replace: true,
        only: ['alumni', 'filters'],
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
    filters.gender = '';
    filters.graduation_year = '';
    filters.province = '';
    filters.city = '';
    filters.district = '';
    filters.job = '';
    filters.company = '';
    filters.domisili = '';
    applyFilters({ page: 1 });
};

const onProvinceChange = () => {
    filters.city = '';
    filters.district = '';
    applyFilters({ page: 1 });
};

const onCityChange = () => {
    filters.district = '';
    applyFilters({ page: 1 });
};

const clearFilter = (key) => {
    if (key in filters) {
        filters[key] = '';
        if (key === 'province') {
            filters.city = '';
            filters.district = '';
        }
        if (key === 'city') {
            filters.district = '';
        }
        applyFilters({ page: 1 });
    }
};

const toggleFilterPanel = () => {
    isDownloadOpen.value = false;
    isFilterOpen.value = !isFilterOpen.value;
    if (isFilterOpen.value) {
        loadFilterOptions();
    }
};

const toggleDownloadMenu = () => {
    isFilterOpen.value = false;
    isDownloadOpen.value = !isDownloadOpen.value;
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

const updateFilterPosition = async () => {
    if (!filterButtonRef.value || !filterPanelRef.value) {
        return;
    }
    const { x, y } = await computePosition(filterButtonRef.value, filterPanelRef.value, {
        placement: 'bottom-end',
        middleware: [offset(8), flip(), shift({ padding: 8 })],
    });

    filterPanelStyles.value = {
        position: 'absolute',
        top: `${y}px`,
        left: `${x}px`,
        width: '320px',
    };
};

const updateDownloadPosition = async () => {
    if (!downloadButtonRef.value || !downloadMenuRef.value) {
        return;
    }
    const { x, y } = await computePosition(downloadButtonRef.value, downloadMenuRef.value, {
        placement: 'bottom-end',
        middleware: [offset(8), flip(), shift({ padding: 8 })],
    });

    downloadMenuStyles.value = {
        position: 'absolute',
        top: `${y}px`,
        left: `${x}px`,
        width: '200px',
    };
};

const handleOutsideClick = (event) => {
    if (!filterPanelRef.value || !filterButtonRef.value) {
        return;
    }
    if (event.target.closest('[data-searchable-select]')) {
        return;
    }
    if (filterPanelRef.value.contains(event.target) || filterButtonRef.value.contains(event.target)) {
        return;
    }
    isFilterOpen.value = false;
};

const handleEscape = (event) => {
    if (event.key === 'Escape') {
        isFilterOpen.value = false;
    }
};

const handleDownloadOutside = (event) => {
    if (!downloadMenuRef.value || !downloadButtonRef.value) {
        return;
    }
    if (event.target.closest('[data-searchable-select]')) {
        return;
    }
    if (downloadMenuRef.value.contains(event.target) || downloadButtonRef.value.contains(event.target)) {
        return;
    }
    isDownloadOpen.value = false;
};

const handleDownloadEscape = (event) => {
    if (event.key === 'Escape') {
        isDownloadOpen.value = false;
    }
};

watch(isFilterOpen, async (open) => {
    if (open) {
        await nextTick();
        await updateFilterPosition();
        if (filterButtonRef.value && filterPanelRef.value) {
            filterCleanup = autoUpdate(filterButtonRef.value, filterPanelRef.value, updateFilterPosition);
        }
        document.addEventListener('mousedown', handleOutsideClick);
        document.addEventListener('keydown', handleEscape);
    } else {
        if (filterCleanup) {
            filterCleanup();
            filterCleanup = null;
        }
        document.removeEventListener('mousedown', handleOutsideClick);
        document.removeEventListener('keydown', handleEscape);
    }
});

watch(isDownloadOpen, async (open) => {
    if (open) {
        await nextTick();
        await updateDownloadPosition();
        if (downloadButtonRef.value && downloadMenuRef.value) {
            downloadCleanup = autoUpdate(downloadButtonRef.value, downloadMenuRef.value, updateDownloadPosition);
        }
        document.addEventListener('mousedown', handleDownloadOutside);
        document.addEventListener('keydown', handleDownloadEscape);
    } else {
        if (downloadCleanup) {
            downloadCleanup();
            downloadCleanup = null;
        }
        document.removeEventListener('mousedown', handleDownloadOutside);
        document.removeEventListener('keydown', handleDownloadEscape);
    }
});

onMounted(() => {
    loadFilterOptions();
    if (isFilterOpen.value) {
        updateFilterPosition();
    }
    if (isDownloadOpen.value) {
        updateDownloadPosition();
    }
});

onBeforeUnmount(() => {
    if (filterCleanup) {
        filterCleanup();
    }
    if (downloadCleanup) {
        downloadCleanup();
    }
    document.removeEventListener('mousedown', handleOutsideClick);
    document.removeEventListener('keydown', handleEscape);
    document.removeEventListener('mousedown', handleDownloadOutside);
    document.removeEventListener('keydown', handleDownloadEscape);
});
</script>
