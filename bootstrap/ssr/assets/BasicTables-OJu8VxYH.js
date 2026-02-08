import { mergeProps, useSSRContext, ref, onMounted, onBeforeUnmount, computed, withCtx, createVNode, createBlock, openBlock, unref } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderSlot, ssrRenderStyle, ssrRenderComponent, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { u as useClickOutside, _ as _sfc_main$7 } from "./AppLayout-DmZYFPyg.js";
import { _ as _sfc_main$9 } from "./ComponentCard-BwdxZ9h6.js";
import { _ as _sfc_main$8 } from "./PageBreadcrumb-ClrrUjmW.js";
import { createPopper } from "@popperjs/core";
import "./_plugin-vue_export-helper-Cbl_YQC7.js";
const _sfc_main$6 = {
  __name: "BasicTablesFive",
  __ssrInlineRender: true,
  setup(__props) {
    const orders = [
      { product: "TailGrids", category: "UI Kit", countryFlag: "/images/country/country-01.svg", country: "USA", cr: "Dashboard", value: "$12,499" },
      { product: "GrayGrids", category: "Templates", countryFlag: "/images/country/country-03.svg", country: "UK", cr: "Dashboard", value: "$5,498" },
      { product: "Uideck", category: "Templates", countryFlag: "/images/country/country-04.svg", country: "Canada", cr: "Dashboard", value: "$4,521" },
      { product: "FormBold", category: "SaaS", countryFlag: "/images/country/country-05.svg", country: "Australia", cr: "Dashboard", value: "$13,843" },
      { product: "NextAdmin", category: "Dashboard", countryFlag: "/images/country/country-06.svg", country: "Germany", cr: "Dashboard", value: "$7,523" },
      { product: "Form Builder", category: "SaaS", countryFlag: "/images/country/country-07.svg", country: "France", cr: "Dashboard", value: "$1,377" },
      { product: "AyroUI", category: "UI Kit", countryFlag: "/images/country/country-08.svg", country: "Japan", cr: "Dashboard", value: "$599,00" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-hidden rounded-2xl border border-gray-200 bg-white pt-4 dark:border-gray-800 dark:bg-white/[0.03]" }, _attrs))}><div class="flex flex-col gap-4 px-6 mb-4 sm:flex-row sm:items-center sm:justify-between"><div><h3 class="text-lg font-semibold text-gray-800 dark:text-white/90">Recent Orders</h3></div><div class="flex items-center gap-3"><button class="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-3 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"><svg class="stroke-current fill-white dark:fill-gray-800" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2.29004 5.90393H17.7067" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.7075 14.0961H2.29085" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.0826 3.33331C13.5024 3.33331 14.6534 4.48431 14.6534 5.90414C14.6534 7.32398 13.5024 8.47498 12.0826 8.47498C10.6627 8.47498 9.51172 7.32398 9.51172 5.90415C9.51172 4.48432 10.6627 3.33331 12.0826 3.33331Z" fill="" stroke="" stroke-width="1.5"></path><path d="M7.91745 11.525C6.49762 11.525 5.34662 12.676 5.34662 14.0959C5.34661 15.5157 6.49762 16.6667 7.91745 16.6667C9.33728 16.6667 10.4883 15.5157 10.4883 14.0959C10.4883 12.676 9.33728 11.525 7.91745 11.525Z" fill="" stroke="" stroke-width="1.5"></path></svg> Filter </button><button class="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-3 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"> See all </button></div></div><div class="max-w-full overflow-x-auto custom-scrollbar"><table class="min-w-full"><thead><tr class="border-gray-100 border-y dark:border-white/[0.05]"><th class="px-6 py-3"><div class="flex items-center"><p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Products</p></div></th><th class="px-6 py-3"><div class="flex items-center"><p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Category</p></div></th><th class="px-6 py-3"><div class="flex items-center col-span-2"><p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Country</p></div></th><th class="px-6 py-3"><div class="flex items-center col-span-2"><p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">CR</p></div></th><th class="px-6 py-3"><div class="flex items-center col-span-2"><p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Value</p></div></th></tr></thead><tbody class="divide-y divide-gray-100 dark:divide-white/[0.05]"><!--[-->`);
      ssrRenderList(orders, (order) => {
        _push(`<tr><td class="px-6 py-3.5"><div class="flex items-center"><p class="font-medium text-gray-800 text-theme-sm dark:text-white/90">${ssrInterpolate(order.product)}</p></div></td><td class="px-6 py-3.5"><div class="flex items-center"><p class="text-gray-500 text-theme-sm dark:text-gray-400">${ssrInterpolate(order.category)}</p></div></td><td class="px-6 py-3.5"><div class="flex items-center"><div class="w-5 h-5 overflow-hidden rounded-full"><img${ssrRenderAttr("src", order.countryFlag)}${ssrRenderAttr("alt", order.country)}></div></div></td><td class="px-6 py-3.5"><div class="flex items-center"><p class="text-gray-500 text-theme-sm dark:text-gray-400">${ssrInterpolate(order.cr)}</p></div></td><td class="px-6 py-3.5"><div class="flex items-center"><p class="text-theme-sm text-success-600">${ssrInterpolate(order.value)}</p></div></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/tables/basic-tables/BasicTablesFive.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "BasicTablesFour",
  __ssrInlineRender: true,
  setup(__props) {
    const campaigns = [
      { creator: { name: "Wilson Gouse", imageUrl: "/images/user/user-01.jpg" }, brand: { name: "Brand 1", logo: "/images/brand/brand-01.svg" }, title: "Grow your brand by...", type: "Ads campaign", status: "Success" },
      { creator: { name: "Terry Franci", imageUrl: "/images/user/user-02.jpg" }, brand: { name: "Brand 2", logo: "/images/brand/brand-02.svg" }, title: "Make Better Ideas...", type: "Ads campaign", status: "Pending" },
      { creator: { name: "Alena Franci", imageUrl: "/images/user/user-03.jpg" }, brand: { name: "Brand 3", logo: "/images/brand/brand-03.svg" }, title: "Increase your website tra...", type: "Ads campaign", status: "Success" },
      { creator: { name: "Jocelyn Kenter", imageUrl: "/images/user/user-04.jpg" }, brand: { name: "Brand 4", logo: "/images/brand/brand-04.svg" }, title: "Digital Marketing that...", type: "Ads campaign", status: "Failed" },
      { creator: { name: "Brandon Philips", imageUrl: "/images/user/user-05.jpg" }, brand: { name: "Brand 2", logo: "/images/brand/brand-02.svg" }, title: "Self branding", type: "Ads campaign", status: "Success" },
      { creator: { name: "James Lipshutz", imageUrl: "/images/user/user-06.jpg" }, brand: { name: "Brand 3", logo: "/images/brand/brand-03.svg" }, title: "Increase your website tra...", type: "Ads campaign", status: "Success" }
    ];
    const getStatusClass = (status) => {
      const base = "rounded-full px-2 text-theme-xs font-medium";
      if (status === "Success") {
        return `${base} bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500`;
      }
      if (status === "Pending") {
        return `${base} bg-warning-50 text-warning-600 dark:bg-warning-500/15 dark:text-orange-400`;
      }
      if (status === "Failed") {
        return `${base} bg-error-50 text-error-600 dark:bg-error-500/15 dark:text-error-500`;
      }
      return base;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6" }, _attrs))}><div class="flex justify-between gap-2 mb-4 sm:items-center"><div><h3 class="text-lg font-semibold text-gray-800 dark:text-white/90">Featured Campaigns</h3></div><div class="relative"></div></div><div class="max-w-full overflow-x-auto custom-scrollbar"><table class="min-w-full"><thead><tr class="border-gray-100 border-y dark:border-gray-800"><th class="py-3 font-normal"><div class="flex items-center"><p class="text-gray-500 text-theme-sm dark:text-gray-400">Creator</p></div></th><th class="py-3 font-normal"><div class="flex items-center"><p class="text-gray-500 text-theme-sm dark:text-gray-400">Campaign</p></div></th><th class="py-3 font-normal"><div class="flex items-center"><p class="text-gray-500 text-theme-sm dark:text-gray-400">Status</p></div></th></tr></thead><tbody class="divide-y divide-gray-100 dark:divide-gray-800"><!--[-->`);
      ssrRenderList(campaigns, (campaign) => {
        _push(`<tr><td class="py-3"><div class="flex items-center gap-[18px]"><div class="w-10 h-10 overflow-hidden rounded-full"><img${ssrRenderAttr("src", campaign.creator.imageUrl)}${ssrRenderAttr("alt", campaign.creator.name)}></div><div><p class="text-gray-700 text-theme-sm dark:text-gray-400">${ssrInterpolate(campaign.creator.name)}</p></div></div></td><td class="py-3"><div class="flex items-center"><div class="flex items-center w-full gap-5"><div class="w-full max-w-8"><img${ssrRenderAttr("src", campaign.brand.logo)} class="size-8"${ssrRenderAttr("alt", campaign.brand.name)}></div><div class="truncate"><p class="mb-0.5 truncate text-theme-sm font-medium text-gray-700 dark:text-gray-400">${ssrInterpolate(campaign.title)}</p><span class="text-gray-500 text-theme-xs dark:text-gray-400">${ssrInterpolate(campaign.type)}</span></div></div></div></td><td class="py-3"><div class="flex items-center"><span class="${ssrRenderClass(getStatusClass(campaign.status))}">${ssrInterpolate(campaign.status)}</span></div></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/tables/basic-tables/BasicTablesFour.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "BasicTablesOne",
  __ssrInlineRender: true,
  setup(__props) {
    const orders = [
      {
        id: 1,
        user: { image: "/images/user/user-17.jpg", name: "Lindsey Curtis", role: "Web Designer" },
        projectName: "Agency Website",
        team: { images: ["/images/user/user-22.jpg", "/images/user/user-23.jpg", "/images/user/user-24.jpg"] },
        budget: "3.9K",
        status: "Active"
      },
      {
        id: 2,
        user: { image: "/images/user/user-18.jpg", name: "Kaiya George", role: "Project Manager" },
        projectName: "Technology",
        team: { images: ["/images/user/user-25.jpg", "/images/user/user-26.jpg"] },
        budget: "24.9K",
        status: "Pending"
      },
      {
        id: 3,
        user: { image: "/images/user/user-19.jpg", name: "Zain Geidt", role: "Content Writer" },
        projectName: "Blog Writing",
        team: { images: ["/images/user/user-27.jpg"] },
        budget: "12.7K",
        status: "Active"
      },
      {
        id: 4,
        user: { image: "/images/user/user-20.jpg", name: "Abram Schleifer", role: "Digital Marketer" },
        projectName: "Social Media",
        team: { images: ["/images/user/user-28.jpg", "/images/user/user-29.jpg", "/images/user/user-30.jpg"] },
        budget: "2.8K",
        status: "Cancel"
      },
      {
        id: 5,
        user: { image: "/images/user/user-21.jpg", name: "Carla George", role: "Front-end Developer" },
        projectName: "Website",
        team: { images: ["/images/user/user-31.jpg", "/images/user/user-32.jpg", "/images/user/user-33.jpg"] },
        budget: "4.5K",
        status: "Active"
      }
    ];
    const getStatusClass = (status) => {
      const classes = {
        Active: "bg-green-50 text-green-700 dark:bg-green-500/15 dark:text-green-500",
        Pending: "bg-yellow-50 text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-400",
        Cancel: "bg-red-50 text-red-700 dark:bg-red-500/15 dark:text-red-500"
      };
      return classes[status] || "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]"><div class="max-w-full overflow-x-auto custom-scrollbar"><table class="w-full min-w-[1102px]"><thead><tr class="border-b border-gray-100 dark:border-gray-800"><th class="px-5 py-3 text-left sm:px-6"><p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">User</p></th><th class="px-5 py-3 text-left sm:px-6"><p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Project Name</p></th><th class="px-5 py-3 text-left sm:px-6"><p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Team</p></th><th class="px-5 py-3 text-left sm:px-6"><p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Status</p></th><th class="px-5 py-3 text-left sm:px-6"><p class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Budget</p></th></tr></thead><tbody><!--[-->`);
      ssrRenderList(orders, (order) => {
        _push(`<tr class="border-b border-gray-100 dark:border-gray-800"><td class="px-5 py-4 sm:px-6"><div class="flex items-center gap-3"><div class="w-10 h-10 overflow-hidden rounded-full"><img${ssrRenderAttr("src", order.user.image)}${ssrRenderAttr("alt", order.user.name)}></div><div><span class="block font-medium text-gray-800 text-theme-sm dark:text-white/90">${ssrInterpolate(order.user.name)}</span><span class="block text-gray-500 text-theme-xs dark:text-gray-400">${ssrInterpolate(order.user.role)}</span></div></div></td><td class="px-5 py-4 sm:px-6"><p class="text-gray-500 text-theme-sm dark:text-gray-400">${ssrInterpolate(order.projectName)}</p></td><td class="px-5 py-4 sm:px-6"><div class="flex -space-x-2"><!--[-->`);
        ssrRenderList(order.team.images, (teamImage, index) => {
          _push(`<div class="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900"><img${ssrRenderAttr("src", teamImage)} alt="team member"></div>`);
        });
        _push(`<!--]--></div></td><td class="px-5 py-4 sm:px-6"><p class="${ssrRenderClass([getStatusClass(order.status), "text-theme-xs inline-block rounded-full px-2 py-0.5 font-medium"])}">${ssrInterpolate(order.status)}</p></td><td class="px-5 py-4 sm:px-6"><p class="text-gray-500 text-theme-sm dark:text-gray-400">${ssrInterpolate(order.budget)}</p></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/tables/basic-tables/BasicTablesOne.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "TableDropdown",
  __ssrInlineRender: true,
  setup(__props) {
    const isOpen = ref(false);
    const button = ref(null);
    const content = ref(null);
    const root = ref(null);
    let popperInstance = null;
    useClickOutside(root, () => {
      isOpen.value = false;
    });
    onMounted(() => {
      if (button.value && content.value) {
        popperInstance = createPopper(button.value, content.value, {
          placement: "bottom-end",
          strategy: "fixed",
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 4]
              }
            }
          ]
        });
      }
    });
    onBeforeUnmount(() => {
      if (popperInstance) {
        popperInstance.destroy();
        popperInstance = null;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "root",
        ref: root
      }, _attrs))}><div class="cursor-pointer">`);
      ssrRenderSlot(_ctx.$slots, "button", {}, null, _push, _parent);
      _push(`</div><div class="z-50 fixed"><div class="p-2 bg-white border border-gray-200 rounded-2xl shadow-lg dark:border-gray-800 dark:bg-gray-dark w-40" style="${ssrRenderStyle(isOpen.value ? null : { display: "none" })}"><div class="space-y-1" role="menu" aria-orientation="vertical">`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/common/TableDropdown.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "BasicTablesThree",
  __ssrInlineRender: true,
  setup(__props) {
    const transactions = ref([
      { id: 1, name: "Bought PYPL", image: "/images/brand/brand-08.svg", date: "Nov 23, 01:00 PM", price: "$2,567.88", category: "Finance", status: "Success" },
      { id: 2, name: "Bought AAPL", image: "/images/brand/brand-07.svg", date: "Nov 23, 01:00 PM", price: "$2,567.88", category: "Finance", status: "Pending" },
      { id: 3, name: "Sell KKST", image: "/images/brand/brand-15.svg", date: "Nov 23, 01:00 PM", price: "$2,567.88", category: "Finance", status: "Success" },
      { id: 4, name: "Bought FB", image: "/images/brand/brand-02.svg", date: "Nov 23, 01:00 PM", price: "$2,567.88", category: "Finance", status: "Success" },
      { id: 5, name: "Sell AMZN", image: "/images/brand/brand-10.svg", date: "Nov 23, 01:00 PM", price: "$2,567.88", category: "Finance", status: "Failed" },
      { id: 6, name: "Bought MSFT", image: "/images/brand/brand-09.svg", date: "Nov 22, 01:00 PM", price: "$1,567.88", category: "Finance", status: "Success" },
      { id: 7, name: "Bought GOOG", image: "/images/brand/brand-01.svg", date: "Nov 22, 01:00 PM", price: "$3,567.88", category: "Finance", status: "Pending" },
      { id: 8, name: "Sell TSLA", image: "/images/brand/brand-12.svg", date: "Nov 22, 01:00 PM", price: "$4,567.88", category: "Finance", status: "Success" },
      { id: 9, name: "Bought NVDA", image: "/images/brand/brand-11.svg", date: "Nov 22, 01:00 PM", price: "$5,567.88", category: "Finance", status: "Success" },
      { id: 10, name: "Sell META", image: "/images/brand/brand-03.svg", date: "Nov 22, 01:00 PM", price: "$6,567.88", category: "Finance", status: "Failed" },
      { id: 11, name: "Bought DIS", image: "/images/brand/brand-04.svg", date: "Nov 21, 01:00 PM", price: "$7,567.88", category: "Finance", status: "Success" },
      { id: 12, name: "Bought NFLX", image: "/images/brand/brand-05.svg", date: "Nov 21, 01:00 PM", price: "$8,567.88", category: "Finance", status: "Pending" },
      { id: 13, name: "Sell CRM", image: "/images/brand/brand-06.svg", date: "Nov 21, 01:00 PM", price: "$9,567.88", category: "Finance", status: "Success" },
      { id: 14, name: "Bought TSLA", image: "/images/brand/brand-13.svg", date: "Nov 21, 01:00 PM", price: "$10,567.88", category: "Finance", status: "Success" },
      { id: 15, name: "Sell AAPL", image: "/images/brand/brand-14.svg", date: "Nov 21, 01:00 PM", price: "$11,567.88", category: "Finance", status: "Failed" }
    ]);
    const itemsPerPage = ref(5);
    const currentPage = ref(1);
    const totalPages = computed(() => Math.ceil(transactions.value.length / itemsPerPage.value));
    const paginatedTransactions = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      return transactions.value.slice(start, start + itemsPerPage.value);
    });
    const displayedPages = computed(() => {
      const range = [];
      for (let i = 1; i <= totalPages.value; i += 1) {
        if (i === 1 || i === totalPages.value || i >= currentPage.value - 1 && i <= currentPage.value + 1) {
          range.push(i);
        } else if (range[range.length - 1] !== "...") {
          range.push("...");
        }
      }
      return range;
    });
    const getStatusClass = (status) => {
      const classes = {
        Success: "bg-green-50 text-green-600 dark:bg-green-500/15 dark:text-green-500",
        Pending: "bg-yellow-50 text-yellow-600 dark:bg-yellow-500/15 dark:text-orange-400",
        Failed: "bg-red-50 text-red-600 dark:bg-red-500/15 dark:text-red-500"
      };
      return classes[status] || "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-2xl border border-gray-200 bg-white pt-4 dark:border-gray-800 dark:bg-white/[0.03]" }, _attrs))}><div class="flex flex-col gap-2 px-5 mb-4 sm:flex-row sm:items-center sm:justify-between sm:px-6"><div><h3 class="text-lg font-semibold text-gray-800 dark:text-white/90">Latest Transactions</h3></div><div class="flex flex-col gap-3 sm:flex-row sm:items-center"><form><div class="relative"><button type="button" class="absolute -translate-y-1/2 left-4 top-1/2"><svg class="fill-gray-500 dark:fill-gray-400" width="20" height="20" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.04199 9.37381C3.04199 5.87712 5.87735 3.04218 9.37533 3.04218C12.8733 3.04218 15.7087 5.87712 15.7087 9.37381C15.7087 12.8705 12.8733 15.7055 9.37533 15.7055C5.87735 15.7055 3.04199 12.8705 3.04199 9.37381ZM9.37533 1.54218C5.04926 1.54218 1.54199 5.04835 1.54199 9.37381C1.54199 13.6993 5.04926 17.2055 9.37533 17.2055C11.2676 17.2055 13.0032 16.5346 14.3572 15.4178L17.1773 18.2381C17.4702 18.531 17.945 18.5311 18.2379 18.2382C18.5308 17.9453 18.5309 17.4704 18.238 17.1775L15.4182 14.3575C16.5367 13.0035 17.2087 11.2671 17.2087 9.37381C17.2087 5.04835 13.7014 1.54218 9.37533 1.54218Z" fill=""></path></svg></button><input type="text" placeholder="Search..." class="h-[42px] w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pl-[42px] pr-4 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-blue-800 xl:w-[300px]"></div></form></div></div><div class="overflow-hidden"><div class="max-w-full px-5 overflow-x-auto"><table class="min-w-full"><thead><tr class="border-gray-200 border-y dark:border-gray-700"><th scope="col" class="px-4 py-3 font-normal text-gray-500 text-start text-theme-sm dark:text-gray-400">Name</th><th scope="col" class="px-4 py-3 font-normal text-gray-500 text-start text-theme-sm dark:text-gray-400">Date</th><th scope="col" class="px-4 py-3 font-normal text-gray-500 text-start text-theme-sm dark:text-gray-400">Price</th><th scope="col" class="px-4 py-3 text-xs font-medium tracking-wider text-left text-gray-500 capitalize">Category</th><th scope="col" class="px-4 py-3 font-normal text-gray-500 text-start text-theme-sm dark:text-gray-400">Status</th><th scope="col" class="relative px-4 py-3 capitalize"><span class="sr-only">Actions</span></th></tr></thead><tbody class="divide-y divide-gray-200 dark:divide-gray-700"><!--[-->`);
      ssrRenderList(paginatedTransactions.value, (transaction) => {
        _push(`<tr><td class="py-4 whitespace-nowrap"><div class="flex items-center"><div class="shrink-0 w-8 h-8"><img class="w-8 h-8 rounded-full"${ssrRenderAttr("src", transaction.image)} alt=""></div><div class="ml-4"><div class="text-sm font-medium text-gray-900 dark:text-white">${ssrInterpolate(transaction.name)}</div></div></div></td><td class="px-4 py-4 whitespace-nowrap"><div class="text-sm text-gray-500 dark:text-gray-400">${ssrInterpolate(transaction.date)}</div></td><td class="px-4 py-4 whitespace-nowrap"><div class="text-sm text-gray-500 dark:text-gray-400">${ssrInterpolate(transaction.price)}</div></td><td class="px-4 py-4 whitespace-nowrap"><div class="text-sm text-gray-500 dark:text-gray-400">${ssrInterpolate(transaction.category)}</div></td><td class="px-4 py-4 whitespace-nowrap"><span class="${ssrRenderClass([getStatusClass(transaction.status), "px-2 inline-flex text-xs leading-5 font-semibold rounded-full"])}">${ssrInterpolate(transaction.status)}</span></td><td class="px-4 py-4 text-sm font-medium text-right whitespace-nowrap"><div class="flex justify-center relative">`);
        _push(ssrRenderComponent(_sfc_main$3, null, {
          button: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button type="button" aria-haspopup="true" aria-expanded="true" class="text-gray-500 dark:text-gray-400"${_scopeId}><svg class="fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path fill-rule="evenodd" clip-rule="evenodd" d="M5.99902 10.245C6.96552 10.245 7.74902 11.0285 7.74902 11.995V12.005C7.74902 12.9715 6.96552 13.755 5.99902 13.755C5.03253 13.755 4.24902 12.9715 4.24902 12.005V11.995C4.24902 11.0285 5.03253 10.245 5.99902 10.245ZM17.999 10.245C18.9655 10.245 19.749 11.0285 19.749 11.995V12.005C19.749 12.9715 18.9655 13.755 17.999 13.755C17.0325 13.755 16.249 12.9715 16.249 12.005V11.995C16.249 11.0285 17.0325 10.245 17.999 10.245ZM13.749 11.995C13.749 11.0285 12.9655 10.245 11.999 10.245C11.0325 10.245 10.249 11.0285 10.249 11.995V12.005C10.249 12.9715 11.0325 13.755 11.999 13.755C12.9655 13.755 13.749 12.9715 13.749 12.005V11.995Z" fill="currentColor"${_scopeId}></path></svg></button>`);
            } else {
              return [
                createVNode("button", {
                  type: "button",
                  "aria-haspopup": "true",
                  "aria-expanded": "true",
                  class: "text-gray-500 dark:text-gray-400"
                }, [
                  (openBlock(), createBlock("svg", {
                    class: "fill-current",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      "fill-rule": "evenodd",
                      "clip-rule": "evenodd",
                      d: "M5.99902 10.245C6.96552 10.245 7.74902 11.0285 7.74902 11.995V12.005C7.74902 12.9715 6.96552 13.755 5.99902 13.755C5.03253 13.755 4.24902 12.9715 4.24902 12.005V11.995C4.24902 11.0285 5.03253 10.245 5.99902 10.245ZM17.999 10.245C18.9655 10.245 19.749 11.0285 19.749 11.995V12.005C19.749 12.9715 18.9655 13.755 17.999 13.755C17.0325 13.755 16.249 12.9715 16.249 12.005V11.995C16.249 11.0285 17.0325 10.245 17.999 10.245ZM13.749 11.995C13.749 11.0285 12.9655 10.245 11.999 10.245C11.0325 10.245 10.249 11.0285 10.249 11.995V12.005C10.249 12.9715 11.0325 13.755 11.999 13.755C12.9655 13.755 13.749 12.9715 13.749 12.005V11.995Z",
                      fill: "currentColor"
                    })
                  ]))
                ])
              ];
            }
          }),
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<a href="#" class="flex w-full px-3 py-2 font-medium text-left text-gray-500 rounded-lg text-theme-xs hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300" role="menuitem"${_scopeId}> View More </a><a href="#" class="flex w-full px-3 py-2 font-medium text-left text-gray-500 rounded-lg text-theme-xs hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300" role="menuitem"${_scopeId}> Delete </a>`);
            } else {
              return [
                createVNode("a", {
                  href: "#",
                  class: "flex w-full px-3 py-2 font-medium text-left text-gray-500 rounded-lg text-theme-xs hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300",
                  role: "menuitem"
                }, " View More "),
                createVNode("a", {
                  href: "#",
                  class: "flex w-full px-3 py-2 font-medium text-left text-gray-500 rounded-lg text-theme-xs hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300",
                  role: "menuitem"
                }, " Delete ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div><div class="px-6 py-4 border-t border-gray-200 dark:border-white/[0.05]"><div class="flex items-center justify-between"><button${ssrIncludeBooleanAttr(currentPage.value === 1) ? " disabled" : ""} class="${ssrRenderClass([currentPage.value === 1 ? "opacity-50 cursor-not-allowed" : "", "flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-3 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 sm:px-3.5"])}"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.58301 9.99868C2.58272 10.1909 2.65588 10.3833 2.80249 10.53L7.79915 15.5301C8.09194 15.8231 8.56682 15.8233 8.85981 15.5305C9.15281 15.2377 9.15297 14.7629 8.86018 14.4699L5.14009 10.7472L16.6675 10.7472C17.0817 10.7472 17.4175 10.4114 17.4175 9.99715C17.4175 9.58294 17.0817 9.24715 16.6675 9.24715L5.14554 9.24715L8.86017 5.53016C9.15297 5.23717 9.15282 4.7623 8.85983 4.4695C8.56684 4.1767 8.09197 4.17685 7.79917 4.46984L2.84167 9.43049C2.68321 9.568 2.58301 9.77087 2.58301 9.99715C2.58301 9.99766 2.58301 9.99817 2.58301 9.99868Z" fill="currentColor"></path></svg><span class="hidden sm:inline">Previous</span></button><span class="block text-sm font-medium text-gray-700 dark:text-gray-400 sm:hidden"> Page ${ssrInterpolate(currentPage.value)} of ${ssrInterpolate(totalPages.value)}</span><ul class="hidden items-center gap-0.5 sm:flex"><!--[-->`);
      ssrRenderList(displayedPages.value, (page) => {
        _push(`<li>`);
        if (page !== "...") {
          _push(`<button class="${ssrRenderClass([currentPage.value === page ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-blue-500/[0.08] hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-500", "flex h-10 w-10 items-center justify-center rounded-lg text-theme-sm font-medium"])}">${ssrInterpolate(page)}</button>`);
        } else {
          _push(`<span class="flex h-10 w-10 items-center justify-center text-gray-500">...</span>`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul><button${ssrIncludeBooleanAttr(currentPage.value === totalPages.value) ? " disabled" : ""} class="${ssrRenderClass([currentPage.value === totalPages.value ? "opacity-50 cursor-not-allowed" : "", "flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-3 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 sm:px-3.5"])}"><span class="hidden sm:inline">Next</span><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.4175 9.9986C17.4178 10.1909 17.3446 10.3832 17.198 10.53L12.2013 15.5301C11.9085 15.8231 11.4337 15.8233 11.1407 15.5305C10.8477 15.2377 10.8475 14.7629 11.1403 14.4699L14.8604 10.7472L3.33301 10.7472C2.91879 10.7472 2.58301 10.4114 2.58301 9.99715C2.58301 9.58294 2.91879 9.24715 3.33301 9.24715L14.8549 9.24715L11.1403 5.53016C10.8475 5.23717 10.8477 4.7623 11.1407 4.4695C11.4336 4.1767 11.9085 4.17685 12.2013 4.46984L17.1588 9.43049C17.3173 9.568 17.4175 9.77087 17.4175 9.99715C17.4175 9.99763 17.4175 9.99812 17.4175 9.9986Z" fill="currentColor"></path></svg></button></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/tables/basic-tables/BasicTablesThree.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "BasicTablesTwo",
  __ssrInlineRender: true,
  setup(__props) {
    const tableRowData = ref([
      {
        id: "DE124321",
        customerName: "John Doe",
        customerEmail: "johndoe@gmail.com",
        initials: "JD",
        avatarBg: "bg-blue-100",
        avatarColor: "text-blue-500",
        product: "Software License",
        value: "$18,50.34",
        closeDate: "2024-06-15",
        status: "Complete"
      },
      {
        id: "DE124322",
        customerName: "Kierra Franci",
        customerEmail: "kierra@gmail.com",
        initials: "KF",
        avatarBg: "bg-[#fdf2fa]",
        avatarColor: "text-[#dd2590]",
        product: "Software License",
        value: "$18,50.34",
        closeDate: "2024-06-15",
        status: "Complete"
      },
      {
        id: "DE124323",
        customerName: "Emerson Workman",
        customerEmail: "emerson@gmail.com",
        initials: "EW",
        avatarBg: "bg-[#f0f9ff]",
        avatarColor: "text-[#0086c9]",
        product: "Software License",
        value: "$18,50.34",
        closeDate: "2024-06-15",
        status: "Pending"
      },
      {
        id: "DE124324",
        customerName: "Chance Philips",
        customerEmail: "chance@gmail.com",
        initials: "CP",
        avatarBg: "bg-[#fff6ed]",
        avatarColor: "text-[#ec4a0a]",
        product: "Software License",
        value: "$18,50.34",
        closeDate: "2024-06-15",
        status: "Complete"
      },
      {
        id: "DE124325",
        customerName: "Terry Geidt",
        customerEmail: "terry@gmail.com",
        initials: "TG",
        avatarBg: "bg-green-50",
        avatarColor: "text-green-600",
        product: "Software License",
        value: "$18,50.34",
        closeDate: "2024-06-15",
        status: "Complete"
      }
    ]);
    const selectedRows = ref([]);
    const selectAll = ref(false);
    const getStatusClass = (status) => {
      const classes = {
        Complete: "bg-green-50 text-green-700 dark:bg-green-500/15 dark:text-green-500",
        Pending: "bg-yellow-50 text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-400",
        Cancel: "bg-red-50 text-red-700 dark:bg-red-500/15 dark:text-red-500"
      };
      return classes[status] || "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-hidden rounded-2xl border border-gray-200 bg-white pt-4 dark:border-white/[0.05] dark:bg-white/[0.03]" }, _attrs))}><div class="flex flex-col gap-4 px-6 mb-4 sm:flex-row sm:items-center sm:justify-between"><div><h3 class="text-lg font-semibold text-gray-800 dark:text-white/90">Recent Orders</h3></div><div class="flex items-center gap-3"><button class="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-3 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"><svg class="stroke-current fill-white dark:fill-gray-800" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2.29004 5.90393H17.7067" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.7075 14.0961H2.29085" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.0826 3.33331C13.5024 3.33331 14.6534 4.48431 14.6534 5.90414C14.6534 7.32398 13.5024 8.47498 12.0826 8.47498C10.6627 8.47498 9.51172 7.32398 9.51172 5.90415C9.51172 4.48432 10.6627 3.33331 12.0826 3.33331Z" fill="" stroke="" stroke-width="1.5"></path><path d="M7.91745 11.525C6.49762 11.525 5.34662 12.676 5.34662 14.0959C5.34661 15.5157 6.49762 16.6667 7.91745 16.6667C9.33728 16.6667 10.4883 15.5157 10.4883 14.0959C10.4883 12.676 9.33728 11.525 7.91745 11.525Z" fill="" stroke="" stroke-width="1.5"></path></svg> Filter </button><button class="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-3 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"> See all </button></div></div><div class="max-w-full overflow-x-auto"><table class="w-full"><thead class="px-6 py-3.5 border-t border-gray-100 border-y bg-gray-50 dark:border-white/[0.05] dark:bg-gray-900"><tr><th class="px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-xs dark:text-gray-400 text-start"><div class="flex items-center gap-3"><div class="${ssrRenderClass([selectAll.value ? "border-blue-500 dark:border-blue-500 bg-blue-500" : "bg-white dark:bg-white/0 border-gray-300 dark:border-gray-700", "flex h-5 w-5 cursor-pointer items-center justify-center rounded-md border-[1.25px]"])}"><svg class="${ssrRenderClass(selectAll.value ? "block" : "hidden")}" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11.6668 3.5L5.25016 9.91667L2.3335 7" stroke="white" stroke-width="1.94437" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><span class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Deal ID</span></div></th><th class="px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-xs dark:text-gray-400 text-start">Customer</th><th class="px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-xs dark:text-gray-400 text-start">Product/Service</th><th class="px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-xs dark:text-gray-400 text-start">Deal Value</th><th class="px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-xs dark:text-gray-400 text-start">Close Date</th><th class="px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-xs dark:text-gray-400 text-start">Status</th><th class="px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-xs dark:text-gray-400 text-start">Action</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(tableRowData.value, (row) => {
        _push(`<tr class="border-b border-gray-100 dark:border-white/[0.05]"><td class="px-4 sm:px-6 py-3.5"><div class="flex items-center gap-3"><div class="${ssrRenderClass([selectedRows.value.includes(row.id) ? "border-blue-500 dark:border-blue-500 bg-blue-500" : "bg-white dark:bg-white/0 border-gray-300 dark:border-gray-700", "flex h-5 w-5 cursor-pointer items-center justify-center rounded-md border-[1.25px]"])}"><svg class="${ssrRenderClass(selectedRows.value.includes(row.id) ? "block" : "hidden")}" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11.6668 3.5L5.25016 9.91667L2.3335 7" stroke="white" stroke-width="1.94437" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><span class="block font-medium text-gray-700 text-theme-sm dark:text-gray-400">${ssrInterpolate(row.id)}</span></div></td><td class="px-4 sm:px-6 py-3.5"><div class="flex items-center gap-3"><div class="${ssrRenderClass([[row.avatarBg, row.avatarColor], "flex items-center justify-center w-10 h-10 rounded-full font-medium text-sm"])}"><span>${ssrInterpolate(row.initials)}</span></div><div><span class="mb-0.5 block text-theme-sm font-medium text-gray-700 dark:text-gray-400">${ssrInterpolate(row.customerName)}</span><span class="text-gray-500 text-theme-sm dark:text-gray-400">${ssrInterpolate(row.customerEmail)}</span></div></div></td><td class="px-4 sm:px-6 py-3.5"><p class="text-gray-700 text-theme-sm dark:text-gray-400">${ssrInterpolate(row.product)}</p></td><td class="px-4 sm:px-6 py-3.5"><p class="text-gray-700 text-theme-sm dark:text-gray-400">${ssrInterpolate(row.value)}</p></td><td class="px-4 sm:px-6 py-3.5"><p class="text-gray-700 text-theme-sm dark:text-gray-400">${ssrInterpolate(row.closeDate)}</p></td><td class="px-4 sm:px-6 py-3.5"><span class="${ssrRenderClass([getStatusClass(row.status), "text-theme-xs inline-block rounded-full px-2 py-0.5 font-medium"])}">${ssrInterpolate(row.status)}</span></td><td class="px-4 sm:px-6 py-3.5"><button type="button"><svg class="text-gray-700 cursor-pointer size-5 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/tables/basic-tables/BasicTablesTwo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$7
}, {
  __name: "BasicTables",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Basic Tables" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$8, { pageTitle: "From Elements" }, null, _parent));
      _push(`<div class="space-y-6">`);
      _push(ssrRenderComponent(_sfc_main$9, { title: "Basic Table 1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$4, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$4)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$9, { title: "Basic Table 2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$9, { title: "Basic Table 3" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$9, { title: "Basic Table 4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$5, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$5)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$9, { title: "Basic Table 5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$6, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$6)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Tables/BasicTables.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
