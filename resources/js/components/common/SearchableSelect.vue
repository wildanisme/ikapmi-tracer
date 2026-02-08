<template>
    <Listbox v-model="selectedValue" :disabled="disabled" v-slot="{ open }">
        <div ref="reference" class="relative" data-searchable-select>
            <span v-if="trackOpen(open)" class="hidden"></span>
            <ListboxButton
                class="flex h-[42px] w-full items-center justify-between rounded-lg border border-gray-300 bg-transparent px-3 text-sm shadow-theme-xs focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500/10 dark:border-gray-700 dark:bg-gray-900 dark:focus:border-blue-800"
                :class="[
                    disabled ? 'cursor-not-allowed opacity-50' : '',
                    selectedLabel ? 'text-gray-800 dark:text-white/90' : 'text-gray-500 dark:text-gray-400',
                ]"
            >
                <span class="truncate">
                    {{ selectedLabel || placeholder }}
                </span>
                <svg class="ml-2 text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M5.5 7.5L10 12L14.5 7.5"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </ListboxButton>
        </div>
        <Teleport to="body">
            <Transition
                leave-active-class="transition ease-in duration-100"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
                <ListboxOptions
                    v-show="open"
                    ref="floating"
                    class="z-[70] max-h-72 overflow-auto rounded-lg border border-gray-200 bg-white p-1 text-sm shadow-theme-lg dark:border-gray-800 dark:bg-gray-900"
                    :style="floatingStyles"
                    data-searchable-select
                >
                    <div class="sticky top-0 bg-white p-2 dark:bg-gray-900">
                        <input
                            ref="searchInput"
                            v-model="query"
                            type="text"
                            placeholder="Cari..."
                            class="h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500/10 dark:border-gray-700 dark:text-white/90 dark:placeholder:text-white/30"
                            @keydown.stop
                        />
                    </div>
                    <div
                        v-if="filteredOptions.length === 0"
                        class="px-3 py-2 text-gray-500 dark:text-gray-400"
                    >
                        Tidak ada data.
                    </div>
                    <ListboxOption
                        v-for="option in filteredOptions"
                        :key="option.value"
                        :value="option.value"
                        as="template"
                        v-slot="{ active, selected }"
                    >
                        <li
                            class="cursor-pointer rounded-md px-3 py-2"
                            :class="[
                                active ? 'bg-blue-50 text-blue-700 dark:bg-white/[0.06]' : 'text-gray-700 dark:text-gray-300',
                                selected ? 'font-semibold' : 'font-normal',
                            ]"
                        >
                            {{ option.label }}
                        </li>
                    </ListboxOption>
                </ListboxOptions>
            </Transition>
        </Teleport>
    </Listbox>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue';
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue';
import { autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';

const props = defineProps({
    modelValue: {
        type: [String, Number, null],
        default: '',
    },
    options: {
        type: Array,
        default: () => [],
    },
    placeholder: {
        type: String,
        default: 'Pilih',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['update:modelValue']);

const query = ref('');
const reference = ref(null);
const floating = ref(null);
const searchInput = ref(null);
const floatingStyles = ref({ position: 'absolute', top: '0px', left: '0px', width: '0px' });
const isOpen = ref(false);
let cleanup = null;

const normalizedOptions = computed(() =>
    props.options.map((option) => {
        if (typeof option === 'object') {
            return {
                label: option.label ?? String(option.value ?? ''),
                value: option.value ?? option.label ?? '',
            };
        }
        return { label: String(option), value: option };
    })
);

const selectedValue = computed({
    get: () => props.modelValue,
    set: (value) => {
        emit('update:modelValue', value ?? '');
        query.value = '';
    },
});

const selectedLabel = computed(() => {
    const match = normalizedOptions.value.find((option) => option.value === props.modelValue);
    return match?.label ?? '';
});

const filteredOptions = computed(() => {
    if (!query.value) {
        return normalizedOptions.value;
    }
    const search = query.value.toLowerCase();
    return normalizedOptions.value.filter((option) => option.label.toLowerCase().includes(search));
});

const getFloatingEl = () => {
    const el = floating.value?.$el ?? floating.value;
    if (!el || typeof el.getBoundingClientRect !== 'function') {
        return null;
    }
    return el;
};

const updatePosition = async () => {
    const floatingEl = getFloatingEl();
    if (!reference.value || !floatingEl) {
        return;
    }
    const { x, y } = await computePosition(reference.value, floatingEl, {
        placement: 'bottom-start',
        middleware: [offset(8), flip(), shift({ padding: 8 })],
    });

    floatingStyles.value = {
        position: 'absolute',
        top: `${y}px`,
        left: `${x}px`,
        width: `${reference.value.offsetWidth}px`,
    };
};

const trackOpen = (open) => {
    if (isOpen.value !== open) {
        isOpen.value = open;
    }
    return true;
};

watch(isOpen, async (open) => {
    if (open) {
        await nextTick();
        await updatePosition();
        searchInput.value?.focus();
        const floatingEl = getFloatingEl();
        if (reference.value && floatingEl) {
            cleanup = autoUpdate(reference.value, floatingEl, updatePosition);
        }
    } else if (cleanup) {
        cleanup();
        cleanup = null;
    }
});

watch(
    () => props.modelValue,
    () => {
        query.value = '';
    },
    { immediate: true }
);

watch(
    () => props.options,
    () => {
        query.value = '';
    },
    { deep: true }
);

onBeforeUnmount(() => {
    if (cleanup) {
        cleanup();
        cleanup = null;
    }
});
</script>
