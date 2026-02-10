<template>
    <aside
        id="sidebar"
        class="fixed flex flex-col mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-99999 border-r border-gray-200"
        :class="{
            'w-[290px]': sidebar.state.isExpanded || sidebar.state.isMobileOpen || sidebar.state.isHovered,
            'w-[90px]': !sidebar.state.isExpanded && !sidebar.state.isHovered,
            'translate-x-0': sidebar.state.isMobileOpen,
            '-translate-x-full xl:translate-x-0': !sidebar.state.isMobileOpen,
        }"
        @mouseenter="sidebar.setHovered(true)"
        @mouseleave="sidebar.setHovered(false)"
    >
        <div
            class="pt-8 pb-7 flex"
            :class="!isExpandedOrHovered ? 'xl:justify-center' : 'justify-start'"
        >
            <Link href="/">
                <img
                    v-show="isExpandedOrHovered"
                    class="dark:hidden"
                    src="/images/logo/logo-ikapmi.png"
                    alt="Logo"
                    width="150"
                    height="40"
                />
                <img
                    v-show="isExpandedOrHovered"
                    class="hidden dark:block"
                    src="/images/logo/logo-ikapmi-dark.png"
                    alt="Logo"
                    width="150"
                    height="40"
                />
                <img
                    v-show="!isExpandedOrHovered"
                    src="/images/logo/logo-ikapmi.svg"
                    alt="Logo"
                    width="32"
                    height="32"
                />
            </Link>
        </div>

        <div class="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
            <nav class="mb-6">
                <div class="flex flex-col gap-4">
                    <div v-for="(group, groupIndex) in menuGroups" :key="group.title">
                        <h2
                            class="mb-4 text-xs uppercase flex leading-[20px] text-gray-400"
                            :class="!isExpandedOrHovered ? 'lg:justify-center' : 'justify-start'"
                        >
                            <span v-if="isExpandedOrHovered">{{ group.title }}</span>
                            <svg
                                v-else
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M5.99915 10.2451C6.96564 10.2451 7.74915 11.0286 7.74915 11.9951V12.0051C7.74915 12.9716 6.96564 13.7551 5.99915 13.7551C5.03265 13.7551 4.24915 12.9716 4.24915 12.0051V11.9951C4.24915 11.0286 5.03265 10.2451 5.99915 10.2451ZM17.9991 10.2451C18.9656 10.2451 19.7491 11.0286 19.7491 11.9951V12.0051C19.7491 12.9716 18.9656 13.7551 17.9991 13.7551C17.0326 13.7551 16.2491 12.9716 16.2491 12.0051V11.9951C16.2491 11.0286 17.0326 10.2451 17.9991 10.2451ZM13.7491 11.9951C13.7491 11.0286 12.9656 10.2451 11.9991 10.2451C11.0326 10.2451 10.2491 11.0286 10.2491 11.9951V12.0051C10.2491 12.9716 11.0326 13.7551 11.9991 13.7551C12.9656 13.7551 13.7491 12.9716 13.7491 12.0051V11.9951Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </h2>

                        <ul class="flex flex-col gap-1">
                            <li v-for="(item, itemIndex) in group.items" :key="item.name">
                                <template v-if="item.subItems">
                                    <button
                                        class="menu-item group w-full"
                                        :class="[
                                            isSubmenuOpen(groupIndex, itemIndex)
                                                ? 'menu-item-active'
                                                : 'menu-item-inactive',
                                            !sidebar.state.isExpanded && !sidebar.state.isHovered
                                                ? 'xl:justify-center'
                                                : 'xl:justify-start',
                                        ]"
                                        type="button"
                                        @click="toggleSubmenu(groupIndex, itemIndex)"
                                    >
                                        <span
                                            :class="
                                                isSubmenuOpen(groupIndex, itemIndex)
                                                    ? 'menu-item-icon-active'
                                                    : 'menu-item-icon-inactive'
                                            "
                                            v-html="item.iconSvg"
                                        ></span>

                                        <span
                                            v-show="isExpandedOrHovered"
                                            class="menu-item-text flex items-center gap-2"
                                        >
                                            {{ item.name }}
                                            <span
                                                v-if="item.new"
                                                class="absolute right-10"
                                                :class="
                                                    isActive(item.path ?? '')
                                                        ? 'menu-dropdown-badge menu-dropdown-badge-active'
                                                        : 'menu-dropdown-badge menu-dropdown-badge-inactive'
                                                "
                                            >
                                                new
                                            </span>
                                        </span>

                                        <svg
                                            v-show="isExpandedOrHovered"
                                            class="ml-auto w-5 h-5 transition-transform duration-200"
                                            :class="{
                                                'rotate-180 text-brand-500': isSubmenuOpen(
                                                    groupIndex,
                                                    itemIndex
                                                ),
                                            }"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M19 9l-7 7-7-7"
                                            ></path>
                                        </svg>
                                    </button>

                                    <div v-show="isSubmenuOpen(groupIndex, itemIndex) && isExpandedOrHovered">
                                        <ul class="mt-2 space-y-1 ml-9">
                                            <li v-for="subItem in item.subItems" :key="subItem.path">
                                                <Link
                                                    :href="subItem.path"
                                                    class="menu-dropdown-item"
                                                    :class="
                                                        isActive(subItem.path)
                                                            ? 'menu-dropdown-item-active'
                                                            : 'menu-dropdown-item-inactive'
                                                    "
                                                >
                                                    {{ subItem.name }}
                                                    <span class="flex items-center gap-1 ml-auto">
                                                        <span
                                                            v-if="subItem.new"
                                                            :class="
                                                                isActive(subItem.path)
                                                                    ? 'menu-dropdown-badge menu-dropdown-badge-active'
                                                                    : 'menu-dropdown-badge menu-dropdown-badge-inactive'
                                                            "
                                                        >
                                                            new
                                                        </span>
                                                        <span
                                                            v-if="subItem.pro"
                                                            :class="
                                                                isActive(subItem.path)
                                                                    ? 'menu-dropdown-badge-pro menu-dropdown-badge-pro-active'
                                                                    : 'menu-dropdown-badge-pro menu-dropdown-badge-pro-inactive'
                                                            "
                                                        >
                                                            pro
                                                        </span>
                                                    </span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </template>

                                <template v-else>
                                    <Link
                                        :href="item.path"
                                        class="menu-item group"
                                        :class="[
                                            isActive(item.path) ? 'menu-item-active' : 'menu-item-inactive',
                                            !isExpandedOrHovered ? 'xl:justify-center' : 'justify-start',
                                        ]"
                                    >
                                        <span
                                            :class="
                                                isActive(item.path)
                                                    ? 'menu-item-icon-active'
                                                    : 'menu-item-icon-inactive'
                                            "
                                            v-html="item.iconSvg"
                                        ></span>
                                        <span
                                            v-show="isExpandedOrHovered"
                                            class="menu-item-text flex items-center gap-2"
                                        >
                                            {{ item.name }}
                                            <span
                                                v-if="item.new"
                                                class="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-brand-500 text-white"
                                            >
                                                new
                                            </span>
                                        </span>
                                    </Link>
                                </template>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </aside>
