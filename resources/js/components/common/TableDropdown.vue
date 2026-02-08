<template>
    <div ref="root">
        <div ref="button" class="cursor-pointer" @click="toggle">
            <slot name="button" />
        </div>

        <div ref="content" class="z-50 fixed">
            <div
                v-show="isOpen"
                class="p-2 bg-white border border-gray-200 rounded-2xl shadow-lg dark:border-gray-800 dark:bg-gray-dark w-40"
            >
                <div class="space-y-1" role="menu" aria-orientation="vertical">
                    <slot name="content" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { createPopper } from '@popperjs/core';
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { useClickOutside } from '../../composables/useClickOutside';

const isOpen = ref(false);
const button = ref(null);
const content = ref(null);
const root = ref(null);
let popperInstance = null;

const toggle = () => {
    isOpen.value = !isOpen.value;
    if (popperInstance) {
        popperInstance.update();
    }
};

useClickOutside(root, () => {
    isOpen.value = false;
});

onMounted(() => {
    if (button.value && content.value) {
        popperInstance = createPopper(button.value, content.value, {
            placement: 'bottom-end',
            strategy: 'fixed',
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 4],
                    },
                },
            ],
        });
    }
});

onBeforeUnmount(() => {
    if (popperInstance) {
        popperInstance.destroy();
        popperInstance = null;
    }
});
</script>
