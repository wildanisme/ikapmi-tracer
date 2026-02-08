<template>
    <div class="overflow-hidden rounded-lg" :class="[aspectRatioClass, className]">
        <iframe
            :src="`https://www.youtube.com/embed/${videoId}`"
            :title="title"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="w-full h-full"
        ></iframe>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    videoId: {
        type: String,
        default: '',
    },
    aspectRatio: {
        type: String,
        default: '16:9',
    },
    title: {
        type: String,
        default: 'YouTube video',
    },
    className: {
        type: String,
        default: '',
    },
});

const aspectRatioClasses = {
    '16:9': 'aspect-video',
    '4:3': 'aspect-4/3',
    '21:9': 'aspect-21/9',
    '1:1': 'aspect-square',
};

const aspectRatioClass = computed(
    () => aspectRatioClasses[props.aspectRatio] ?? aspectRatioClasses['16:9']
);
</script>
