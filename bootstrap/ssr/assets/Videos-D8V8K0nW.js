import { computed, mergeProps, useSSRContext, unref, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./AppLayout-DmZYFPyg.js";
import { _ as _sfc_main$4 } from "./ComponentCard-BwdxZ9h6.js";
import { _ as _sfc_main$3 } from "./PageBreadcrumb-ClrrUjmW.js";
import "./_plugin-vue_export-helper-Cbl_YQC7.js";
const _sfc_main$1 = {
  __name: "YoutubeEmbed",
  __ssrInlineRender: true,
  props: {
    videoId: {
      type: String,
      default: ""
    },
    aspectRatio: {
      type: String,
      default: "16:9"
    },
    title: {
      type: String,
      default: "YouTube video"
    },
    className: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const aspectRatioClasses = {
      "16:9": "aspect-video",
      "4:3": "aspect-4/3",
      "21:9": "aspect-21/9",
      "1:1": "aspect-square"
    };
    const aspectRatioClass = computed(
      () => aspectRatioClasses[props.aspectRatio] ?? aspectRatioClasses["16:9"]
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["overflow-hidden rounded-lg", [aspectRatioClass.value, __props.className]]
      }, _attrs))}><iframe${ssrRenderAttr("src", `https://www.youtube.com/embed/${__props.videoId}`)}${ssrRenderAttr("title", __props.title)} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="w-full h-full"></iframe></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/YoutubeEmbed.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$2
}, {
  __name: "Videos",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Videos" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, { pageTitle: "Videos" }, null, _parent));
      _push(`<div class="grid grid-cols-1 gap-5 sm:gap-6 xl:grid-cols-2"><div class="space-y-5 sm:space-y-6">`);
      _push(ssrRenderComponent(_sfc_main$4, { title: "Video Ratio 16:9" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, { "video-id": "dQw4w9WgXcQ" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1, { "video-id": "dQw4w9WgXcQ" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$4, { title: "Video Ratio 4:3" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, {
              "video-id": "dQw4w9WgXcQ",
              "aspect-ratio": "4:3"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1, {
                "video-id": "dQw4w9WgXcQ",
                "aspect-ratio": "4:3"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-5 sm:space-y-6">`);
      _push(ssrRenderComponent(_sfc_main$4, { title: "Video Ratio 21:9" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, {
              "video-id": "dQw4w9WgXcQ",
              "aspect-ratio": "21:9"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1, {
                "video-id": "dQw4w9WgXcQ",
                "aspect-ratio": "21:9"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$4, { title: "Video Ratio 1:1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, {
              "video-id": "dQw4w9WgXcQ",
              "aspect-ratio": "1:1"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1, {
                "video-id": "dQw4w9WgXcQ",
                "aspect-ratio": "1:1"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/UIElements/Videos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
