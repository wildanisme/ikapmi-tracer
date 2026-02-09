import './bootstrap';
import { createApp, h, nextTick } from 'vue';
import { createInertiaApp, router } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import ApexCharts from 'apexcharts';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Calendar } from '@fullcalendar/core';
import { initPageScripts } from './page-init';

window.ApexCharts = ApexCharts;
window.flatpickr = flatpickr;
window.FullCalendar = Calendar;

const titleSuffix = 'IKAPMI Centre';

const runPageScripts = () => {
    initPageScripts();
};

createInertiaApp({
    title: (title) => (title ? `${title} | ${titleSuffix}` : titleSuffix),
    resolve: (name) =>
        resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        const vueApp = createApp({ render: () => h(App, props) });
        vueApp.use(plugin);
        vueApp.mount(el);
        nextTick(() => {
            runPageScripts();
        });
    },
});

if (typeof window !== 'undefined') {
    router.on('finish', () => {
        nextTick(() => {
            runPageScripts();
        });
    });
}
