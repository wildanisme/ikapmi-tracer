<template>
    <button
        :type="type"
        :class="[classes, className, $attrs.class]"
        :disabled="disabled"
        v-bind="attrs"
    >
        <span v-if="startIcon" class="flex items-center" v-html="startIcon"></span>
        <slot />
        <span v-if="endIcon" class="flex items-center" v-html="endIcon"></span>
    </button>
</template>

<script setup>
import { computed, useAttrs } from 'vue';

defineOptions({ inheritAttrs: false });

const props = defineProps({
    size: {
        type: String,
        default: 'md',
    },
    variant: {
        type: String,
        default: 'primary',
    },
    startIcon: {
        type: String,
        default: null,
    },
    endIcon: {
        type: String,
        default: null,
    },
    className: {
        type: String,
        default: '',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String,
        default: 'button',
    },
});

const attrs = useAttrs();

const classes = computed(() => {
    const base = 'inline-flex items-center justify-center font-medium gap-2 rounded-lg transition';
    const sizeMap = {
        sm: 'px-4 py-3 text-sm',
        md: 'px-5 py-3.5 text-sm',
    };
    const variantMap = {
        primary: 'bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300',
        outline:
            'bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300',
    };
    const sizeClass = sizeMap[props.size] ?? sizeMap.md;
    const variantClass = variantMap[props.variant] ?? variantMap.primary;
    const disabledClass = props.disabled ? 'cursor-not-allowed opacity-50' : '';

    return [base, sizeClass, variantClass, disabledClass].join(' ');
});
</script>
