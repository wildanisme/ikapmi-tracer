<template>
    <Head title="Images" />
    <PageBreadcrumb pageTitle="Images" />

    <div class="space-y-5 sm:space-y-6">
        <ComponentCard title="Responsive Image">
            <div class="relative">
                <div id="pane" class="overflow-hidden">
                    <img
                        src="/images/grid-image/image-01.png"
                        alt="Cover"
                        class="w-full border border-gray-200 rounded-xl dark:border-gray-800"
                    />
                </div>
                <div id="ghostpane" class="absolute top-0 left-0 duration-300 ease-in-out"></div>
            </div>
        </ComponentCard>

        <ComponentCard title="Image in 2 Grid">
            <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                    <img
                        src="/images/grid-image/image-02.png"
                        alt="grid"
                        class="w-full border border-gray-200 rounded-xl dark:border-gray-800"
                    />
                </div>

                <div>
                    <img
                        src="/images/grid-image/image-03.png"
                        alt="grid"
                        class="w-full border border-gray-200 rounded-xl dark:border-gray-800"
                    />
                </div>
            </div>
        </ComponentCard>

        <ComponentCard title="Image in 3 Grid">
            <div class="grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div v-for="image in images" :key="image.src">
                    <img
                        :src="image.src"
                        :alt="image.alt"
                        class="w-full border border-gray-200 rounded-xl dark:border-gray-800"
                    />
                </div>
            </div>
        </ComponentCard>
    </div>
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
import AppLayout from '../../Layouts/AppLayout.vue';
import ComponentCard from '../../components/common/ComponentCard.vue';
import PageBreadcrumb from '../../components/common/PageBreadcrumb.vue';

defineOptions({
    layout: AppLayout,
});

const images = [
    {
        src: '/images/grid-image/image-04.png',
        alt: 'Grid image 1',
    },
    {
        src: '/images/grid-image/image-05.png',
        alt: 'Grid image 2',
    },
    {
        src: '/images/grid-image/image-06.png',
        alt: 'Grid image 3',
    },
];
</script>
