import { computed, mergeProps, useSSRContext, unref, withCtx, createVNode, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./AppLayout-DmZYFPyg.js";
import { _ as _sfc_main$4 } from "./ComponentCard-BwdxZ9h6.js";
import { _ as _sfc_main$3 } from "./PageBreadcrumb-ClrrUjmW.js";
import "./_plugin-vue_export-helper-Cbl_YQC7.js";
const _sfc_main$1 = {
  __name: "Alert",
  __ssrInlineRender: true,
  props: {
    variant: {
      type: String,
      default: "info"
    },
    title: {
      type: String,
      default: ""
    },
    message: {
      type: String,
      default: ""
    },
    showLink: {
      type: Boolean,
      default: false
    },
    linkHref: {
      type: String,
      default: "#"
    },
    linkText: {
      type: String,
      default: "Learn more"
    }
  },
  setup(__props) {
    const props = __props;
    const variantClasses = {
      success: {
        container: "border-green-500 bg-green-50 dark:border-green-500/30 dark:bg-green-500/15",
        icon: "text-green-500"
      },
      error: {
        container: "border-red-500 bg-red-50 dark:border-red-500/30 dark:bg-red-500/15",
        icon: "text-red-500"
      },
      warning: {
        container: "border-yellow-500 bg-yellow-50 dark:border-yellow-500/30 dark:bg-yellow-500/15",
        icon: "text-yellow-500"
      },
      info: {
        container: "border-blue-500 bg-blue-50 dark:border-blue-500/30 dark:bg-blue-500/15",
        icon: "text-blue-500"
      }
    };
    const icons = {
      success: `<svg class="fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.70186 12.0001C3.70186 7.41711 7.41711 3.70186 12.0001 3.70186C16.5831 3.70186 20.2984 7.41711 20.2984 12.0001C20.2984 16.5831 16.5831 20.2984 12.0001 20.2984C7.41711 20.2984 3.70186 16.5831 3.70186 12.0001ZM12.0001 1.90186C6.423 1.90186 1.90186 6.423 1.90186 12.0001C1.90186 17.5772 6.423 22.0984 12.0001 22.0984C17.5772 22.0984 22.0984 17.5772 22.0984 12.0001C22.0984 6.423 17.5772 1.90186 12.0001 1.90186ZM15.6197 10.7395C15.9712 10.388 15.9712 9.81819 15.6197 9.46672C15.2683 9.11525 14.6984 9.11525 14.347 9.46672L11.1894 12.6243L9.6533 11.0883C9.30183 10.7368 8.73198 10.7368 8.38051 11.0883C8.02904 11.4397 8.02904 12.0096 8.38051 12.3611L10.553 14.5335C10.7217 14.7023 10.9507 14.7971 11.1894 14.7971C11.428 14.7971 11.657 14.7023 11.8257 14.5335L15.6197 10.7395Z" fill=""></path>
      </svg>`,
      error: `<svg class="fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.6501 12.0001C3.6501 7.38852 7.38852 3.6501 12.0001 3.6501C16.6117 3.6501 20.3501 7.38852 20.3501 12.0001C20.3501 16.6117 16.6117 20.3501 12.0001 20.3501C7.38852 20.3501 3.6501 16.6117 3.6501 12.0001ZM12.0001 1.8501C6.39441 1.8501 1.8501 6.39441 1.8501 12.0001C1.8501 17.6058 6.39441 22.1501 12.0001 22.1501C17.6058 22.1501 22.1501 17.6058 22.1501 12.0001C22.1501 6.39441 17.6058 1.8501 12.0001 1.8501ZM10.9992 7.52517C10.9992 8.07746 11.4469 8.52517 11.9992 8.52517H12.0002C12.5525 8.52517 13.0002 8.07746 13.0002 7.52517C13.0002 6.97289 12.5525 6.52517 12.0002 6.52517H11.9992C11.4469 6.52517 10.9992 6.97289 10.9992 7.52517ZM12.0002 17.3715C11.586 17.3715 11.2502 17.0357 11.2502 16.6215V10.945C11.2502 10.5308 11.586 10.195 12.0002 10.195C12.4144 10.195 12.7502 10.5308 12.7502 10.945V16.6215C12.7502 17.0357 12.4144 17.3715 12.0002 17.3715Z" fill=""></path>
      </svg>`,
      warning: `<svg class="fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3499 12.0004C20.3499 16.612 16.6115 20.3504 11.9999 20.3504C7.38832 20.3504 3.6499 16.612 3.6499 12.0004C3.6499 7.38881 7.38833 3.65039 11.9999 3.65039C16.6115 3.65039 20.3499 7.38881 20.3499 12.0004ZM11.9999 22.1504C17.6056 22.1504 22.1499 17.6061 22.1499 12.0004C22.1499 6.3947 17.6056 1.85039 11.9999 1.85039C6.39421 1.85039 1.8499 6.3947 1.8499 12.0004C1.8499 17.6061 6.39421 22.1504 11.9999 22.1504ZM13.0008 16.4753C13.0008 15.923 12.5531 15.4753 12.0008 15.4753L11.9998 15.4753C11.4475 15.4753 10.9998 15.923 10.9998 16.4753C10.9998 17.0276 11.4475 17.4753 11.9998 17.4753L12.0008 17.4753C12.5531 17.4753 13.0008 17.0276 13.0008 16.4753ZM11.9998 6.62898C12.414 6.62898 12.7498 6.96476 12.7498 7.37898L12.7498 13.0555C12.7498 13.4697 12.414 13.8055 11.9998 13.8055C11.5856 13.8055 11.2498 13.4697 11.2498 13.0555L11.2498 7.37898C11.2498 6.96476 11.5856 6.62898 11.9998 6.62898Z" fill="#F04438"></path>
      </svg>`,
      info: `<svg class="fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.6501 11.9996C3.6501 7.38803 7.38852 3.64961 12.0001 3.64961C16.6117 3.64961 20.3501 7.38803 20.3501 11.9996C20.3501 16.6112 16.6117 20.3496 12.0001 20.3496C7.38852 20.3496 3.6501 16.6112 3.6501 11.9996ZM12.0001 1.84961C6.39441 1.84961 1.8501 6.39392 1.8501 11.9996C1.8501 17.6053 6.39441 22.1496 12.0001 22.1496C17.6058 22.1496 22.1501 17.6053 22.1501 11.9996C22.1501 6.39392 17.6058 1.84961 12.0001 1.84961ZM10.9992 7.52468C10.9992 8.07697 11.4469 8.52468 11.9992 8.52468H12.0002C12.5525 8.52468 13.0002 8.07697 13.0002 7.52468C13.0002 6.9724 12.5525 6.52468 12.0002 6.52468H11.9992C11.4469 6.52468 10.9992 6.9724 10.9992 7.52468ZM12.0002 17.371C11.586 17.371 11.2502 17.0352 11.2502 16.621V10.9445C11.2502 10.5303 11.586 10.1945 12.0002 10.1945C12.4144 10.1945 12.7502 10.5303 12.7502 10.9445V16.621C12.7502 17.0352 12.4144 17.371 12.0002 17.371Z" fill=""></path>
      </svg>`
    };
    const containerClass = computed(
      () => (variantClasses[props.variant] ?? variantClasses.info).container
    );
    const iconClass = computed(() => (variantClasses[props.variant] ?? variantClasses.info).icon);
    const icon = computed(() => icons[props.variant] ?? icons.info);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["rounded-xl border p-4", containerClass.value]
      }, _attrs))}><div class="flex items-start gap-3"><div class="${ssrRenderClass([iconClass.value, "-mt-0.5"])}">${icon.value ?? ""}</div><div class="flex-1">`);
      if (__props.title) {
        _push(`<h4 class="mb-1 text-sm font-semibold text-gray-800 dark:text-white/90">${ssrInterpolate(__props.title)}</h4>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.message) {
        _push(`<p class="text-sm text-gray-500 dark:text-gray-400">${ssrInterpolate(__props.message)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.showLink) {
        _push(`<a${ssrRenderAttr("href", __props.linkHref)} class="inline-block mt-3 text-sm font-medium text-gray-500 underline dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">${ssrInterpolate(__props.linkText)}</a>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/Alert.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$2
}, {
  __name: "Alerts",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Alerts" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, { pageTitle: "Alerts" }, null, _parent));
      _push(`<div class="space-y-5 sm:space-y-6">`);
      _push(ssrRenderComponent(_sfc_main$4, { title: "Success Alert" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              variant: "success",
              title: "Success Message",
              message: "Be cautious when performing this action.",
              "show-link": true,
              "link-href": "/",
              "link-text": "Learn more"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              variant: "success",
              title: "Success Message",
              message: "Be cautious when performing this action.",
              "show-link": false
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode(_sfc_main$1, {
                  variant: "success",
                  title: "Success Message",
                  message: "Be cautious when performing this action.",
                  "show-link": true,
                  "link-href": "/",
                  "link-text": "Learn more"
                }),
                createVNode(_sfc_main$1, {
                  variant: "success",
                  title: "Success Message",
                  message: "Be cautious when performing this action.",
                  "show-link": false
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$4, { title: "Warning Alert" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              variant: "warning",
              title: "Warning Message",
              message: "Be cautious when performing this action.",
              "show-link": true,
              "link-href": "/",
              "link-text": "Learn more"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              variant: "warning",
              title: "Warning Message",
              message: "Be cautious when performing this action.",
              "show-link": false
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode(_sfc_main$1, {
                  variant: "warning",
                  title: "Warning Message",
                  message: "Be cautious when performing this action.",
                  "show-link": true,
                  "link-href": "/",
                  "link-text": "Learn more"
                }),
                createVNode(_sfc_main$1, {
                  variant: "warning",
                  title: "Warning Message",
                  message: "Be cautious when performing this action.",
                  "show-link": false
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$4, { title: "Error Alert" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              variant: "error",
              title: "Error Message",
              message: "Be cautious when performing this action.",
              "show-link": true,
              "link-href": "/",
              "link-text": "Learn more"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              variant: "error",
              title: "Error Message",
              message: "Be cautious when performing this action.",
              "show-link": false
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode(_sfc_main$1, {
                  variant: "error",
                  title: "Error Message",
                  message: "Be cautious when performing this action.",
                  "show-link": true,
                  "link-href": "/",
                  "link-text": "Learn more"
                }),
                createVNode(_sfc_main$1, {
                  variant: "error",
                  title: "Error Message",
                  message: "Be cautious when performing this action.",
                  "show-link": false
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$4, { title: "Info Alert" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              variant: "info",
              title: "Info Message",
              message: "Be cautious when performing this action.",
              "show-link": true,
              "link-href": "/",
              "link-text": "Learn more"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              variant: "info",
              title: "Info Message",
              message: "Be cautious when performing this action.",
              "show-link": false
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode(_sfc_main$1, {
                  variant: "info",
                  title: "Info Message",
                  message: "Be cautious when performing this action.",
                  "show-link": true,
                  "link-href": "/",
                  "link-text": "Learn more"
                }),
                createVNode(_sfc_main$1, {
                  variant: "info",
                  title: "Info Message",
                  message: "Be cautious when performing this action.",
                  "show-link": false
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$4, { title: "Alert Variations" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              variant: "success",
              title: "Custom Content Alert"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="text-sm text-gray-500 dark:text-gray-400"${_scopeId2}> This alert uses <strong class="text-gray-900 dark:text-white"${_scopeId2}>custom slot content</strong> instead of the message prop. </p><ul class="mt-2 text-sm text-gray-500 dark:text-gray-400 list-disc list-inside"${_scopeId2}><li${_scopeId2}>You can add any HTML content</li><li${_scopeId2}>Including lists and formatting</li><li${_scopeId2}>Perfect for complex messages</li></ul>`);
                } else {
                  return [
                    createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400" }, [
                      createTextVNode(" This alert uses "),
                      createVNode("strong", { class: "text-gray-900 dark:text-white" }, "custom slot content"),
                      createTextVNode(" instead of the message prop. ")
                    ]),
                    createVNode("ul", { class: "mt-2 text-sm text-gray-500 dark:text-gray-400 list-disc list-inside" }, [
                      createVNode("li", null, "You can add any HTML content"),
                      createVNode("li", null, "Including lists and formatting"),
                      createVNode("li", null, "Perfect for complex messages")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              variant: "info",
              title: "Quick Info",
              message: "Sometimes you just need a simple message."
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              variant: "warning",
              title: "Important Notice",
              message: "This is a longer message that provides more detailed information about the warning. You should read this carefully before proceeding with your action.",
              "show-link": true,
              "link-href": "/docs",
              "link-text": "View documentation"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode(_sfc_main$1, {
                  variant: "success",
                  title: "Custom Content Alert"
                }, {
                  default: withCtx(() => [
                    createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400" }, [
                      createTextVNode(" This alert uses "),
                      createVNode("strong", { class: "text-gray-900 dark:text-white" }, "custom slot content"),
                      createTextVNode(" instead of the message prop. ")
                    ]),
                    createVNode("ul", { class: "mt-2 text-sm text-gray-500 dark:text-gray-400 list-disc list-inside" }, [
                      createVNode("li", null, "You can add any HTML content"),
                      createVNode("li", null, "Including lists and formatting"),
                      createVNode("li", null, "Perfect for complex messages")
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$1, {
                  variant: "info",
                  title: "Quick Info",
                  message: "Sometimes you just need a simple message."
                }),
                createVNode(_sfc_main$1, {
                  variant: "warning",
                  title: "Important Notice",
                  message: "This is a longer message that provides more detailed information about the warning. You should read this carefully before proceeding with your action.",
                  "show-link": true,
                  "link-href": "/docs",
                  "link-text": "View documentation"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$4, { title: "Real-World Examples" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              variant: "success",
              title: "Payment Successful"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="text-sm text-gray-500 dark:text-gray-400 mb-2"${_scopeId2}> Your payment of <strong class="text-gray-900 dark:text-white"${_scopeId2}>$99.00</strong> has been processed successfully. </p><div class="text-sm text-gray-500 dark:text-gray-400"${_scopeId2}><p${_scopeId2}><strong${_scopeId2}>Order ID:</strong> #TAILADMIN-0014</p><p${_scopeId2}><strong${_scopeId2}>Transaction ID:</strong> TXN-1234567890</p></div><a href="/orders" class="inline-block mt-3 text-sm font-medium text-green-600 dark:text-green-400 underline hover:text-green-700"${_scopeId2}> View Order Details </a>`);
                } else {
                  return [
                    createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400 mb-2" }, [
                      createTextVNode(" Your payment of "),
                      createVNode("strong", { class: "text-gray-900 dark:text-white" }, "$99.00"),
                      createTextVNode(" has been processed successfully. ")
                    ]),
                    createVNode("div", { class: "text-sm text-gray-500 dark:text-gray-400" }, [
                      createVNode("p", null, [
                        createVNode("strong", null, "Order ID:"),
                        createTextVNode(" #TAILADMIN-0014")
                      ]),
                      createVNode("p", null, [
                        createVNode("strong", null, "Transaction ID:"),
                        createTextVNode(" TXN-1234567890")
                      ])
                    ]),
                    createVNode("a", {
                      href: "/orders",
                      class: "inline-block mt-3 text-sm font-medium text-green-600 dark:text-green-400 underline hover:text-green-700"
                    }, " View Order Details ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              variant: "warning",
              title: "Your trial is ending soon",
              message: "Your 14-day trial will expire in 3 days. Upgrade now to continue using all features.",
              "show-link": true,
              "link-href": "/billing",
              "link-text": "Upgrade now"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              variant: "error",
              title: "Form Validation Failed"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<ul class="text-sm text-gray-500 dark:text-gray-400 list-disc list-inside space-y-1"${_scopeId2}><li${_scopeId2}>Email field is required</li><li${_scopeId2}>Password must be at least 8 characters</li><li${_scopeId2}>Please accept the terms and conditions</li></ul>`);
                } else {
                  return [
                    createVNode("ul", { class: "text-sm text-gray-500 dark:text-gray-400 list-disc list-inside space-y-1" }, [
                      createVNode("li", null, "Email field is required"),
                      createVNode("li", null, "Password must be at least 8 characters"),
                      createVNode("li", null, "Please accept the terms and conditions")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              variant: "info",
              title: "Scheduled Maintenance",
              message: "Our system will undergo maintenance on November 15, 2025 from 2:00 AM to 4:00 AM EST. Some features may be unavailable during this time.",
              "show-link": true,
              "link-href": "/status",
              "link-text": "Check status page"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode(_sfc_main$1, {
                  variant: "success",
                  title: "Payment Successful"
                }, {
                  default: withCtx(() => [
                    createVNode("p", { class: "text-sm text-gray-500 dark:text-gray-400 mb-2" }, [
                      createTextVNode(" Your payment of "),
                      createVNode("strong", { class: "text-gray-900 dark:text-white" }, "$99.00"),
                      createTextVNode(" has been processed successfully. ")
                    ]),
                    createVNode("div", { class: "text-sm text-gray-500 dark:text-gray-400" }, [
                      createVNode("p", null, [
                        createVNode("strong", null, "Order ID:"),
                        createTextVNode(" #TAILADMIN-0014")
                      ]),
                      createVNode("p", null, [
                        createVNode("strong", null, "Transaction ID:"),
                        createTextVNode(" TXN-1234567890")
                      ])
                    ]),
                    createVNode("a", {
                      href: "/orders",
                      class: "inline-block mt-3 text-sm font-medium text-green-600 dark:text-green-400 underline hover:text-green-700"
                    }, " View Order Details ")
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$1, {
                  variant: "warning",
                  title: "Your trial is ending soon",
                  message: "Your 14-day trial will expire in 3 days. Upgrade now to continue using all features.",
                  "show-link": true,
                  "link-href": "/billing",
                  "link-text": "Upgrade now"
                }),
                createVNode(_sfc_main$1, {
                  variant: "error",
                  title: "Form Validation Failed"
                }, {
                  default: withCtx(() => [
                    createVNode("ul", { class: "text-sm text-gray-500 dark:text-gray-400 list-disc list-inside space-y-1" }, [
                      createVNode("li", null, "Email field is required"),
                      createVNode("li", null, "Password must be at least 8 characters"),
                      createVNode("li", null, "Please accept the terms and conditions")
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$1, {
                  variant: "info",
                  title: "Scheduled Maintenance",
                  message: "Our system will undergo maintenance on November 15, 2025 from 2:00 AM to 4:00 AM EST. Some features may be unavailable during this time.",
                  "show-link": true,
                  "link-href": "/status",
                  "link-text": "Check status page"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/UIElements/Alerts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
