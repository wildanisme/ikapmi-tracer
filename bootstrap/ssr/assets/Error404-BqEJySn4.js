import { computed, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { Head, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$1, C as CommonGridShape } from "./CommonGridShape-DXRfbObr.js";
import "./_plugin-vue_export-helper-Cbl_YQC7.js";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "Error404",
  __ssrInlineRender: true,
  setup(__props) {
    const currentYear = computed(() => (/* @__PURE__ */ new Date()).getFullYear());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Error 404" }, null, _parent));
      _push(`<div class="relative flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden z-1">`);
      _push(ssrRenderComponent(CommonGridShape, null, null, _parent));
      _push(`<div class="mx-auto w-full max-w-[242px] text-center sm:max-w-[472px]"><h1 class="mb-8 font-bold text-gray-800 text-title-md dark:text-white/90 xl:text-title-2xl"> ERROR </h1><img src="/images/error/404.svg" alt="404" class="dark:hidden"><img src="/images/error/404-dark.svg" alt="404" class="hidden dark:block"><p class="mt-10 mb-6 text-base text-gray-700 dark:text-gray-400 sm:text-lg"> We can&#39;t seem to find the page you are looking for! </p>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/",
        class: "inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3.5 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Back to Home Page `);
          } else {
            return [
              createTextVNode(" Back to Home Page ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p class="absolute text-sm text-center text-gray-500 -translate-x-1/2 bottom-6 left-1/2 dark:text-gray-400"> © ${ssrInterpolate(currentYear.value)} - TailAdmin </p></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Errors/Error404.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
