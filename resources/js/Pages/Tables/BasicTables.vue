<template>
    <Head title="Basic Tables" />
    <PageBreadcrumb pageTitle="From Elements" />
    <div class="space-y-6">
        <ComponentCard title="Basic Table 1">
            <BasicTablesOne />
        </ComponentCard>
        <ComponentCard title="Basic Table 2">
            <BasicTablesTwo />
        </ComponentCard>
        <ComponentCard title="Basic Table 3">
            <BasicTablesThree />
        </ComponentCard>
        <ComponentCard title="Basic Table 4">
            <BasicTablesFour />
        </ComponentCard>
        <ComponentCard title="Basic Table 5">
            <BasicTablesFive />
        </ComponentCard>
    </div>
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
import AppLayout from '../../Layouts/AppLayout.vue';
import ComponentCard from '../../components/common/ComponentCard.vue';
import PageBreadcrumb from '../../components/common/PageBreadcrumb.vue';
import BasicTablesFive from '../../components/tables/basic-tables/BasicTablesFive.vue';
import BasicTablesFour from '../../components/tables/basic-tables/BasicTablesFour.vue';
import BasicTablesOne from '../../components/tables/basic-tables/BasicTablesOne.vue';
import BasicTablesThree from '../../components/tables/basic-tables/BasicTablesThree.vue';
import BasicTablesTwo from '../../components/tables/basic-tables/BasicTablesTwo.vue';

defineOptions({
    layout: AppLayout,
});
</script>
