<template>
    <Head title="Videos" />
    <PageBreadcrumb pageTitle="Videos" />

    <div class="grid grid-cols-1 gap-5 sm:gap-6 xl:grid-cols-2">
        <div class="space-y-5 sm:space-y-6">
            <ComponentCard title="Video Ratio 16:9">
                <YoutubeEmbed video-id="dQw4w9WgXcQ" />
            </ComponentCard>

            <ComponentCard title="Video Ratio 4:3">
                <YoutubeEmbed video-id="dQw4w9WgXcQ" aspect-ratio="4:3" />
            </ComponentCard>
        </div>

        <div class="space-y-5 sm:space-y-6">
            <ComponentCard title="Video Ratio 21:9">
                <YoutubeEmbed video-id="dQw4w9WgXcQ" aspect-ratio="21:9" />
            </ComponentCard>
            <ComponentCard title="Video Ratio 1:1">
                <YoutubeEmbed video-id="dQw4w9WgXcQ" aspect-ratio="1:1" />
            </ComponentCard>
        </div>
    </div>
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
import AppLayout from '../../Layouts/AppLayout.vue';
import ComponentCard from '../../components/common/ComponentCard.vue';
import PageBreadcrumb from '../../components/common/PageBreadcrumb.vue';
import YoutubeEmbed from '../../components/ui/YoutubeEmbed.vue';

defineOptions({
    layout: AppLayout,
});
</script>
