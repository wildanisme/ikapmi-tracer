import { useAttrs, computed, mergeProps, unref, useSSRContext, withCtx, createTextVNode, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./AppLayout-DmZYFPyg.js";
import { _ as _sfc_main$4 } from "./ComponentCard-BwdxZ9h6.js";
import { _ as _sfc_main$3 } from "./PageBreadcrumb-ClrrUjmW.js";
import "./_plugin-vue_export-helper-Cbl_YQC7.js";
const _sfc_main$1 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    size: {
      type: String,
      default: "md"
    },
    variant: {
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
    },
    className: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "button"
    }
  },
  setup(__props) {
    const props = __props;
    const attrs = useAttrs();
    const classes = computed(() => {
      const base = "inline-flex items-center justify-center font-medium gap-2 rounded-lg transition";
      const sizeMap = {
        sm: "px-4 py-3 text-sm",
        md: "px-5 py-3.5 text-sm"
      };
      const variantMap = {
        primary: "bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300",
        outline: "bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300"
      };
      const sizeClass = sizeMap[props.size] ?? sizeMap.md;
      const variantClass = variantMap[props.variant] ?? variantMap.primary;
      const disabledClass = props.disabled ? "cursor-not-allowed opacity-50" : "";
      return [base, sizeClass, variantClass, disabledClass].join(" ");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: __props.type,
        class: [classes.value, __props.className, _ctx.$attrs.class],
        disabled: __props.disabled
      }, unref(attrs), _attrs))}>`);
      if (__props.startIcon) {
        _push(`<span class="flex items-center">${__props.startIcon ?? ""}</span>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      if (__props.endIcon) {
        _push(`<span class="flex items-center">${__props.endIcon ?? ""}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/Button.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const boxIcon = `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.77692 3.24224C9.91768 3.17186 10.0834 3.17186 10.2241 3.24224L15.3713 5.81573L10.3359 8.33331C10.1248 8.43888 9.87626 8.43888 9.66512 8.33331L4.6298 5.81573L9.77692 3.24224ZM3.70264 7.0292V13.4124C3.70264 13.6018 3.80964 13.775 3.97903 13.8597L9.25016 16.4952L9.25016 9.7837C9.16327 9.75296 9.07782 9.71671 8.99432 9.67496L3.70264 7.0292ZM10.7502 16.4955V9.78396C10.8373 9.75316 10.923 9.71683 11.0067 9.67496L16.2984 7.0292V13.4124C16.2984 13.6018 16.1914 13.775 16.022 13.8597L10.7502 16.4955ZM9.41463 17.4831L9.10612 18.1002C9.66916 18.3817 10.3319 18.3817 10.8949 18.1002L16.6928 15.2013C17.3704 14.8625 17.7984 14.17 17.7984 13.4124V6.58831C17.7984 5.83076 17.3704 5.13823 16.6928 4.79945L10.8949 1.90059C10.3319 1.61908 9.66916 1.61907 9.10612 1.90059L9.44152 2.57141L9.10612 1.90059L3.30823 4.79945C2.63065 5.13823 2.20264 5.83076 2.20264 6.58831V13.4124C2.20264 14.17 2.63065 14.8625 3.30823 15.2013L9.10612 18.1002L9.41463 17.4831Z"
            fill="currentColor"
        />
    </svg>
`;
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$2
}, {
  __name: "Buttons",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Buttons" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, { pageTitle: "Buttons" }, null, _parent));
      _push(`<div class="space-y-5 sm:space-y-6">`);
      _push(ssrRenderComponent(_sfc_main$4, { title: "Primary Button" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              size: "sm",
              variant: "primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Button Text`);
                } else {
                  return [
                    createTextVNode("Button Text")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              size: "md",
              variant: "primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Button Text`);
                } else {
                  return [
                    createTextVNode("Button Text")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-5" }, [
                createVNode(_sfc_main$1, {
                  size: "sm",
                  variant: "primary"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Button Text")
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$1, {
                  size: "md",
                  variant: "primary"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Button Text")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$4, { title: "Primary Button with Left Icon" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              size: "sm",
              variant: "primary",
              "start-icon": boxIcon
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Button Text`);
                } else {
                  return [
                    createTextVNode("Button Text")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              size: "md",
              variant: "primary",
              "start-icon": boxIcon
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Button Text`);
                } else {
                  return [
                    createTextVNode("Button Text")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-5" }, [
                createVNode(_sfc_main$1, {
                  size: "sm",
                  variant: "primary",
                  "start-icon": boxIcon
                }, {
                  default: withCtx(() => [
                    createTextVNode("Button Text")
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$1, {
                  size: "md",
                  variant: "primary",
                  "start-icon": boxIcon
                }, {
                  default: withCtx(() => [
                    createTextVNode("Button Text")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$4, { title: "Primary Button with Right Icon" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              size: "sm",
              variant: "primary",
              "end-icon": boxIcon
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Button Text`);
                } else {
                  return [
                    createTextVNode("Button Text")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              size: "md",
              variant: "primary",
              "end-icon": boxIcon
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Button Text`);
                } else {
                  return [
                    createTextVNode("Button Text")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-5" }, [
                createVNode(_sfc_main$1, {
                  size: "sm",
                  variant: "primary",
                  "end-icon": boxIcon
                }, {
                  default: withCtx(() => [
                    createTextVNode("Button Text")
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$1, {
                  size: "md",
                  variant: "primary",
                  "end-icon": boxIcon
                }, {
                  default: withCtx(() => [
                    createTextVNode("Button Text")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$4, { title: "Outline Button" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              size: "sm",
              variant: "outline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Button Text`);
                } else {
                  return [
                    createTextVNode("Button Text")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              size: "md",
              variant: "outline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Button Text`);
                } else {
                  return [
                    createTextVNode("Button Text")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-5" }, [
                createVNode(_sfc_main$1, {
                  size: "sm",
                  variant: "outline"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Button Text")
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$1, {
                  size: "md",
                  variant: "outline"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Button Text")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$4, { title: "Outline Button with Left Icon" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              size: "sm",
              variant: "outline",
              "start-icon": boxIcon
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Button Text`);
                } else {
                  return [
                    createTextVNode("Button Text")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              size: "md",
              variant: "outline",
              "start-icon": boxIcon
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Button Text`);
                } else {
                  return [
                    createTextVNode("Button Text")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-5" }, [
                createVNode(_sfc_main$1, {
                  size: "sm",
                  variant: "outline",
                  "start-icon": boxIcon
                }, {
                  default: withCtx(() => [
                    createTextVNode("Button Text")
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$1, {
                  size: "md",
                  variant: "outline",
                  "start-icon": boxIcon
                }, {
                  default: withCtx(() => [
                    createTextVNode("Button Text")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$4, { title: "Outline Button with Right Icon" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              size: "sm",
              variant: "outline",
              "end-icon": boxIcon
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Button Text`);
                } else {
                  return [
                    createTextVNode("Button Text")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              size: "md",
              variant: "outline",
              "end-icon": boxIcon
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Button Text`);
                } else {
                  return [
                    createTextVNode("Button Text")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-5" }, [
                createVNode(_sfc_main$1, {
                  size: "sm",
                  variant: "outline",
                  "end-icon": boxIcon
                }, {
                  default: withCtx(() => [
                    createTextVNode("Button Text")
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$1, {
                  size: "md",
                  variant: "outline",
                  "end-icon": boxIcon
                }, {
                  default: withCtx(() => [
                    createTextVNode("Button Text")
                  ]),
                  _: 1
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/UIElements/Buttons.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
