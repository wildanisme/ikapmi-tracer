<template>
    <Head title="Badges" />
    <PageBreadcrumb pageTitle="Badges" />

    <div class="space-y-5 sm:space-y-6">
        <ComponentCard title="With Light Background">
            <div class="flex flex-wrap gap-4 sm:items-center sm:justify-center">
                <Badge v-for="color in colors" :key="`light-${color}`" :color="color">
                    {{ color }}
                </Badge>
            </div>
        </ComponentCard>

        <ComponentCard title="With Solid Background">
            <div class="flex flex-wrap gap-4 sm:items-center sm:justify-center">
                <Badge
                    v-for="color in colors"
                    :key="`solid-${color}`"
                    :color="color"
                    variant="solid"
                >
                    {{ color }}
                </Badge>
            </div>
        </ComponentCard>

        <ComponentCard title="Light Background with Left Icon">
            <div class="flex flex-wrap gap-4 sm:items-center sm:justify-center">
                <Badge
                    v-for="color in colors"
                    :key="`light-left-${color}`"
                    :color="color"
                    :start-icon="plusIcon"
                >
                    {{ color }}
                </Badge>
            </div>
        </ComponentCard>

        <ComponentCard title="Solid Background with Left Icon">
            <div class="flex flex-wrap gap-4 sm:items-center sm:justify-center">
                <Badge
                    v-for="color in colors"
                    :key="`solid-left-${color}`"
                    :color="color"
                    variant="solid"
                    :start-icon="plusIcon"
                >
                    {{ color }}
                </Badge>
            </div>
        </ComponentCard>

        <ComponentCard title="Light Background with Right Icon">
            <div class="flex flex-wrap gap-4 sm:items-center sm:justify-center">
                <Badge
                    v-for="color in colors"
                    :key="`light-right-${color}`"
                    :color="color"
                    :end-icon="plusIcon"
                >
                    {{ color }}
                </Badge>
            </div>
        </ComponentCard>

        <ComponentCard title="Solid Background with Right Icon">
            <div class="flex flex-wrap gap-4 sm:items-center sm:justify-center">
                <Badge
                    v-for="color in colors"
                    :key="`solid-right-${color}`"
                    :color="color"
                    variant="solid"
                    :end-icon="plusIcon"
                >
                    {{ color }}
                </Badge>
            </div>
        </ComponentCard>
    </div>
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
import AppLayout from '../../Layouts/AppLayout.vue';
import ComponentCard from '../../components/common/ComponentCard.vue';
import PageBreadcrumb from '../../components/common/PageBreadcrumb.vue';
import Badge from '../../components/ui/Badge.vue';

defineOptions({
    layout: AppLayout,
});

const colors = ['primary', 'success', 'error', 'warning', 'info', 'light', 'dark'];

const plusIcon = `
    <svg class="fill-current" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.25012 3C5.25012 2.58579 5.58591 2.25 6.00012 2.25C6.41433 2.25 6.75012 2.58579 6.75012 3V5.25012L9.00034 5.25012C9.41455 5.25012 9.75034 5.58591 9.75034 6.00012C9.75034 6.41433 9.41455 6.75012 9.00034 6.75012H6.75012V9.00034C6.75012 9.41455 6.41433 9.75034 6.00012 9.75034C5.58591 9.75034 5.25012 9.41455 5.25012 9.00034L5.25012 6.75012H3C2.58579 6.75012 2.25 6.41433 2.25 6.00012C2.25 5.58591 2.58579 5.25012 3 5.25012H5.25012V3Z"
            fill=""
        />
    </svg>
`;
</script>