</template>

<script setup>
import { computed, reactive, watch } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';
import { useSidebarStore } from '../../stores/sidebar';
import SidebarWidget from './SidebarWidget.vue';

const sidebar = useSidebarStore();
const page = usePage();

const menuGroups = computed(() => page.props.menuGroups ?? []);
const openSubmenus = reactive({});

const normalizePath = (path) => {
    if (!path) {
        return '';
    }
    const base = path.split('?')[0].split('#')[0];
    if (!base) {
        return '/';
    }
    const normalized = base.startsWith('/') ? base : `/${base}`;
    return normalized !== '/' && normalized.endsWith('/') ? normalized.slice(0, -1) : normalized;
};

const isActive = (path) => {
    const current = normalizePath(page.url || '/');
    return normalizePath(path) === current;
};

const initializeActiveMenus = () => {
    Object.keys(openSubmenus).forEach((key) => {
        delete openSubmenus[key];
    });

    menuGroups.value.forEach((group, groupIndex) => {
        (group.items || []).forEach((item, itemIndex) => {
            if (!item.subItems) {
                return;
            }
            const hasActiveChild = item.subItems.some((subItem) => isActive(subItem.path));
            if (hasActiveChild) {
                openSubmenus[`${groupIndex}-${itemIndex}`] = true;
            }
        });
    });
};

const toggleSubmenu = (groupIndex, itemIndex) => {
    const key = `${groupIndex}-${itemIndex}`;
    const nextState = !openSubmenus[key];

    if (nextState) {
        Object.keys(openSubmenus).forEach((itemKey) => {
            delete openSubmenus[itemKey];
        });
    }

    openSubmenus[key] = nextState;
};

const isSubmenuOpen = (groupIndex, itemIndex) => !!openSubmenus[`${groupIndex}-${itemIndex}`];

const isExpandedOrHovered = computed(
    () => sidebar.state.isExpanded || sidebar.state.isHovered || sidebar.state.isMobileOpen
);

watch(() => page.url, initializeActiveMenus, { immediate: true });
watch(menuGroups, initializeActiveMenus, { immediate: true });
</script>
