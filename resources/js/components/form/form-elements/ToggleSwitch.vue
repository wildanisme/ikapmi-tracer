<template>
    <ComponentCard title="Toggle switch input">
        <div class="mb-6 flex flex-wrap items-center gap-6 sm:gap-8">
            <label class="flex cursor-pointer items-center gap-3 text-sm font-medium text-gray-700 select-none dark:text-gray-400">
                <div class="relative">
                    <input type="checkbox" class="sr-only" v-model="toggleOne" />
                    <div
                        class="block h-6 w-11 rounded-full"
                        :class="toggleOne ? 'bg-brand-500 dark:bg-brand-500' : 'bg-gray-200 dark:bg-white/10'"
                    ></div>
                    <div
                        class="shadow-theme-sm absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white duration-300 ease-linear"
                        :class="toggleOne ? 'translate-x-full' : 'translate-x-0'"
                    ></div>
                </div>
                Default
            </label>

            <label class="flex cursor-pointer items-center gap-3 text-sm font-medium text-gray-700 select-none dark:text-gray-400">
                <div class="relative">
                    <input type="checkbox" class="sr-only" v-model="toggleTwo" />
                    <div
                        class="block h-6 w-11 rounded-full"
                        :class="toggleTwo ? 'bg-brand-500 dark:bg-brand-500' : 'bg-gray-200 dark:bg-white/10'"
                    ></div>
                    <div
                        class="shadow-theme-sm absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white duration-300 ease-linear"
                        :class="toggleTwo ? 'translate-x-full' : 'translate-x-0'"
                    ></div>
                </div>
                Checked
            </label>

            <label class="flex cursor-pointer items-center gap-3 text-sm font-medium text-gray-400 select-none">
                <div class="relative">
                    <input type="checkbox" class="sr-only" v-model="toggleThree" disabled />
                    <div
                        class="block h-6 w-11 rounded-full"
                        :class="toggleThree ? 'bg-brand-500 dark:bg-brand-500' : 'bg-gray-100 dark:bg-gray-800'"
                    ></div>
                    <div
                        class="shadow-theme-sm absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-gray-50 duration-300 ease-linear"
                        :class="toggleThree ? 'translate-x-full' : 'translate-x-0'"
                    ></div>
                </div>
                Disabled
            </label>
        </div>

        <div class="flex flex-wrap items-center gap-6 sm:gap-8">
            <label class="flex cursor-pointer items-center gap-3 text-sm font-medium text-gray-700 select-none dark:text-gray-400">
                <div class="relative">
                    <input type="checkbox" class="sr-only" v-model="toggleFour" />
                    <div
                        class="block h-6 w-11 rounded-full"
                        :class="toggleFour ? 'bg-gray-700 dark:bg-white/10' : 'bg-gray-200 dark:bg-gray-800'"
                    ></div>
                    <div
                        class="shadow-theme-sm absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white duration-300 ease-linear"
                        :class="toggleFour ? 'translate-x-full' : 'translate-x-0'"
                    ></div>
                </div>
                Default
            </label>

            <label class="flex cursor-pointer items-center gap-3 text-sm font-medium text-gray-700 select-none dark:text-gray-400">
                <div class="relative">
                    <input type="checkbox" class="sr-only" v-model="toggleFive" />
                    <div
                        class="block h-6 w-11 rounded-full"
                        :class="toggleFive ? 'bg-gray-700 dark:bg-white/10' : 'bg-gray-200 dark:bg-gray-800'"
                    ></div>
                    <div
                        class="shadow-theme-sm absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white duration-300 ease-linear"
                        :class="toggleFive ? 'translate-x-full' : 'translate-x-0'"
                    ></div>
                </div>
                Checked
            </label>

            <label class="flex cursor-pointer items-center gap-3 text-sm font-medium text-gray-400 select-none">
                <div class="relative">
                    <input type="checkbox" class="sr-only" v-model="toggleSix" disabled />
                    <div
                        class="block h-6 w-11 rounded-full"
                        :class="toggleSix ? 'bg-gray-700 dark:bg-white/10' : 'bg-gray-100 dark:bg-gray-800'"
                    ></div>
                    <div
                        class="shadow-theme-sm absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-gray-50 duration-300 ease-linear"
                        :class="toggleSix ? 'translate-x-full' : 'translate-x-0'"
                    ></div>
                </div>
                Disabled
            </label>
        </div>
    </ComponentCard>
</template>

<script setup>
import { ref } from 'vue';
import ComponentCard from '../../common/ComponentCard.vue';

const toggleOne = ref(false);
const toggleTwo = ref(true);
const toggleThree = ref(false);
const toggleFour = ref(false);
const toggleFive = ref(true);
const toggleSix = ref(false);
</script>
