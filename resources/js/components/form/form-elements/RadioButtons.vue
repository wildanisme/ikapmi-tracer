<template>
    <ComponentCard title="Radio Buttons">
        <div class="flex flex-wrap items-center gap-8">
            <label
                class="flex cursor-pointer items-center text-sm font-medium text-gray-700 select-none dark:text-gray-400"
            >
                <div class="relative">
                    <input type="checkbox" class="sr-only" v-model="radioOne" />
                    <div
                        class="hover:border-brand-500 dark:hover:border-brand-500 mr-3 flex h-5 w-5 items-center justify-center rounded-full border-[1.25px]"
                        :class="radioOne ? 'border-brand-500 bg-brand-500' : 'bg-transparent border-gray-300 dark:border-gray-700'"
                    >
                        <span class="h-2 w-2 rounded-full" :class="radioOne ? 'bg-white' : 'bg-white dark:bg-[#171f2e]'"></span>
                    </div>
                </div>
                Default
            </label>

            <label
                class="flex cursor-pointer items-center text-sm font-medium text-gray-700 select-none dark:text-gray-400"
            >
                <div class="relative">
                    <input type="checkbox" class="sr-only" v-model="radioTwo" />
                    <div
                        class="hover:border-brand-500 dark:hover:border-brand-500 mr-3 flex h-5 w-5 items-center justify-center rounded-full border-[1.25px]"
                        :class="radioTwo ? 'border-brand-500 bg-brand-500' : 'bg-transparent border-gray-300 dark:border-gray-700'"
                    >
                        <span class="h-2 w-2 rounded-full" :class="radioTwo ? 'bg-white' : 'bg-white dark:bg-[#171f2e]'"></span>
                    </div>
                </div>
                Secondary
            </label>

            <label
                class="flex cursor-pointer items-center text-sm font-medium text-gray-300 select-none dark:text-gray-700"
            >
                <div class="relative">
                    <input type="checkbox" class="peer sr-only" v-model="radioThree" disabled />
                    <div
                        class="mr-3 flex h-5 w-5 items-center justify-center rounded-full border-[1.25px]"
                        :class="radioThree ? 'bg-transparent border-gray-300 dark:border-gray-700' : 'border-brand-500 bg-brand-500'"
                    >
                        <span class="h-2 w-2 rounded-full" :class="radioThree ? 'bg-white' : 'bg-white dark:bg-[#171f2e]'"></span>
                    </div>
                </div>
                Disabled Secondary
            </label>
        </div>
    </ComponentCard>
</template>

<script setup>
import { ref } from 'vue';
import ComponentCard from '../../common/ComponentCard.vue';

const radioOne = ref(false);
const radioTwo = ref(true);
const radioThree = ref(false);
</script>
