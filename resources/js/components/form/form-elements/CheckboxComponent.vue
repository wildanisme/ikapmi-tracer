<template>
    <ComponentCard title="Checkboxes">
        <div class="flex flex-wrap items-center gap-8">
            <label
                class="flex cursor-pointer items-center text-sm font-medium text-gray-700 select-none dark:text-gray-400"
            >
                <div class="relative">
                    <input type="checkbox" class="sr-only" v-model="checkboxOne" />
                    <div
                        class="hover:border-brand-500 dark:hover:border-brand-500 mr-3 flex h-5 w-5 items-center justify-center rounded-md border-[1.25px]"
                        :class="checkboxOne ? 'border-brand-500 bg-brand-500' : 'bg-transparent border-gray-300 dark:border-gray-700'"
                    >
                        <span :class="checkboxOne ? '' : 'opacity-0'">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="white" stroke-width="1.94437" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                    </div>
                </div>
                Default
            </label>

            <label
                class="flex cursor-pointer items-center text-sm font-medium text-gray-700 select-none dark:text-gray-400"
            >
                <div class="relative">
                    <input type="checkbox" class="sr-only" v-model="checkboxTwo" />
                    <div
                        class="hover:border-brand-500 dark:hover:border-brand-500 mr-3 flex h-5 w-5 items-center justify-center rounded-md border-[1.25px]"
                        :class="checkboxTwo ? 'border-brand-500 bg-brand-500' : 'bg-transparent border-gray-300 dark:border-gray-700'"
                    >
                        <span :class="checkboxTwo ? '' : 'opacity-0'">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="white" stroke-width="1.94437" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                    </div>
                </div>
                Checked
            </label>

            <label
                class="flex cursor-pointer items-center text-sm font-medium text-gray-300 select-none dark:text-gray-700"
            >
                <div class="relative">
                    <input type="checkbox" class="sr-only" v-model="checkboxThree" disabled />
                    <div
                        class="mr-3 flex h-5 w-5 items-center justify-center rounded-md border-[1.25px]"
                        :class="checkboxThree ? 'bg-transparent border-gray-200 dark:border-gray-800' : 'border-brand-500 bg-brand-500'"
                    >
                        <span :class="checkboxThree ? '' : 'opacity-0'">
                            <svg class="stroke-gray-200 dark:stroke-gray-800" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                    </div>
                </div>
                Disabled
            </label>
        </div>
    </ComponentCard>
</template>

<script setup>
import { ref } from 'vue';
import ComponentCard from '../../common/ComponentCard.vue';

const checkboxOne = ref(false);
const checkboxTwo = ref(true);
const checkboxThree = ref(true);
</script>
