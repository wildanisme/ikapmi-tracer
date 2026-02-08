import { unref, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AppLayout-DmZYFPyg.js";
import { _ as _sfc_main$2 } from "./PageBreadcrumb-ClrrUjmW.js";
import "./_plugin-vue_export-helper-Cbl_YQC7.js";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "Blank",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Blank Page" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { pageTitle: "Blank Page" }, null, _parent));
      _push(`<div class="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12"><div class="mx-auto w-full max-w-[630px] text-center"><h3 class="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl"> Card Title Here </h3><p class="text-sm text-gray-500 dark:text-gray-400 sm:text-base"> Start putting content on grids or panels, you can also use different combinations of grids.Please check out the dashboard and other pages </p></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Blank.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
