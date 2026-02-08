import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { onMounted, useSSRContext } from "vue";
import { u as useThemeStore, a as _sfc_main$2, _ as _export_sfc } from "./_plugin-vue_export-helper-Cbl_YQC7.js";
const _sfc_main$1 = {
  __name: "FullscreenLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = useThemeStore();
    onMounted(() => {
      theme.initTheme();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/FullscreenLayout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="absolute right-0 top-0 -z-1 w-full max-w-[250px] xl:max-w-[450px]"><img src="/images/shape/grid-01.svg" alt="grid"></div><div class="absolute bottom-0 left-0 -z-1 w-full max-w-[250px] rotate-180 xl:max-w-[450px]"><img src="/images/shape/grid-01.svg" alt="grid"></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/common/CommonGridShape.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CommonGridShape = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  CommonGridShape as C,
  _sfc_main$1 as _
};
