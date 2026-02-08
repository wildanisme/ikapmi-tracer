import { ref } from 'vue';

const theme = ref('light');
let initialized = false;

const applyTheme = (nextTheme) => {
    if (typeof document === 'undefined') {
        return;
    }

    const html = document.documentElement;
    const body = document.body;

    if (nextTheme === 'dark') {
        html.classList.add('dark');
        body.classList.add('dark', 'bg-gray-900');
    } else {
        html.classList.remove('dark');
        body.classList.remove('dark', 'bg-gray-900');
    }
};

const initTheme = () => {
    if (initialized || typeof window === 'undefined') {
        return;
    }

    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    theme.value = savedTheme || systemTheme;
    applyTheme(theme.value);
    initialized = true;
};

const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    if (typeof window !== 'undefined') {
        localStorage.setItem('theme', theme.value);
    }
    applyTheme(theme.value);
};

export const useThemeStore = () => ({
    theme,
    initTheme,
    toggleTheme,
    applyTheme,
});
