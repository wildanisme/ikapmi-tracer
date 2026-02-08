import { computed, mergeProps, useSSRContext, unref, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, openBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./AppLayout-DmZYFPyg.js";
import { _ as _sfc_main$4 } from "./ComponentCard-BwdxZ9h6.js";
import { _ as _sfc_main$3 } from "./PageBreadcrumb-ClrrUjmW.js";
import "./_plugin-vue_export-helper-Cbl_YQC7.js";
const baseStyles = "inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium capitalize";
const _sfc_main$1 = {
  __name: "Badge",
  __ssrInlineRender: true,
  props: {
    variant: {
      type: String,
      default: "light"
    },
    size: {
      type: String,
      default: "md"
    },
    color: {
      type: String,
      default: "primary"
    },
    startIcon: {
      type: String,
      default: null
    },
    endIcon: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    const sizeStyles = {
      sm: "text-xs",
      md: "text-sm"
    };
    const variants = {
      light: {
        primary: "bg-blue-50 text-blue-500 dark:bg-blue-500/15 dark:text-blue-400",
        success: "bg-green-50 text-green-600 dark:bg-green-500/15 dark:text-green-500",
        error: "bg-red-50 text-red-600 dark:bg-red-500/15 dark:text-red-500",
        warning: "bg-yellow-50 text-yellow-600 dark:bg-yellow-500/15 dark:text-orange-400",
        info: "bg-sky-50 text-sky-500 dark:bg-sky-500/15 dark:text-sky-500",
        light: "bg-gray-100 text-gray-700 dark:bg-white/5 dark:text-white/80",
        dark: "bg-gray-500 text-white dark:bg-white/5 dark:text-white"
      },
      solid: {
        primary: "bg-blue-500 text-white dark:text-white",
        success: "bg-green-500 text-white dark:text-white",
        error: "bg-red-500 text-white dark:text-white",
        warning: "bg-yellow-500 text-white dark:text-white",
        info: "bg-sky-500 text-white dark:text-white",
        light: "bg-gray-400 dark:bg-white/5 text-white dark:text-white/80",
        dark: "bg-gray-700 text-white dark:text-white"
      }
    };
    const sizeClass = computed(() => sizeStyles[props.size] ?? sizeStyles.md);
    const colorClass = computed(
      () => (variants[props.variant] ?? variants.light)[props.color] ?? variants.light.primary
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: [baseStyles, sizeClass.value, colorClass.value, _ctx.$attrs.class]
      }, _attrs))}>`);
      if (__props.startIcon) {
        _push(`<span>${__props.startIcon ?? ""}</span>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      if (__props.endIcon) {
        _push(`<span>${__props.endIcon ?? ""}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</span>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/Badge.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const plusIcon = `
    <svg class="fill-current" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.25012 3C5.25012 2.58579 5.58591 2.25 6.00012 2.25C6.41433 2.25 6.75012 2.58579 6.75012 3V5.25012L9.00034 5.25012C9.41455 5.25012 9.75034 5.58591 9.75034 6.00012C9.75034 6.41433 9.41455 6.75012 9.00034 6.75012H6.75012V9.00034C6.75012 9.41455 6.41433 9.75034 6.00012 9.75034C5.58591 9.75034 5.25012 9.41455 5.25012 9.00034L5.25012 6.75012H3C2.58579 6.75012 2.25 6.41433 2.25 6.00012C2.25 5.58591 2.58579 5.25012 3 5.25012H5.25012V3Z"
            fill=""
        />
    </svg>
`;
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$2
}, {
  __name: "Badges",
  __ssrInlineRender: true,
  setup(__props) {
    const colors = ["primary", "success", "error", "warning", "info", "light", "dark"];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Badges" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, { pageTitle: "Badges" }, null, _parent));
      _push(`<div class="space-y-5 sm:space-y-6">`);
      _push(ssrRenderComponent(_sfc_main$4, { title: "With Light Background" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap gap-4 sm:items-center sm:justify-center"${_scopeId}><!--[-->`);
            ssrRenderList(colors, (color) => {
              _push2(ssrRenderComponent(_sfc_main$1, {
                key: `light-${color}`,
                color
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(color)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(color), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap gap-4 sm:items-center sm:justify-center" }, [
                (openBlock(), createBlock(Fragment, null, renderList(colors, (color) => {
                  return createVNode(_sfc_main$1, {
                    key: `light-${color}`,
                    color
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(color), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"]);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$4, { title: "With Solid Background" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap gap-4 sm:items-center sm:justify-center"${_scopeId}><!--[-->`);
            ssrRenderList(colors, (color) => {
              _push2(ssrRenderComponent(_sfc_main$1, {
                key: `solid-${color}`,
                color,
                variant: "solid"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(color)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(color), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap gap-4 sm:items-center sm:justify-center" }, [
                (openBlock(), createBlock(Fragment, null, renderList(colors, (color) => {
                  return createVNode(_sfc_main$1, {
                    key: `solid-${color}`,
                    color,
                    variant: "solid"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(color), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"]);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$4, { title: "Light Background with Left Icon" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap gap-4 sm:items-center sm:justify-center"${_scopeId}><!--[-->`);
            ssrRenderList(colors, (color) => {
              _push2(ssrRenderComponent(_sfc_main$1, {
                key: `light-left-${color}`,
                color,
                "start-icon": plusIcon
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(color)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(color), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap gap-4 sm:items-center sm:justify-center" }, [
                (openBlock(), createBlock(Fragment, null, renderList(colors, (color) => {
                  return createVNode(_sfc_main$1, {
                    key: `light-left-${color}`,
                    color,
                    "start-icon": plusIcon
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(color), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"]);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$4, { title: "Solid Background with Left Icon" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap gap-4 sm:items-center sm:justify-center"${_scopeId}><!--[-->`);
            ssrRenderList(colors, (color) => {
              _push2(ssrRenderComponent(_sfc_main$1, {
                key: `solid-left-${color}`,
                color,
                variant: "solid",
                "start-icon": plusIcon
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(color)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(color), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap gap-4 sm:items-center sm:justify-center" }, [
                (openBlock(), createBlock(Fragment, null, renderList(colors, (color) => {
                  return createVNode(_sfc_main$1, {
                    key: `solid-left-${color}`,
                    color,
                    variant: "solid",
                    "start-icon": plusIcon
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(color), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"]);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$4, { title: "Light Background with Right Icon" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap gap-4 sm:items-center sm:justify-center"${_scopeId}><!--[-->`);
            ssrRenderList(colors, (color) => {
              _push2(ssrRenderComponent(_sfc_main$1, {
                key: `light-right-${color}`,
                color,
                "end-icon": plusIcon
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(color)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(color), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap gap-4 sm:items-center sm:justify-center" }, [
                (openBlock(), createBlock(Fragment, null, renderList(colors, (color) => {
                  return createVNode(_sfc_main$1, {
                    key: `light-right-${color}`,
                    color,
                    "end-icon": plusIcon
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(color), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"]);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$4, { title: "Solid Background with Right Icon" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap gap-4 sm:items-center sm:justify-center"${_scopeId}><!--[-->`);
            ssrRenderList(colors, (color) => {
              _push2(ssrRenderComponent(_sfc_main$1, {
                key: `solid-right-${color}`,
                color,
                variant: "solid",
                "end-icon": plusIcon
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(color)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(color), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap gap-4 sm:items-center sm:justify-center" }, [
                (openBlock(), createBlock(Fragment, null, renderList(colors, (color) => {
                  return createVNode(_sfc_main$1, {
                    key: `solid-right-${color}`,
                    color,
                    variant: "solid",
                    "end-icon": plusIcon
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(color), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"]);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/UIElements/Badges.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
