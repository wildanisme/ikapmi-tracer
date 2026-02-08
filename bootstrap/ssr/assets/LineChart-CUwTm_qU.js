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
  __name: "LineChart",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Line Chart" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { pageTitle: "Line chart" }, null, _parent));
      _push(`<div class="space-y-6">`);
      _push(ssrRenderComponent(_sfc_main$3, { title: "Line chart 1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="custom-scrollbar max-w-full overflow-x-auto"${_scopeId}><div id="chartThree" class="min-w-[1000px]"${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "custom-scrollbar max-w-full overflow-x-auto" }, [
                createVNode("div", {
                  id: "chartThree",
                  class: "min-w-[1000px]"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$3, { title: "Line chart 2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="custom-scrollbar max-w-full overflow-x-auto"${_scopeId}><div id="chartEight" class="min-w-[1000px]"${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "custom-scrollbar max-w-full overflow-x-auto" }, [
                createVNode("div", {
                  id: "chartEight",
                  class: "min-w-[1000px]"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$3, { title: "Line chart 3" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="custom-scrollbar max-w-full overflow-x-auto"${_scopeId}><div id="chartThirteen" class="min-w-[1000px]"${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "custom-scrollbar max-w-full overflow-x-auto" }, [
                createVNode("div", {
                  id: "chartThirteen",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Chart/LineChart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
