<template>
    <Head title="Avatars" />
    <PageBreadcrumb pageTitle="Avatars" />

    <div class="space-y-5 sm:space-y-6">
        <ComponentCard title="Default Avatar">
            <div class="flex flex-col items-center justify-center gap-5 sm:flex-row">
                <Avatar v-for="size in sizes" :key="`default-${size}`" :src="avatarSrc" :size="size" />
            </div>
        </ComponentCard>

        <ComponentCard title="Avatar with online indicator">
            <div class="flex flex-col items-center justify-center gap-5 sm:flex-row">
                <Avatar
                    v-for="size in sizes"
                    :key="`online-${size}`"
                    :src="avatarSrc"
                    :size="size"
                    status="online"
                />
            </div>
        </ComponentCard>

        <ComponentCard title="Avatar with Offline indicator">
            <div class="flex flex-col items-center justify-center gap-5 sm:flex-row">
                <Avatar
                    v-for="size in sizes"
                    :key="`offline-${size}`"
                    :src="avatarSrc"
                    :size="size"
                    status="offline"
                />
            </div>
        </ComponentCard>

        <ComponentCard title="Avatar with busy indicator">
            <div class="flex flex-col items-center justify-center gap-5 sm:flex-row">
                <Avatar
                    v-for="size in sizes"
                    :key="`busy-${size}`"
                    :src="avatarSrc"
                    :size="size"
                    status="busy"
                />
            </div>
        </ComponentCard>
    </div>
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
import AppLayout from '../../Layouts/AppLayout.vue';
import ComponentCard from '../../components/common/ComponentCard.vue';
import PageBreadcrumb from '../../components/common/PageBreadcrumb.vue';
import Avatar from '../../components/ui/Avatar.vue';

defineOptions({
    layout: AppLayout,
});

const avatarSrc = '/images/user/user-01.jpg';
const sizes = ['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'];
</script>
