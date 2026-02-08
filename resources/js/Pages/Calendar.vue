<template>
    <Head title="Calendar" />
    <PageBreadcrumb pageTitle="Calender" />
    <CalendarArea />
</template>

<script setup>
import { onMounted } from 'vue';
import { Head } from '@inertiajs/vue3';
import AppLayout from '../Layouts/AppLayout.vue';
import CalendarArea from '../components/CalendarArea.vue';
import PageBreadcrumb from '../components/common/PageBreadcrumb.vue';
import { calendarInit } from '../components/calendar-init';

defineOptions({
    layout: AppLayout,
});

onMounted(() => {
    calendarInit();
});
</script>
