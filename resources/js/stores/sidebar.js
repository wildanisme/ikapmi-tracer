import { reactive } from 'vue';

const state = reactive({
    isExpanded: true,
    isMobileOpen: false,
    isHovered: false,
});

let resizeHandler = null;

const syncWithViewport = () => {
    if (typeof window === 'undefined') {
        return;
    }

    if (window.innerWidth < 1280) {
        state.isMobileOpen = false;
        state.isExpanded = false;
    } else {
        state.isMobileOpen = false;
        state.isExpanded = true;
    }
};

const initSidebar = () => {
    if (typeof window === 'undefined') {
        return () => {};
    }

    syncWithViewport();
    resizeHandler = () => syncWithViewport();
    window.addEventListener('resize', resizeHandler);

    return () => {
        if (resizeHandler) {
            window.removeEventListener('resize', resizeHandler);
            resizeHandler = null;
        }
    };
};

const toggleExpanded = () => {
    state.isExpanded = !state.isExpanded;
    state.isMobileOpen = false;
};

const toggleMobileOpen = () => {
    state.isMobileOpen = !state.isMobileOpen;
};

const setMobileOpen = (value) => {
    state.isMobileOpen = value;
};

const setHovered = (value) => {
    if (typeof window === 'undefined') {
        state.isHovered = false;
        return;
    }

    if (window.innerWidth >= 1280 && !state.isExpanded) {
        state.isHovered = value;
    } else {
        state.isHovered = false;
    }
};

export const useSidebarStore = () => ({
    state,
    initSidebar,
    toggleExpanded,
    toggleMobileOpen,
    setMobileOpen,
    setHovered,
});
