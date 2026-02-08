import { onBeforeUnmount, onMounted } from 'vue';

export const useClickOutside = (targetRef, handler) => {
    if (typeof window === 'undefined') {
        return;
    }

    const listener = (event) => {
        const target = targetRef?.value;
        if (!target || target.contains(event.target)) {
            return;
        }
        handler(event);
    };

    onMounted(() => {
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
    });

    onBeforeUnmount(() => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
    });
};
