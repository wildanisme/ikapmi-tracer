import { unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AppLayout-DmZYFPyg.js";
import { _ as _sfc_main$3 } from "./ComponentCard-BwdxZ9h6.js";
import { _ as _sfc_main$2 } from "./PageBreadcrumb-ClrrUjmW.js";
import "./_plugin-vue_export-helper-Cbl_YQC7.js";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "BarChart",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Bar Chart" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { pageTitle: "Bar chart" }, null, _parent));
      _push(`<div class="space-y-6">`);
      _push(ssrRenderComponent(_sfc_main$3, { title: "Bar chart 1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="custom-scrollbar max-w-full overflow-x-auto"${_scopeId}><div id="chartOne" class="min-w-[1000px]"${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "custom-scrollbar max-w-full overflow-x-auto" }, [
                createVNode("div", {
                  id: "chartOne",
                  class: "min-w-[1000px]"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$3, { title: "Bar chart 2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="custom-scrollbar max-w-full overflow-x-auto"${_scopeId}><div id="chartSix" class="min-w-[1000px]"${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "custom-scrollbar max-w-full overflow-x-auto" }, [
                createVNode("div", {
                  id: "chartSix",
                  class: "min-w-[1000px]"
                })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Chart/BarChart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
