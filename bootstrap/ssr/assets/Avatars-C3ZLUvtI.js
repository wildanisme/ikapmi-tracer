import { computed, mergeProps, useSSRContext, unref, withCtx, createVNode, createBlock, openBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./AppLayout-DmZYFPyg.js";
import { _ as _sfc_main$4 } from "./ComponentCard-BwdxZ9h6.js";
import { _ as _sfc_main$3 } from "./PageBreadcrumb-ClrrUjmW.js";
import "./_plugin-vue_export-helper-Cbl_YQC7.js";
const _sfc_main$1 = {
  __name: "Avatar",
  __ssrInlineRender: true,
  props: {
    src: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: "User Avatar"
    },
    size: {
      type: String,
      default: "medium"
    },
    status: {
      type: String,
      default: "none"
    }
  },
  setup(__props) {
    const props = __props;
    const sizeClasses = {
      xsmall: "h-6 w-6 max-w-6",
      small: "h-8 w-8 max-w-8",
      medium: "h-10 w-10 max-w-10",
      large: "h-12 w-12 max-w-12",
      xlarge: "h-14 w-14 max-w-14",
      xxlarge: "h-16 w-16 max-w-16"
    };
    const statusSizeClasses = {
      xsmall: "h-1.5 w-1.5 max-w-1.5",
      small: "h-2 w-2 max-w-2",
      medium: "h-2.5 w-2.5 max-w-2.5",
      large: "h-3 w-3 max-w-3",
      xlarge: "h-3.5 w-3.5 max-w-3.5",
      xxlarge: "h-4 w-4 max-w-4"
    };
    const statusColorClasses = {
      online: "bg-green-500",
      offline: "bg-red-400",
      busy: "bg-yellow-500"
    };
    const sizeClass = computed(() => sizeClasses[props.size] ?? sizeClasses.medium);
    const statusSizeClass = computed(
      () => statusSizeClasses[props.size] ?? statusSizeClasses.medium
    );
    const statusColorClass = computed(() => statusColorClasses[props.status] ?? "");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["relative rounded-full", sizeClass.value]
      }, _attrs))}><img${ssrRenderAttr("src", __props.src)}${ssrRenderAttr("alt", __props.alt)} class="h-full w-full object-cover rounded-full">`);
      if (__props.status !== "none") {
        _push(`<span class="${ssrRenderClass([[statusSizeClass.value, statusColorClass.value], "absolute bottom-0 right-0 rounded-full border-[1.5px] border-white dark:border-gray-900"])}"></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/Avatar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const avatarSrc = "/images/user/user-01.jpg";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$2
}, {
  __name: "Avatars",
  __ssrInlineRender: true,
  setup(__props) {
    const sizes = ["xsmall", "small", "medium", "large", "xlarge", "xxlarge"];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Avatars" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, { pageTitle: "Avatars" }, null, _parent));
      _push(`<div class="space-y-5 sm:space-y-6">`);
      _push(ssrRenderComponent(_sfc_main$4, { title: "Default Avatar" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col items-center justify-center gap-5 sm:flex-row"${_scopeId}><!--[-->`);
            ssrRenderList(sizes, (size) => {
              _push2(ssrRenderComponent(_sfc_main$1, {
                key: `default-${size}`,
                src: avatarSrc,
                size
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col items-center justify-center gap-5 sm:flex-row" }, [
                (openBlock(), createBlock(Fragment, null, renderList(sizes, (size) => {
                  return createVNode(_sfc_main$1, {
                    key: `default-${size}`,
                    src: avatarSrc,
                    size
                  }, null, 8, ["size"]);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$4, { title: "Avatar with online indicator" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col items-center justify-center gap-5 sm:flex-row"${_scopeId}><!--[-->`);
            ssrRenderList(sizes, (size) => {
              _push2(ssrRenderComponent(_sfc_main$1, {
                key: `online-${size}`,
                src: avatarSrc,
                size,
                status: "online"
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col items-center justify-center gap-5 sm:flex-row" }, [
                (openBlock(), createBlock(Fragment, null, renderList(sizes, (size) => {
                  return createVNode(_sfc_main$1, {
                    key: `online-${size}`,
                    src: avatarSrc,
                    size,
                    status: "online"
                  }, null, 8, ["size"]);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$4, { title: "Avatar with Offline indicator" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col items-center justify-center gap-5 sm:flex-row"${_scopeId}><!--[-->`);
            ssrRenderList(sizes, (size) => {
              _push2(ssrRenderComponent(_sfc_main$1, {
                key: `offline-${size}`,
                src: avatarSrc,
                size,
                status: "offline"
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col items-center justify-center gap-5 sm:flex-row" }, [
                (openBlock(), createBlock(Fragment, null, renderList(sizes, (size) => {
                  return createVNode(_sfc_main$1, {
                    key: `offline-${size}`,
                    src: avatarSrc,
                    size,
                    status: "offline"
                  }, null, 8, ["size"]);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$4, { title: "Avatar with busy indicator" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col items-center justify-center gap-5 sm:flex-row"${_scopeId}><!--[-->`);
            ssrRenderList(sizes, (size) => {
              _push2(ssrRenderComponent(_sfc_main$1, {
                key: `busy-${size}`,
                src: avatarSrc,
                size,
                status: "busy"
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col items-center justify-center gap-5 sm:flex-row" }, [
                (openBlock(), createBlock(Fragment, null, renderList(sizes, (size) => {
                  return createVNode(_sfc_main$1, {
                    key: `busy-${size}`,
                    src: avatarSrc,
                    size,
                    status: "busy"
                  }, null, 8, ["size"]);
                }), 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/UIElements/Avatars.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
