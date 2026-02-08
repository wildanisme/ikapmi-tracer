<template>
    <Head title="User Profile" />
    <PageBreadcrumb pageTitle="User Profile" />
    <div
        class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6"
    >
        <h3 class="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
            Profile
        </h3>
        <ProfileCard />
        <PersonalInfoCard />
        <AddressCard />
    </div>
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
import AppLayout from '../../Layouts/AppLayout.vue';
import PageBreadcrumb from '../../components/common/PageBreadcrumb.vue';
import AddressCard from '../../components/profile/AddressCard.vue';
import PersonalInfoCard from '../../components/profile/PersonalInfoCard.vue';
import ProfileCard from '../../components/profile/ProfileCard.vue';

defineOptions({
    layout: AppLayout,
});
</script>
