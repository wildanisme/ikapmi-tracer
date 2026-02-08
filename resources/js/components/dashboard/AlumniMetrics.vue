<template>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
        <div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
            <div class="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
                <svg class="fill-gray-800 dark:fill-white/90" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 3.5C9.51472 3.5 7.5 5.51472 7.5 8C7.5 10.4853 9.51472 12.5 12 12.5C14.4853 12.5 16.5 10.4853 16.5 8C16.5 5.51472 14.4853 3.5 12 3.5ZM6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8C18 11.3137 15.3137 14 12 14C8.68629 14 6 11.3137 6 8ZM4.5 19.25C4.5 17.297 5.61607 15.6525 7.27322 14.871C8.98693 14.063 10.9633 13.75 12 13.75C13.0367 13.75 15.0131 14.063 16.7268 14.871C18.3839 15.6525 19.5 17.297 19.5 19.25V20.5C19.5 20.9142 19.1642 21.25 18.75 21.25C18.3358 21.25 18 20.9142 18 20.5V19.25C18 17.8817 17.2698 16.7444 16.086 16.1853C14.6421 15.5015 12.9174 15.25 12 15.25C11.0826 15.25 9.3579 15.5015 7.91403 16.1853C6.73025 16.7444 6 17.8817 6 19.25V20.5C6 20.9142 5.66421 21.25 5.25 21.25C4.83579 21.25 4.5 20.9142 4.5 20.5V19.25Z"
                        fill=""
                    />
                </svg>
            </div>

            <div class="flex items-end justify-between mt-5">
                <div>
                    <span class="text-sm text-gray-500 dark:text-gray-400">Total Alumni</span>
                    <h4 class="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">{{ formatNumber(total) }}</h4>
                </div>
            </div>
        </div>

        <div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
            <div class="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
                <svg class="fill-gray-800 dark:fill-white/90" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 3.5C9.51472 3.5 7.5 5.51472 7.5 8C7.5 10.4853 9.51472 12.5 12 12.5C14.4853 12.5 16.5 10.4853 16.5 8C16.5 5.51472 14.4853 3.5 12 3.5ZM6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8C18 11.3137 15.3137 14 12 14C8.68629 14 6 11.3137 6 8ZM9.75 20.5V17.5H8.25V20.5C8.25 20.9142 7.91421 21.25 7.5 21.25C7.08579 21.25 6.75 20.9142 6.75 20.5V16.75C6.75 16.3358 7.08579 16 7.5 16H10.5C10.9142 16 11.25 16.3358 11.25 16.75V20.5C11.25 20.9142 10.9142 21.25 10.5 21.25C10.0858 21.25 9.75 20.9142 9.75 20.5Z"
                        fill=""
                    />
                </svg>
            </div>

            <div class="flex items-end justify-between mt-5">
                <div>
                    <span class="text-sm text-gray-500 dark:text-gray-400">Alumni Laki-laki</span>
                    <h4 class="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">{{ formatNumber(male) }}</h4>
                </div>
            </div>
        </div>

        <div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
            <div class="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
                <svg class="fill-gray-800 dark:fill-white/90" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 3.5C9.51472 3.5 7.5 5.51472 7.5 8C7.5 10.4853 9.51472 12.5 12 12.5C14.4853 12.5 16.5 10.4853 16.5 8C16.5 5.51472 14.4853 3.5 12 3.5ZM6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8C18 11.3137 15.3137 14 12 14C8.68629 14 6 11.3137 6 8ZM13.5 16C13.0858 16 12.75 16.3358 12.75 16.75V20.5C12.75 20.9142 13.0858 21.25 13.5 21.25C13.9142 21.25 14.25 20.9142 14.25 20.5V19H15.75V20.5C15.75 20.9142 16.0858 21.25 16.5 21.25C16.9142 21.25 17.25 20.9142 17.25 20.5V17.5C17.25 17.0858 16.9142 16.75 16.5 16.75H14.25V16.75C14.25 16.3358 13.9142 16 13.5 16Z"
                        fill=""
                    />
                </svg>
            </div>

            <div class="flex items-end justify-between mt-5">
                <div>
                    <span class="text-sm text-gray-500 dark:text-gray-400">Alumni Perempuan</span>
                    <h4 class="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">{{ formatNumber(female) }}</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    total: {
        type: Number,
        default: 0,
    },
    male: {
        type: Number,
        default: 0,
    },
    female: {
        type: Number,
        default: 0,
    },
});

const formatNumber = (value) => {
    return new Intl.NumberFormat('id-ID').format(value ?? 0);
};
</script>
