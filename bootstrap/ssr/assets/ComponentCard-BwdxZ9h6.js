import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
const _sfc_main = {
  __name: "ComponentCard",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]" }, _attrs))}><div class="px-6 py-5"><h3 class="text-base font-medium text-gray-800 dark:text-white/90">${ssrInterpolate(__props.title)}</h3>`);
      if (__props.desc) {
        _push(`<p class="mt-1 text-sm text-gray-500 dark:text-gray-400">${ssrInterpolate(__props.desc)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6"><div class="space-y-6">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/common/ComponentCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
