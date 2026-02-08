import { ref, mergeProps, withCtx, createVNode, createTextVNode, withDirectives, vModelCheckbox, createBlock, openBlock, useSSRContext, onMounted, onBeforeUnmount, unref, createCommentVNode, withModifiers, Fragment, renderList, toDisplayString, reactive, vModelSelect, vModelText } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrLooseEqual, ssrRenderStyle } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { u as useClickOutside, _ as _sfc_main$e } from "./AppLayout-DmZYFPyg.js";
import { _ as _sfc_main$f } from "./PageBreadcrumb-ClrrUjmW.js";
import { _ as _sfc_main$d } from "./ComponentCard-BwdxZ9h6.js";
import flatpickr from "flatpickr";
import "./_plugin-vue_export-helper-Cbl_YQC7.js";
const _sfc_main$c = {
  __name: "CheckboxComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const checkboxOne = ref(false);
    const checkboxTwo = ref(true);
    const checkboxThree = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$d, mergeProps({ title: "Checkboxes" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap items-center gap-8"${_scopeId}><label class="flex cursor-pointer items-center text-sm font-medium text-gray-700 select-none dark:text-gray-400"${_scopeId}><div class="relative"${_scopeId}><input type="checkbox" class="sr-only"${ssrIncludeBooleanAttr(Array.isArray(checkboxOne.value) ? ssrLooseContain(checkboxOne.value, null) : checkboxOne.value) ? " checked" : ""}${_scopeId}><div class="${ssrRenderClass([checkboxOne.value ? "border-brand-500 bg-brand-500" : "bg-transparent border-gray-300 dark:border-gray-700", "hover:border-brand-500 dark:hover:border-brand-500 mr-3 flex h-5 w-5 items-center justify-center rounded-md border-[1.25px]"])}"${_scopeId}><span class="${ssrRenderClass(checkboxOne.value ? "" : "opacity-0")}"${_scopeId}><svg width="14" height="14" viewBox="0 0 14 14" fill="none"${_scopeId}><path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="white" stroke-width="1.94437" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></span></div></div> Default </label><label class="flex cursor-pointer items-center text-sm font-medium text-gray-700 select-none dark:text-gray-400"${_scopeId}><div class="relative"${_scopeId}><input type="checkbox" class="sr-only"${ssrIncludeBooleanAttr(Array.isArray(checkboxTwo.value) ? ssrLooseContain(checkboxTwo.value, null) : checkboxTwo.value) ? " checked" : ""}${_scopeId}><div class="${ssrRenderClass([checkboxTwo.value ? "border-brand-500 bg-brand-500" : "bg-transparent border-gray-300 dark:border-gray-700", "hover:border-brand-500 dark:hover:border-brand-500 mr-3 flex h-5 w-5 items-center justify-center rounded-md border-[1.25px]"])}"${_scopeId}><span class="${ssrRenderClass(checkboxTwo.value ? "" : "opacity-0")}"${_scopeId}><svg width="14" height="14" viewBox="0 0 14 14" fill="none"${_scopeId}><path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="white" stroke-width="1.94437" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></span></div></div> Checked </label><label class="flex cursor-pointer items-center text-sm font-medium text-gray-300 select-none dark:text-gray-700"${_scopeId}><div class="relative"${_scopeId}><input type="checkbox" class="sr-only"${ssrIncludeBooleanAttr(Array.isArray(checkboxThree.value) ? ssrLooseContain(checkboxThree.value, null) : checkboxThree.value) ? " checked" : ""} disabled${_scopeId}><div class="${ssrRenderClass([checkboxThree.value ? "bg-transparent border-gray-200 dark:border-gray-800" : "border-brand-500 bg-brand-500", "mr-3 flex h-5 w-5 items-center justify-center rounded-md border-[1.25px]"])}"${_scopeId}><span class="${ssrRenderClass(checkboxThree.value ? "" : "opacity-0")}"${_scopeId}><svg class="stroke-gray-200 dark:stroke-gray-800" width="14" height="14" viewBox="0 0 14 14" fill="none"${_scopeId}><path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></span></div></div> Disabled </label></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap items-center gap-8" }, [
                createVNode("label", { class: "flex cursor-pointer items-center text-sm font-medium text-gray-700 select-none dark:text-gray-400" }, [
                  createVNode("div", { class: "relative" }, [
                    withDirectives(createVNode("input", {
                      type: "checkbox",
                      class: "sr-only",
                      "onUpdate:modelValue": ($event) => checkboxOne.value = $event
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelCheckbox, checkboxOne.value]
                    ]),
                    createVNode("div", {
                      class: ["hover:border-brand-500 dark:hover:border-brand-500 mr-3 flex h-5 w-5 items-center justify-center rounded-md border-[1.25px]", checkboxOne.value ? "border-brand-500 bg-brand-500" : "bg-transparent border-gray-300 dark:border-gray-700"]
                    }, [
                      createVNode("span", {
                        class: checkboxOne.value ? "" : "opacity-0"
                      }, [
                        (openBlock(), createBlock("svg", {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 14 14",
                          fill: "none"
                        }, [
                          createVNode("path", {
                            d: "M11.6666 3.5L5.24992 9.91667L2.33325 7",
                            stroke: "white",
                            "stroke-width": "1.94437",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          })
                        ]))
                      ], 2)
                    ], 2)
                  ]),
                  createTextVNode(" Default ")
                ]),
                createVNode("label", { class: "flex cursor-pointer items-center text-sm font-medium text-gray-700 select-none dark:text-gray-400" }, [
                  createVNode("div", { class: "relative" }, [
                    withDirectives(createVNode("input", {
                      type: "checkbox",
                      class: "sr-only",
                      "onUpdate:modelValue": ($event) => checkboxTwo.value = $event
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelCheckbox, checkboxTwo.value]
                    ]),
                    createVNode("div", {
                      class: ["hover:border-brand-500 dark:hover:border-brand-500 mr-3 flex h-5 w-5 items-center justify-center rounded-md border-[1.25px]", checkboxTwo.value ? "border-brand-500 bg-brand-500" : "bg-transparent border-gray-300 dark:border-gray-700"]
                    }, [
                      createVNode("span", {
                        class: checkboxTwo.value ? "" : "opacity-0"
                      }, [
                        (openBlock(), createBlock("svg", {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 14 14",
                          fill: "none"
                        }, [
                          createVNode("path", {
                            d: "M11.6666 3.5L5.24992 9.91667L2.33325 7",
                            stroke: "white",
                            "stroke-width": "1.94437",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          })
                        ]))
                      ], 2)
                    ], 2)
                  ]),
                  createTextVNode(" Checked ")
                ]),
                createVNode("label", { class: "flex cursor-pointer items-center text-sm font-medium text-gray-300 select-none dark:text-gray-700" }, [
                  createVNode("div", { class: "relative" }, [
                    withDirectives(createVNode("input", {
                      type: "checkbox",
                      class: "sr-only",
                      "onUpdate:modelValue": ($event) => checkboxThree.value = $event,
                      disabled: ""
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelCheckbox, checkboxThree.value]
                    ]),
                    createVNode("div", {
                      class: ["mr-3 flex h-5 w-5 items-center justify-center rounded-md border-[1.25px]", checkboxThree.value ? "bg-transparent border-gray-200 dark:border-gray-800" : "border-brand-500 bg-brand-500"]
                    }, [
                      createVNode("span", {
                        class: checkboxThree.value ? "" : "opacity-0"
                      }, [
                        (openBlock(), createBlock("svg", {
                          class: "stroke-gray-200 dark:stroke-gray-800",
                          width: "14",
                          height: "14",
                          viewBox: "0 0 14 14",
                          fill: "none"
                        }, [
                          createVNode("path", {
                            d: "M11.6666 3.5L5.24992 9.91667L2.33325 7",
                            stroke: "",
                            "stroke-width": "2.33333",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          })
                        ]))
                      ], 2)
                    ], 2)
                  ]),
                  createTextVNode(" Disabled ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/form/form-elements/CheckboxComponent.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = {
  __name: "DatePicker",
  __ssrInlineRender: true,
  props: {
    id: {
      type: String,
      default: () => `datepicker-${Math.random().toString(36).slice(2)}`
    },
    mode: {
      type: String,
      default: "single"
    },
    defaultDate: {
      type: [String, Array],
      default: null
    },
    label: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: "Select date"
    },
    name: {
      type: String,
      default: null
    },
    dateFormat: {
      type: String,
      default: "Y-m-d"
    }
  },
  emits: ["date-change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const dateInput = ref(null);
    let flatpickrInstance = null;
    onMounted(() => {
      if (!dateInput.value) {
        return;
      }
      flatpickrInstance = flatpickr(dateInput.value, {
        mode: props.mode,
        static: true,
        monthSelectorType: "static",
        dateFormat: props.dateFormat,
        defaultDate: props.defaultDate,
        onChange: (selectedDates, dateStr, instance) => {
          emit("date-change", { selectedDates, dateStr, instance });
        }
      });
    });
    onBeforeUnmount(() => {
      if (flatpickrInstance) {
        flatpickrInstance.destroy();
        flatpickrInstance = null;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.label) {
        _push(`<label${ssrRenderAttr("for", __props.id)} class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">${ssrInterpolate(__props.label)}</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="relative custom-datepicker"><input${ssrRenderAttr("id", __props.id)}${ssrRenderAttr("name", __props.name)} type="text"${ssrRenderAttr("placeholder", __props.placeholder)} class="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:focus:border-brand-800" autocomplete="off"><span class="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" class="size-6"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 2C8.41421 2 8.75 2.33579 8.75 2.75V3.75H15.25V2.75C15.25 2.33579 15.5858 2 16 2C16.4142 2 16.75 2.33579 16.75 2.75V3.75H18.5C19.7426 3.75 20.75 4.75736 20.75 6V9V19C20.75 20.2426 19.7426 21.25 18.5 21.25H5.5C4.25736 21.25 3.25 20.2426 3.25 19V9V6C3.25 4.75736 4.25736 3.75 5.5 3.75H7.25V2.75C7.25 2.33579 7.58579 2 8 2ZM8 5.25H5.5C5.08579 5.25 4.75 5.58579 4.75 6V8.25H19.25V6C19.25 5.58579 18.9142 5.25 18.5 5.25H16H8ZM19.25 9.75H4.75V19C4.75 19.4142 5.08579 19.75 5.5 19.75H18.5C18.9142 19.75 19.25 19.4142 19.25 19V9.75Z" fill="currentColor"></path></svg></span></div></div>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/form/DatePicker.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
  __name: "DefaultInputs",
  __ssrInlineRender: true,
  setup(__props) {
    const isOptionSelected = ref(false);
    const showPassword = ref(false);
    const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$d, mergeProps({ title: "Default Inputs" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"${_scopeId}>Input</label><input type="text" class="dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"${_scopeId}></div><div${_scopeId}><label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"${_scopeId}> Input with Placeholder </label><input type="text" placeholder="info@gmail.com" class="dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"${_scopeId}></div><div${_scopeId}><label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"${_scopeId}> Select Input </label><div class="relative z-20 bg-transparent"${_scopeId}><select class="${ssrRenderClass([isOptionSelected.value ? "text-gray-800 dark:text-white/90" : "", "dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"])}"${_scopeId}><option value="" class="text-gray-700 dark:bg-gray-900 dark:text-gray-400"${_scopeId}> Select Option </option><option value="" class="text-gray-700 dark:bg-gray-900 dark:text-gray-400"${_scopeId}> Marketing </option><option value="" class="text-gray-700 dark:bg-gray-900 dark:text-gray-400"${_scopeId}> Template </option><option value="" class="text-gray-700 dark:bg-gray-900 dark:text-gray-400"${_scopeId}> Development </option></select><span class="pointer-events-none absolute top-1/2 right-4 z-30 -translate-y-1/2 text-gray-500 dark:text-gray-400"${_scopeId}><svg class="stroke-current" width="20" height="20" viewBox="0 0 20 20" fill="none"${_scopeId}><path d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></span></div></div><div${_scopeId}><label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"${_scopeId}> Password Input </label><div class="relative"${_scopeId}><input${ssrRenderAttr("type", showPassword.value ? "text" : "password")} placeholder="Enter your password" class="dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 pl-4 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"${_scopeId}><span class="absolute top-1/2 right-4 z-30 -translate-y-1/2 cursor-pointer"${_scopeId}>`);
            if (!showPassword.value) {
              _push2(`<svg class="fill-gray-500 dark:fill-gray-400" width="20" height="20" viewBox="0 0 20 20" fill="none"${_scopeId}><path fill-rule="evenodd" clip-rule="evenodd" d="M10.0002 13.8619C7.23361 13.8619 4.86803 12.1372 3.92328 9.70241C4.86804 7.26761 7.23361 5.54297 10.0002 5.54297C12.7667 5.54297 15.1323 7.26762 16.0771 9.70243C15.1323 12.1372 12.7667 13.8619 10.0002 13.8619ZM10.0002 4.04297C6.48191 4.04297 3.49489 6.30917 2.4155 9.4593C2.3615 9.61687 2.3615 9.78794 2.41549 9.94552C3.49488 13.0957 6.48191 15.3619 10.0002 15.3619C13.5184 15.3619 16.5055 13.0957 17.5849 9.94555C17.6389 9.78797 17.6389 9.6169 17.5849 9.45932C16.5055 6.30919 13.5184 4.04297 10.0002 4.04297ZM9.99151 7.84413C8.96527 7.84413 8.13333 8.67606 8.13333 9.70231C8.13333 10.7286 8.96527 11.5605 9.99151 11.5605H10.0064C11.0326 11.5605 11.8646 10.7286 11.8646 9.70231C11.8646 8.67606 11.0326 7.84413 10.0064 7.84413H9.99151Z"${_scopeId}></path></svg>`);
            } else {
              _push2(`<svg class="fill-gray-500 dark:fill-gray-400" width="20" height="20" viewBox="0 0 20 20" fill="none"${_scopeId}><path fill-rule="evenodd" clip-rule="evenodd" d="M4.63803 3.57709C4.34513 3.2842 3.87026 3.2842 3.57737 3.57709C3.28447 3.86999 3.28447 4.34486 3.57737 4.63775L4.85323 5.91362C3.74609 6.84199 2.89363 8.06395 2.4155 9.45936C2.3615 9.61694 2.3615 9.78801 2.41549 9.94558C3.49488 13.0957 6.48191 15.3619 10.0002 15.3619C11.255 15.3619 12.4422 15.0737 13.4994 14.5598L15.3625 16.4229C15.6554 16.7158 16.1302 16.7158 16.4231 16.4229C16.716 16.13 16.716 15.6551 16.4231 15.3622L4.63803 3.57709ZM12.3608 13.4212L10.4475 11.5079C10.3061 11.5423 10.1584 11.5606 10.0064 11.5606H9.99151C8.96527 11.5606 8.13333 10.7286 8.13333 9.70237C8.13333 9.5461 8.15262 9.39434 8.18895 9.24933L5.91885 6.97923C5.03505 7.69015 4.34057 8.62704 3.92328 9.70247C4.86803 12.1373 7.23361 13.8619 10.0002 13.8619C10.8326 13.8619 11.6287 13.7058 12.3608 13.4212ZM16.0771 9.70249C15.7843 10.4569 15.3552 11.1432 14.8199 11.7311L15.8813 12.7925C16.6329 11.9813 17.2187 11.0143 17.5849 9.94561C17.6389 9.78803 17.6389 9.61696 17.5849 9.45938C16.5055 6.30925 13.5184 4.04303 10.0002 4.04303C9.13525 4.04303 8.30244 4.17999 7.52218 4.43338L8.75139 5.66259C9.1556 5.58413 9.57311 5.54303 10.0002 5.54303C12.7667 5.54303 15.1323 7.26768 16.0771 9.70249Z"${_scopeId}></path></svg>`);
            }
            _push2(`</span></div></div><div${_scopeId}><label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"${_scopeId}> Date Picker Input </label>`);
            _push2(ssrRenderComponent(_sfc_main$b, {
              id: "date_pick",
              name: "date_pick",
              placeholder: "Date Picker",
              "default-date": unref(today)
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"${_scopeId}> Time Select Input </label><div class="relative"${_scopeId}><input type="time" placeholder="12:00 AM" onclick="this.showPicker()" class="dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 pl-4 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"${_scopeId}><span class="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 dark:text-gray-400"${_scopeId}><svg class="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none"${_scopeId}><path fill-rule="evenodd" clip-rule="evenodd" d="M3.04175 9.99984C3.04175 6.15686 6.1571 3.0415 10.0001 3.0415C13.8431 3.0415 16.9584 6.15686 16.9584 9.99984C16.9584 13.8428 13.8431 16.9582 10.0001 16.9582C6.1571 16.9582 3.04175 13.8428 3.04175 9.99984ZM10.0001 1.5415C5.32867 1.5415 1.54175 5.32843 1.54175 9.99984C1.54175 14.6712 5.32867 18.4582 10.0001 18.4582C14.6715 18.4582 18.4584 14.6712 18.4584 9.99984C18.4584 5.32843 14.6715 1.5415 10.0001 1.5415ZM9.99998 10.7498C9.58577 10.7498 9.24998 10.4141 9.24998 9.99984V5.4165C9.24998 5.00229 9.58577 4.6665 9.99998 4.6665C10.4142 4.6665 10.75 5.00229 10.75 5.4165V9.24984H13.3334C13.7476 9.24984 14.0834 9.58562 14.0834 9.99984C14.0834 10.4141 13.7476 10.7498 13.3334 10.7498H10.0001H9.99998Z" fill=""${_scopeId}></path></svg></span></div></div><div${_scopeId}><label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"${_scopeId}> Input with Payment </label><div class="relative"${_scopeId}><input type="text" placeholder="Card number" class="dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pl-[62px] text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"${_scopeId}><span class="absolute top-1/2 left-0 flex h-11 w-[46px] -translate-y-1/2 items-center justify-center border-r border-gray-200 dark:border-gray-800"${_scopeId}><svg width="20" height="20" viewBox="0 0 20 20" fill="none"${_scopeId}><circle cx="6.25" cy="10" r="5.625" fill="#E80B26"${_scopeId}></circle><circle cx="13.75" cy="10" r="5.625" fill="#F59D31"${_scopeId}></circle><path d="M10 14.1924C11.1508 13.1625 11.875 11.6657 11.875 9.99979C11.875 8.33383 11.1508 6.8371 10 5.80713C8.84918 6.8371 8.125 8.33383 8.125 9.99979C8.125 11.6657 8.84918 13.1625 10 14.1924Z" fill="#FC6020"${_scopeId}></path></svg></span></div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("label", { class: "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400" }, "Input"),
                createVNode("input", {
                  type: "text",
                  class: "dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"
                })
              ]),
              createVNode("div", null, [
                createVNode("label", { class: "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400" }, " Input with Placeholder "),
                createVNode("input", {
                  type: "text",
                  placeholder: "info@gmail.com",
                  class: "dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"
                })
              ]),
              createVNode("div", null, [
                createVNode("label", { class: "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400" }, " Select Input "),
                createVNode("div", { class: "relative z-20 bg-transparent" }, [
                  createVNode("select", {
                    class: ["dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30", isOptionSelected.value ? "text-gray-800 dark:text-white/90" : ""],
                    onChange: ($event) => isOptionSelected.value = true
                  }, [
                    createVNode("option", {
                      value: "",
                      class: "text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                    }, " Select Option "),
                    createVNode("option", {
                      value: "",
                      class: "text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                    }, " Marketing "),
                    createVNode("option", {
                      value: "",
                      class: "text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                    }, " Template "),
                    createVNode("option", {
                      value: "",
                      class: "text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                    }, " Development ")
                  ], 42, ["onChange"]),
                  createVNode("span", { class: "pointer-events-none absolute top-1/2 right-4 z-30 -translate-y-1/2 text-gray-500 dark:text-gray-400" }, [
                    (openBlock(), createBlock("svg", {
                      class: "stroke-current",
                      width: "20",
                      height: "20",
                      viewBox: "0 0 20 20",
                      fill: "none"
                    }, [
                      createVNode("path", {
                        d: "M4.79175 7.396L10.0001 12.6043L15.2084 7.396",
                        stroke: "",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ])
                ])
              ]),
              createVNode("div", null, [
                createVNode("label", { class: "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400" }, " Password Input "),
                createVNode("div", { class: "relative" }, [
                  createVNode("input", {
                    type: showPassword.value ? "text" : "password",
                    placeholder: "Enter your password",
                    class: "dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 pl-4 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"
                  }, null, 8, ["type"]),
                  createVNode("span", {
                    class: "absolute top-1/2 right-4 z-30 -translate-y-1/2 cursor-pointer",
                    onClick: ($event) => showPassword.value = !showPassword.value
                  }, [
                    !showPassword.value ? (openBlock(), createBlock("svg", {
                      key: 0,
                      class: "fill-gray-500 dark:fill-gray-400",
                      width: "20",
                      height: "20",
                      viewBox: "0 0 20 20",
                      fill: "none"
                    }, [
                      createVNode("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M10.0002 13.8619C7.23361 13.8619 4.86803 12.1372 3.92328 9.70241C4.86804 7.26761 7.23361 5.54297 10.0002 5.54297C12.7667 5.54297 15.1323 7.26762 16.0771 9.70243C15.1323 12.1372 12.7667 13.8619 10.0002 13.8619ZM10.0002 4.04297C6.48191 4.04297 3.49489 6.30917 2.4155 9.4593C2.3615 9.61687 2.3615 9.78794 2.41549 9.94552C3.49488 13.0957 6.48191 15.3619 10.0002 15.3619C13.5184 15.3619 16.5055 13.0957 17.5849 9.94555C17.6389 9.78797 17.6389 9.6169 17.5849 9.45932C16.5055 6.30919 13.5184 4.04297 10.0002 4.04297ZM9.99151 7.84413C8.96527 7.84413 8.13333 8.67606 8.13333 9.70231C8.13333 10.7286 8.96527 11.5605 9.99151 11.5605H10.0064C11.0326 11.5605 11.8646 10.7286 11.8646 9.70231C11.8646 8.67606 11.0326 7.84413 10.0064 7.84413H9.99151Z"
                      })
                    ])) : (openBlock(), createBlock("svg", {
                      key: 1,
                      class: "fill-gray-500 dark:fill-gray-400",
                      width: "20",
                      height: "20",
                      viewBox: "0 0 20 20",
                      fill: "none"
                    }, [
                      createVNode("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M4.63803 3.57709C4.34513 3.2842 3.87026 3.2842 3.57737 3.57709C3.28447 3.86999 3.28447 4.34486 3.57737 4.63775L4.85323 5.91362C3.74609 6.84199 2.89363 8.06395 2.4155 9.45936C2.3615 9.61694 2.3615 9.78801 2.41549 9.94558C3.49488 13.0957 6.48191 15.3619 10.0002 15.3619C11.255 15.3619 12.4422 15.0737 13.4994 14.5598L15.3625 16.4229C15.6554 16.7158 16.1302 16.7158 16.4231 16.4229C16.716 16.13 16.716 15.6551 16.4231 15.3622L4.63803 3.57709ZM12.3608 13.4212L10.4475 11.5079C10.3061 11.5423 10.1584 11.5606 10.0064 11.5606H9.99151C8.96527 11.5606 8.13333 10.7286 8.13333 9.70237C8.13333 9.5461 8.15262 9.39434 8.18895 9.24933L5.91885 6.97923C5.03505 7.69015 4.34057 8.62704 3.92328 9.70247C4.86803 12.1373 7.23361 13.8619 10.0002 13.8619C10.8326 13.8619 11.6287 13.7058 12.3608 13.4212ZM16.0771 9.70249C15.7843 10.4569 15.3552 11.1432 14.8199 11.7311L15.8813 12.7925C16.6329 11.9813 17.2187 11.0143 17.5849 9.94561C17.6389 9.78803 17.6389 9.61696 17.5849 9.45938C16.5055 6.30925 13.5184 4.04303 10.0002 4.04303C9.13525 4.04303 8.30244 4.17999 7.52218 4.43338L8.75139 5.66259C9.1556 5.58413 9.57311 5.54303 10.0002 5.54303C12.7667 5.54303 15.1323 7.26768 16.0771 9.70249Z"
                      })
                    ]))
                  ], 8, ["onClick"])
                ])
              ]),
              createVNode("div", null, [
                createVNode("label", { class: "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400" }, " Date Picker Input "),
                createVNode(_sfc_main$b, {
                  id: "date_pick",
                  name: "date_pick",
                  placeholder: "Date Picker",
                  "default-date": unref(today)
                }, null, 8, ["default-date"])
              ]),
              createVNode("div", null, [
                createVNode("label", { class: "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400" }, " Time Select Input "),
                createVNode("div", { class: "relative" }, [
                  createVNode("input", {
                    type: "time",
                    placeholder: "12:00 AM",
                    onclick: "this.showPicker()",
                    class: "dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 pl-4 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"
                  }),
                  createVNode("span", { class: "absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 dark:text-gray-400" }, [
                    (openBlock(), createBlock("svg", {
                      class: "fill-current",
                      width: "20",
                      height: "20",
                      viewBox: "0 0 20 20",
                      fill: "none"
                    }, [
                      createVNode("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M3.04175 9.99984C3.04175 6.15686 6.1571 3.0415 10.0001 3.0415C13.8431 3.0415 16.9584 6.15686 16.9584 9.99984C16.9584 13.8428 13.8431 16.9582 10.0001 16.9582C6.1571 16.9582 3.04175 13.8428 3.04175 9.99984ZM10.0001 1.5415C5.32867 1.5415 1.54175 5.32843 1.54175 9.99984C1.54175 14.6712 5.32867 18.4582 10.0001 18.4582C14.6715 18.4582 18.4584 14.6712 18.4584 9.99984C18.4584 5.32843 14.6715 1.5415 10.0001 1.5415ZM9.99998 10.7498C9.58577 10.7498 9.24998 10.4141 9.24998 9.99984V5.4165C9.24998 5.00229 9.58577 4.6665 9.99998 4.6665C10.4142 4.6665 10.75 5.00229 10.75 5.4165V9.24984H13.3334C13.7476 9.24984 14.0834 9.58562 14.0834 9.99984C14.0834 10.4141 13.7476 10.7498 13.3334 10.7498H10.0001H9.99998Z",
                        fill: ""
                      })
                    ]))
                  ])
                ])
              ]),
              createVNode("div", null, [
                createVNode("label", { class: "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400" }, " Input with Payment "),
                createVNode("div", { class: "relative" }, [
                  createVNode("input", {
                    type: "text",
                    placeholder: "Card number",
                    class: "dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pl-[62px] text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"
                  }),
                  createVNode("span", { class: "absolute top-1/2 left-0 flex h-11 w-[46px] -translate-y-1/2 items-center justify-center border-r border-gray-200 dark:border-gray-800" }, [
                    (openBlock(), createBlock("svg", {
                      width: "20",
                      height: "20",
                      viewBox: "0 0 20 20",
                      fill: "none"
                    }, [
                      createVNode("circle", {
                        cx: "6.25",
                        cy: "10",
                        r: "5.625",
                        fill: "#E80B26"
                      }),
                      createVNode("circle", {
                        cx: "13.75",
                        cy: "10",
                        r: "5.625",
                        fill: "#F59D31"
                      }),
                      createVNode("path", {
                        d: "M10 14.1924C11.1508 13.1625 11.875 11.6657 11.875 9.99979C11.875 8.33383 11.1508 6.8371 10 5.80713C8.84918 6.8371 8.125 8.33383 8.125 9.99979C8.125 11.6657 8.84918 13.1625 10 14.1924Z",
                        fill: "#FC6020"
                      })
                    ]))
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/form/form-elements/DefaultInputs.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "Dropzone",
  __ssrInlineRender: true,
  setup(__props) {
    const isDragging = ref(false);
    const files = ref([]);
    const fileInput = ref(null);
    const validTypes = ["image/png", "image/jpeg", "image/webp", "image/svg+xml"];
    const handleFiles = (selectedFiles) => {
      const validFiles = selectedFiles.filter((file) => validTypes.includes(file.type));
      if (validFiles.length) {
        files.value = [...files.value, ...validFiles];
      }
    };
    const handleDrop = (event) => {
      isDragging.value = false;
      const droppedFiles = Array.from(event.dataTransfer.files);
      handleFiles(droppedFiles);
    };
    const handleFileInput = (event) => {
      handleFiles(Array.from(event.target.files));
      event.target.value = "";
    };
    const openFileDialog = () => {
      fileInput.value?.click();
    };
    const removeFile = (index) => {
      files.value.splice(index, 1);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$d, mergeProps({ title: "Dropzone" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="transition border border-gray-300 border-dashed cursor-pointer dark:hover:border-brand-500 dark:border-gray-700 rounded-xl hover:border-brand-500"${_scopeId}><div class="${ssrRenderClass([isDragging.value ? "border-brand-500 bg-gray-100 dark:bg-gray-800" : "border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-900", "dropzone rounded-xl border-dashed border-gray-300 p-7 lg:p-10 transition-colors cursor-pointer"])}"${_scopeId}><input type="file" accept="image/png,image/jpeg,image/webp,image/svg+xml" multiple class="hidden"${_scopeId}><div class="flex flex-col items-center m-0"${_scopeId}><div class="mb-[22px] flex justify-center"${_scopeId}><div class="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-400"${_scopeId}><svg class="fill-current" width="29" height="28" viewBox="0 0 29 28" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path fill-rule="evenodd" clip-rule="evenodd" d="M14.5019 3.91699C14.2852 3.91699 14.0899 4.00891 13.953 4.15589L8.57363 9.53186C8.28065 9.82466 8.2805 10.2995 8.5733 10.5925C8.8661 10.8855 9.34097 10.8857 9.63396 10.5929L13.7519 6.47752V18.667C13.7519 19.0812 14.0877 19.417 14.5019 19.417C14.9161 19.417 15.2519 19.0812 15.2519 18.667V6.48234L19.3653 10.5929C19.6583 10.8857 20.1332 10.8855 20.426 10.5925C20.7188 10.2995 20.7186 9.82463 20.4256 9.53184L15.0838 4.19378C14.9463 4.02488 14.7367 3.91699 14.5019 3.91699ZM5.91626 18.667C5.91626 18.2528 5.58047 17.917 5.16626 17.917C4.75205 17.917 4.41626 18.2528 4.41626 18.667V21.8337C4.41626 23.0763 5.42362 24.0837 6.66626 24.0837H22.3339C23.5766 24.0837 24.5839 23.0763 24.5839 21.8337V18.667C24.5839 18.2528 24.2482 17.917 23.8339 17.917C23.4197 17.917 23.0839 18.2528 23.0839 18.667V21.8337C23.0839 22.2479 22.7482 22.5837 22.3339 22.5837H6.66626C6.25205 22.5837 5.91626 22.2479 5.91626 21.8337V18.667Z"${_scopeId}></path></svg></div></div><h4 class="mb-3 font-semibold text-gray-800 text-theme-xl dark:text-white/90"${_scopeId}>`);
            if (!isDragging.value) {
              _push2(`<span${_scopeId}>Drag &amp; Drop Files Here</span>`);
            } else {
              _push2(`<span${_scopeId}>Drop Files Here</span>`);
            }
            _push2(`</h4><span class="text-center mb-5 block w-full max-w-[290px] text-sm text-gray-700 dark:text-gray-400"${_scopeId}> Drag and drop your PNG, JPG, WebP, SVG images here or browse </span><span class="font-medium underline text-theme-sm text-brand-500"${_scopeId}>Browse File</span></div></div>`);
            if (files.value.length) {
              _push2(`<div class="mt-4 p-4 border-t border-gray-200 dark:border-gray-700"${_scopeId}><h5 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3"${_scopeId}>Uploaded Files:</h5><ul class="space-y-2"${_scopeId}><!--[-->`);
              ssrRenderList(files.value, (file, index) => {
                _push2(`<li class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"${_scopeId}></path></svg><span class="text-sm text-gray-700 dark:text-gray-300"${_scopeId}>${ssrInterpolate(file.name)}</span></div><button type="button" class="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"${_scopeId}><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"${_scopeId}></path></svg></button></li>`);
              });
              _push2(`<!--]--></ul></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "transition border border-gray-300 border-dashed cursor-pointer dark:hover:border-brand-500 dark:border-gray-700 rounded-xl hover:border-brand-500" }, [
                createVNode("div", {
                  class: ["dropzone rounded-xl border-dashed border-gray-300 p-7 lg:p-10 transition-colors cursor-pointer", isDragging.value ? "border-brand-500 bg-gray-100 dark:bg-gray-800" : "border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-900"],
                  onDrop: withModifiers(handleDrop, ["prevent"]),
                  onDragover: withModifiers(($event) => isDragging.value = true, ["prevent"]),
                  onDragleave: withModifiers(($event) => isDragging.value = false, ["prevent"]),
                  onClick: openFileDialog
                }, [
                  createVNode("input", {
                    ref_key: "fileInput",
                    ref: fileInput,
                    type: "file",
                    accept: "image/png,image/jpeg,image/webp,image/svg+xml",
                    multiple: "",
                    class: "hidden",
                    onChange: handleFileInput,
                    onClick: withModifiers(() => {
                    }, ["stop"])
                  }, null, 40, ["onClick"]),
                  createVNode("div", { class: "flex flex-col items-center m-0" }, [
                    createVNode("div", { class: "mb-[22px] flex justify-center" }, [
                      createVNode("div", { class: "flex h-[68px] w-[68px] items-center justify-center rounded-full bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-400" }, [
                        (openBlock(), createBlock("svg", {
                          class: "fill-current",
                          width: "29",
                          height: "28",
                          viewBox: "0 0 29 28",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createVNode("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M14.5019 3.91699C14.2852 3.91699 14.0899 4.00891 13.953 4.15589L8.57363 9.53186C8.28065 9.82466 8.2805 10.2995 8.5733 10.5925C8.8661 10.8855 9.34097 10.8857 9.63396 10.5929L13.7519 6.47752V18.667C13.7519 19.0812 14.0877 19.417 14.5019 19.417C14.9161 19.417 15.2519 19.0812 15.2519 18.667V6.48234L19.3653 10.5929C19.6583 10.8857 20.1332 10.8855 20.426 10.5925C20.7188 10.2995 20.7186 9.82463 20.4256 9.53184L15.0838 4.19378C14.9463 4.02488 14.7367 3.91699 14.5019 3.91699ZM5.91626 18.667C5.91626 18.2528 5.58047 17.917 5.16626 17.917C4.75205 17.917 4.41626 18.2528 4.41626 18.667V21.8337C4.41626 23.0763 5.42362 24.0837 6.66626 24.0837H22.3339C23.5766 24.0837 24.5839 23.0763 24.5839 21.8337V18.667C24.5839 18.2528 24.2482 17.917 23.8339 17.917C23.4197 17.917 23.0839 18.2528 23.0839 18.667V21.8337C23.0839 22.2479 22.7482 22.5837 22.3339 22.5837H6.66626C6.25205 22.5837 5.91626 22.2479 5.91626 21.8337V18.667Z"
                          })
                        ]))
                      ])
                    ]),
                    createVNode("h4", { class: "mb-3 font-semibold text-gray-800 text-theme-xl dark:text-white/90" }, [
                      !isDragging.value ? (openBlock(), createBlock("span", { key: 0 }, "Drag & Drop Files Here")) : (openBlock(), createBlock("span", { key: 1 }, "Drop Files Here"))
                    ]),
                    createVNode("span", { class: "text-center mb-5 block w-full max-w-[290px] text-sm text-gray-700 dark:text-gray-400" }, " Drag and drop your PNG, JPG, WebP, SVG images here or browse "),
                    createVNode("span", { class: "font-medium underline text-theme-sm text-brand-500" }, "Browse File")
                  ])
                ], 42, ["onDragover", "onDragleave"]),
                files.value.length ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "mt-4 p-4 border-t border-gray-200 dark:border-gray-700"
                }, [
                  createVNode("h5", { class: "text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3" }, "Uploaded Files:"),
                  createVNode("ul", { class: "space-y-2" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(files.value, (file, index) => {
                      return openBlock(), createBlock("li", {
                        key: `${file.name}-${index}`,
                        class: "flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                      }, [
                        createVNode("div", { class: "flex items-center gap-3" }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-5 h-5 text-gray-500",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            })
                          ])),
                          createVNode("span", { class: "text-sm text-gray-700 dark:text-gray-300" }, toDisplayString(file.name), 1)
                        ]),
                        createVNode("button", {
                          type: "button",
                          class: "text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300",
                          onClick: withModifiers(($event) => removeFile(index), ["stop"])
                        }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-5 h-5",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M6 18L18 6M6 6l12 12"
                            })
                          ]))
                        ], 8, ["onClick"])
                      ]);
                    }), 128))
                  ])
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/form/form-elements/Dropzone.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "FileInputExample",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$d, mergeProps({ title: "File Input" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"${_scopeId}> Upload file </label><input type="file" class="focus:border-ring-brand-300 shadow-theme-xs focus:file:ring-brand-300 h-11 w-full overflow-hidden rounded-lg border border-gray-300 bg-transparent text-sm text-gray-500 transition-colors file:mr-5 file:border-collapse file:cursor-pointer file:rounded-l-lg file:border-0 file:border-r file:border-solid file:border-gray-200 file:bg-gray-50 file:py-3 file:pr-3 file:pl-3.5 file:text-sm file:text-gray-700 placeholder:text-gray-400 hover:file:bg-gray-100 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:text-white/90 dark:file:border-gray-800 dark:file:bg-white/[0.03] dark:file:text-gray-400 dark:placeholder:text-gray-400"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("label", { class: "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400" }, " Upload file "),
                createVNode("input", {
                  type: "file",
                  class: "focus:border-ring-brand-300 shadow-theme-xs focus:file:ring-brand-300 h-11 w-full overflow-hidden rounded-lg border border-gray-300 bg-transparent text-sm text-gray-500 transition-colors file:mr-5 file:border-collapse file:cursor-pointer file:rounded-l-lg file:border-0 file:border-r file:border-solid file:border-gray-200 file:bg-gray-50 file:py-3 file:pr-3 file:pl-3.5 file:text-sm file:text-gray-700 placeholder:text-gray-400 hover:file:bg-gray-100 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:text-white/90 dark:file:border-gray-800 dark:file:bg-white/[0.03] dark:file:text-gray-400 dark:placeholder:text-gray-400"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/form/form-elements/FileInputExample.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "InputGroup",
  __ssrInlineRender: true,
  setup(__props) {
    const countryCodes = {
      US: "+1",
      GB: "+44",
      CA: "+1",
      AU: "+61"
    };
    const phoneLeft = reactive({
      selectedCountry: "US",
      phoneNumber: ""
    });
    const phoneRight = reactive({
      selectedCountry: "US",
      phoneNumber: ""
    });
    const applyCountryCode = (state) => {
      state.phoneNumber = countryCodes[state.selectedCountry] || "";
    };
    const websiteValue = ref("www.tailadmin.com");
    const copyLabel = ref("Copy");
    const copyWebsite = async () => {
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(websiteValue.value);
        } else {
          const tempInput = document.createElement("input");
          tempInput.value = websiteValue.value;
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand("copy");
          document.body.removeChild(tempInput);
        }
        copyLabel.value = "Copied";
        setTimeout(() => {
          copyLabel.value = "Copy";
        }, 2e3);
      } catch {
        copyLabel.value = "Failed";
        setTimeout(() => {
          copyLabel.value = "Copy";
        }, 2e3);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$d, mergeProps({ title: "Input Group" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"${_scopeId}>Email</label><div class="relative"${_scopeId}><span class="absolute top-1/2 left-0 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400"${_scopeId}><svg width="20" height="20" viewBox="0 0 20 20" fill="none"${_scopeId}><path fill-rule="evenodd" clip-rule="evenodd" d="M3.04175 7.06206V14.375C3.04175 14.6511 3.26561 14.875 3.54175 14.875H16.4584C16.7346 14.875 16.9584 14.6511 16.9584 14.375V7.06245L11.1443 11.1168C10.457 11.5961 9.54373 11.5961 8.85638 11.1168L3.04175 7.06206ZM16.9584 5.19262C16.9584 5.19341 16.9584 5.1942 16.9584 5.19498V5.20026C16.9572 5.22216 16.946 5.24239 16.9279 5.25501L10.2864 9.88638C10.1145 10.0062 9.8862 10.0062 9.71437 9.88638L3.07255 5.25485C3.05342 5.24151 3.04202 5.21967 3.04202 5.19636C3.042 5.15695 3.07394 5.125 3.11335 5.125H16.8871C16.9253 5.125 16.9564 5.15494 16.9584 5.19262ZM18.4584 5.21428V14.375C18.4584 15.4796 17.563 16.375 16.4584 16.375H3.54175C2.43718 16.375 1.54175 15.4796 1.54175 14.375V5.19498C1.54175 5.1852 1.54194 5.17546 1.54231 5.16577C1.55858 4.31209 2.25571 3.625 3.11335 3.625H16.8871C17.7549 3.625 18.4584 4.32843 18.4585 5.19622C18.4585 5.20225 18.4585 5.20826 18.4584 5.21428Z" fill="#667085"${_scopeId}></path></svg></span><input type="text" placeholder="info@gmail.com" class="dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pl-[62px] text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"${_scopeId}></div></div><div${_scopeId}><label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"${_scopeId}>Phone</label><div class="relative"${_scopeId}><div class="absolute"${_scopeId}><select class="focus:border-brand-300 focus:ring-brand-500/10 appearance-none rounded-l-lg border-0 border-r border-gray-200 bg-transparent bg-none py-3 pr-8 pl-3.5 leading-tight text-gray-700 focus:ring-3 focus:outline-hidden dark:border-gray-800 dark:text-gray-400"${_scopeId}><option value="US" class="text-gray-700 dark:bg-gray-900 dark:text-gray-400"${ssrIncludeBooleanAttr(Array.isArray(phoneLeft.selectedCountry) ? ssrLooseContain(phoneLeft.selectedCountry, "US") : ssrLooseEqual(phoneLeft.selectedCountry, "US")) ? " selected" : ""}${_scopeId}>US</option><option value="GB" class="text-gray-700 dark:bg-gray-900 dark:text-gray-400"${ssrIncludeBooleanAttr(Array.isArray(phoneLeft.selectedCountry) ? ssrLooseContain(phoneLeft.selectedCountry, "GB") : ssrLooseEqual(phoneLeft.selectedCountry, "GB")) ? " selected" : ""}${_scopeId}>GB</option><option value="CA" class="text-gray-700 dark:bg-gray-900 dark:text-gray-400"${ssrIncludeBooleanAttr(Array.isArray(phoneLeft.selectedCountry) ? ssrLooseContain(phoneLeft.selectedCountry, "CA") : ssrLooseEqual(phoneLeft.selectedCountry, "CA")) ? " selected" : ""}${_scopeId}>CA</option><option value="AU" class="text-gray-700 dark:bg-gray-900 dark:text-gray-400"${ssrIncludeBooleanAttr(Array.isArray(phoneLeft.selectedCountry) ? ssrLooseContain(phoneLeft.selectedCountry, "AU") : ssrLooseEqual(phoneLeft.selectedCountry, "AU")) ? " selected" : ""}${_scopeId}>AU</option></select><div class="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-700 dark:text-gray-400"${_scopeId}><svg class="stroke-current" width="20" height="20" viewBox="0 0 20 20" fill="none"${_scopeId}><path d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></div></div><input${ssrRenderAttr("value", phoneLeft.phoneNumber)} type="tel" placeholder="+1 (555) 000-0000" class="dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full rounded-lg border border-gray-300 bg-transparent py-3 pr-4 pl-[84px] text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"${_scopeId}></div></div><div${_scopeId}><label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"${_scopeId}>Phone</label><div class="relative"${_scopeId}><div class="absolute right-0"${_scopeId}><select class="focus:border-brand-300 focus:ring-brand-500/10 appearance-none rounded-r-lg border-0 border-l border-gray-200 bg-transparent bg-none py-3 pr-8 pl-3.5 leading-tight text-gray-700 focus:ring-3 focus:outline-hidden dark:border-gray-800 dark:text-gray-400"${_scopeId}><option value="US" class="text-gray-700 dark:bg-gray-900 dark:text-gray-400"${ssrIncludeBooleanAttr(Array.isArray(phoneRight.selectedCountry) ? ssrLooseContain(phoneRight.selectedCountry, "US") : ssrLooseEqual(phoneRight.selectedCountry, "US")) ? " selected" : ""}${_scopeId}>US</option><option value="GB" class="text-gray-700 dark:bg-gray-900 dark:text-gray-400"${ssrIncludeBooleanAttr(Array.isArray(phoneRight.selectedCountry) ? ssrLooseContain(phoneRight.selectedCountry, "GB") : ssrLooseEqual(phoneRight.selectedCountry, "GB")) ? " selected" : ""}${_scopeId}>GB</option><option value="CA" class="text-gray-700 dark:bg-gray-900 dark:text-gray-400"${ssrIncludeBooleanAttr(Array.isArray(phoneRight.selectedCountry) ? ssrLooseContain(phoneRight.selectedCountry, "CA") : ssrLooseEqual(phoneRight.selectedCountry, "CA")) ? " selected" : ""}${_scopeId}>CA</option><option value="AU" class="text-gray-700 dark:bg-gray-900 dark:text-gray-400"${ssrIncludeBooleanAttr(Array.isArray(phoneRight.selectedCountry) ? ssrLooseContain(phoneRight.selectedCountry, "AU") : ssrLooseEqual(phoneRight.selectedCountry, "AU")) ? " selected" : ""}${_scopeId}>AU</option></select><div class="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-700 dark:text-gray-400"${_scopeId}><svg class="stroke-current" width="20" height="20" viewBox="0 0 20 20" fill="none"${_scopeId}><path d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></div></div><input${ssrRenderAttr("value", phoneRight.phoneNumber)} type="tel" placeholder="+1 (555) 000-0000" class="dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full rounded-lg border border-gray-300 bg-transparent py-3 px-3 pr-[84px] text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"${_scopeId}></div></div><div${_scopeId}><label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"${_scopeId}>URL</label><div class="relative"${_scopeId}><span class="absolute top-1/2 left-0 inline-flex h-11 -translate-y-1/2 items-center justify-center border-r border-gray-200 py-3 pr-3 pl-3.5 text-gray-500 dark:border-gray-800 dark:text-gray-400"${_scopeId}> http:// </span><input type="url" placeholder="www.tailadmin.com" class="dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pl-[90px] text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"${_scopeId}></div></div><div${_scopeId}><label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"${_scopeId}>Website</label><div class="relative"${_scopeId}><button class="absolute top-1/2 right-0 inline-flex -translate-y-1/2 cursor-pointer items-center gap-1 border-l border-gray-200 py-3 pr-3 pl-3.5 text-sm font-medium text-gray-700 dark:border-gray-800 dark:text-gray-400" type="button"${_scopeId}><svg class="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none"${_scopeId}><path fill-rule="evenodd" clip-rule="evenodd" d="M6.58822 4.58398C6.58822 4.30784 6.81207 4.08398 7.08822 4.08398H15.4154C15.6915 4.08398 15.9154 4.30784 15.9154 4.58398L15.9154 12.9128C15.9154 13.189 15.6916 13.4128 15.4154 13.4128H7.08821C6.81207 13.4128 6.58822 13.189 6.58822 12.9128V4.58398ZM7.08822 2.58398C5.98365 2.58398 5.08822 3.47942 5.08822 4.58398V5.09416H4.58496C3.48039 5.09416 2.58496 5.98959 2.58496 7.09416V15.4161C2.58496 16.5207 3.48039 17.4161 4.58496 17.4161H12.9069C14.0115 17.4161 14.9069 16.5207 14.9069 15.4161L14.9069 14.9128H15.4154C16.52 14.9128 17.4154 14.0174 17.4154 12.9128L17.4154 4.58398C17.4154 3.47941 16.52 2.58398 15.4154 2.58398H7.08822ZM13.4069 14.9128H7.08821C5.98364 14.9128 5.08822 14.0174 5.08822 12.9128V6.59416H4.58496C4.30882 6.59416 4.08496 6.81801 4.08496 7.09416V15.4161C4.08496 15.6922 4.30882 15.9161 4.58496 15.9161H12.9069C13.183 15.9161 13.4069 15.6922 13.4069 15.4161L13.4069 14.9128Z" fill=""${_scopeId}></path></svg><span${_scopeId}>${ssrInterpolate(copyLabel.value)}</span></button><input${ssrRenderAttr("value", websiteValue.value)} type="url" class="dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full rounded-lg border border-gray-300 bg-transparent py-3 pr-[90px] pl-4 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("label", { class: "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400" }, "Email"),
                createVNode("div", { class: "relative" }, [
                  createVNode("span", { class: "absolute top-1/2 left-0 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400" }, [
                    (openBlock(), createBlock("svg", {
                      width: "20",
                      height: "20",
                      viewBox: "0 0 20 20",
                      fill: "none"
                    }, [
                      createVNode("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M3.04175 7.06206V14.375C3.04175 14.6511 3.26561 14.875 3.54175 14.875H16.4584C16.7346 14.875 16.9584 14.6511 16.9584 14.375V7.06245L11.1443 11.1168C10.457 11.5961 9.54373 11.5961 8.85638 11.1168L3.04175 7.06206ZM16.9584 5.19262C16.9584 5.19341 16.9584 5.1942 16.9584 5.19498V5.20026C16.9572 5.22216 16.946 5.24239 16.9279 5.25501L10.2864 9.88638C10.1145 10.0062 9.8862 10.0062 9.71437 9.88638L3.07255 5.25485C3.05342 5.24151 3.04202 5.21967 3.04202 5.19636C3.042 5.15695 3.07394 5.125 3.11335 5.125H16.8871C16.9253 5.125 16.9564 5.15494 16.9584 5.19262ZM18.4584 5.21428V14.375C18.4584 15.4796 17.563 16.375 16.4584 16.375H3.54175C2.43718 16.375 1.54175 15.4796 1.54175 14.375V5.19498C1.54175 5.1852 1.54194 5.17546 1.54231 5.16577C1.55858 4.31209 2.25571 3.625 3.11335 3.625H16.8871C17.7549 3.625 18.4584 4.32843 18.4585 5.19622C18.4585 5.20225 18.4585 5.20826 18.4584 5.21428Z",
                        fill: "#667085"
                      })
                    ]))
                  ]),
                  createVNode("input", {
                    type: "text",
                    placeholder: "info@gmail.com",
                    class: "dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pl-[62px] text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"
                  })
                ])
              ]),
              createVNode("div", null, [
                createVNode("label", { class: "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400" }, "Phone"),
                createVNode("div", { class: "relative" }, [
                  createVNode("div", { class: "absolute" }, [
                    withDirectives(createVNode("select", {
                      "onUpdate:modelValue": ($event) => phoneLeft.selectedCountry = $event,
                      class: "focus:border-brand-300 focus:ring-brand-500/10 appearance-none rounded-l-lg border-0 border-r border-gray-200 bg-transparent bg-none py-3 pr-8 pl-3.5 leading-tight text-gray-700 focus:ring-3 focus:outline-hidden dark:border-gray-800 dark:text-gray-400",
                      onChange: ($event) => applyCountryCode(phoneLeft)
                    }, [
                      createVNode("option", {
                        value: "US",
                        class: "text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                      }, "US"),
                      createVNode("option", {
                        value: "GB",
                        class: "text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                      }, "GB"),
                      createVNode("option", {
                        value: "CA",
                        class: "text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                      }, "CA"),
                      createVNode("option", {
                        value: "AU",
                        class: "text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                      }, "AU")
                    ], 40, ["onUpdate:modelValue", "onChange"]), [
                      [vModelSelect, phoneLeft.selectedCountry]
                    ]),
                    createVNode("div", { class: "pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-700 dark:text-gray-400" }, [
                      (openBlock(), createBlock("svg", {
                        class: "stroke-current",
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none"
                      }, [
                        createVNode("path", {
                          d: "M4.79175 7.396L10.0001 12.6043L15.2084 7.396",
                          stroke: "",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ])
                  ]),
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => phoneLeft.phoneNumber = $event,
                    type: "tel",
                    placeholder: "+1 (555) 000-0000",
                    class: "dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full rounded-lg border border-gray-300 bg-transparent py-3 pr-4 pl-[84px] text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, phoneLeft.phoneNumber]
                  ])
                ])
              ]),
              createVNode("div", null, [
                createVNode("label", { class: "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400" }, "Phone"),
                createVNode("div", { class: "relative" }, [
                  createVNode("div", { class: "absolute right-0" }, [
                    withDirectives(createVNode("select", {
                      "onUpdate:modelValue": ($event) => phoneRight.selectedCountry = $event,
                      class: "focus:border-brand-300 focus:ring-brand-500/10 appearance-none rounded-r-lg border-0 border-l border-gray-200 bg-transparent bg-none py-3 pr-8 pl-3.5 leading-tight text-gray-700 focus:ring-3 focus:outline-hidden dark:border-gray-800 dark:text-gray-400",
                      onChange: ($event) => applyCountryCode(phoneRight)
                    }, [
                      createVNode("option", {
                        value: "US",
                        class: "text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                      }, "US"),
                      createVNode("option", {
                        value: "GB",
                        class: "text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                      }, "GB"),
                      createVNode("option", {
                        value: "CA",
                        class: "text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                      }, "CA"),
                      createVNode("option", {
                        value: "AU",
                        class: "text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                      }, "AU")
                    ], 40, ["onUpdate:modelValue", "onChange"]), [
                      [vModelSelect, phoneRight.selectedCountry]
                    ]),
                    createVNode("div", { class: "pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-700 dark:text-gray-400" }, [
                      (openBlock(), createBlock("svg", {
                        class: "stroke-current",
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none"
                      }, [
                        createVNode("path", {
                          d: "M4.79175 7.396L10.0001 12.6043L15.2084 7.396",
                          stroke: "",
                          "stroke-width": "1.5",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        })
                      ]))
                    ])
                  ]),
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => phoneRight.phoneNumber = $event,
                    type: "tel",
                    placeholder: "+1 (555) 000-0000",
                    class: "dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full rounded-lg border border-gray-300 bg-transparent py-3 px-3 pr-[84px] text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, phoneRight.phoneNumber]
                  ])
                ])
              ]),
              createVNode("div", null, [
                createVNode("label", { class: "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400" }, "URL"),
                createVNode("div", { class: "relative" }, [
                  createVNode("span", { class: "absolute top-1/2 left-0 inline-flex h-11 -translate-y-1/2 items-center justify-center border-r border-gray-200 py-3 pr-3 pl-3.5 text-gray-500 dark:border-gray-800 dark:text-gray-400" }, " http:// "),
                  createVNode("input", {
                    type: "url",
                    placeholder: "www.tailadmin.com",
                    class: "dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pl-[90px] text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"
                  })
                ])
              ]),
              createVNode("div", null, [
                createVNode("label", { class: "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400" }, "Website"),
                createVNode("div", { class: "relative" }, [
                  createVNode("button", {
                    class: "absolute top-1/2 right-0 inline-flex -translate-y-1/2 cursor-pointer items-center gap-1 border-l border-gray-200 py-3 pr-3 pl-3.5 text-sm font-medium text-gray-700 dark:border-gray-800 dark:text-gray-400",
                    type: "button",
                    onClick: copyWebsite
                  }, [
                    (openBlock(), createBlock("svg", {
                      class: "fill-current",
                      width: "20",
                      height: "20",
                      viewBox: "0 0 20 20",
                      fill: "none"
                    }, [
                      createVNode("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M6.58822 4.58398C6.58822 4.30784 6.81207 4.08398 7.08822 4.08398H15.4154C15.6915 4.08398 15.9154 4.30784 15.9154 4.58398L15.9154 12.9128C15.9154 13.189 15.6916 13.4128 15.4154 13.4128H7.08821C6.81207 13.4128 6.58822 13.189 6.58822 12.9128V4.58398ZM7.08822 2.58398C5.98365 2.58398 5.08822 3.47942 5.08822 4.58398V5.09416H4.58496C3.48039 5.09416 2.58496 5.98959 2.58496 7.09416V15.4161C2.58496 16.5207 3.48039 17.4161 4.58496 17.4161H12.9069C14.0115 17.4161 14.9069 16.5207 14.9069 15.4161L14.9069 14.9128H15.4154C16.52 14.9128 17.4154 14.0174 17.4154 12.9128L17.4154 4.58398C17.4154 3.47941 16.52 2.58398 15.4154 2.58398H7.08822ZM13.4069 14.9128H7.08821C5.98364 14.9128 5.08822 14.0174 5.08822 12.9128V6.59416H4.58496C4.30882 6.59416 4.08496 6.81801 4.08496 7.09416V15.4161C4.08496 15.6922 4.30882 15.9161 4.58496 15.9161H12.9069C13.183 15.9161 13.4069 15.6922 13.4069 15.4161L13.4069 14.9128Z",
                        fill: ""
                      })
                    ])),
                    createVNode("span", null, toDisplayString(copyLabel.value), 1)
                  ]),
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => websiteValue.value = $event,
                    type: "url",
                    class: "dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full rounded-lg border border-gray-300 bg-transparent py-3 pr-[90px] pl-4 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, websiteValue.value]
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/form/form-elements/InputGroup.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "InputStates",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$d, mergeProps({
        title: "Input States",
        desc: "Validation styles for error, success and disabled states on form controls."
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-5 sm:space-y-6"${_scopeId}><div${_scopeId}><label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"${_scopeId}> Email </label><div class="relative"${_scopeId}><input type="text" value="demoemail" class="dark:bg-dark-900 border-error-300 shadow-theme-xs focus:border-error-300 focus:ring-error-500/10 dark:border-error-700 dark:focus:border-error-800 w-full rounded-lg border bg-transparent px-4 py-2.5 pr-10 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"${_scopeId}><span class="absolute top-1/2 right-3.5 -translate-y-1/2"${_scopeId}><svg width="16" height="16" viewBox="0 0 16 16" fill="none"${_scopeId}><path fill-rule="evenodd" clip-rule="evenodd" d="M2.58325 7.99967C2.58325 5.00813 5.00838 2.58301 7.99992 2.58301C10.9915 2.58301 13.4166 5.00813 13.4166 7.99967C13.4166 10.9912 10.9915 13.4163 7.99992 13.4163C5.00838 13.4163 2.58325 10.9912 2.58325 7.99967ZM7.99992 1.08301C4.17995 1.08301 1.08325 4.17971 1.08325 7.99967C1.08325 11.8196 4.17995 14.9163 7.99992 14.9163C11.8199 14.9163 14.9166 11.8196 14.9166 7.99967C14.9166 4.17971 11.8199 1.08301 7.99992 1.08301ZM7.09932 5.01639C7.09932 5.51345 7.50227 5.91639 7.99932 5.91639H7.99999C8.49705 5.91639 8.89999 5.51345 8.89999 5.01639C8.89999 4.51933 8.49705 4.11639 7.99999 4.11639H7.99932C7.50227 4.11639 7.09932 4.51933 7.09932 5.01639ZM7.99998 11.8306C7.58576 11.8306 7.24998 11.4948 7.24998 11.0806V7.29627C7.24998 6.88206 7.58576 6.54627 7.99998 6.54627C8.41419 6.54627 8.74998 6.88206 8.74998 7.29627V11.0806C8.74998 11.4948 8.41419 11.8306 7.99998 11.8306Z" fill="#F04438"${_scopeId}></path></svg></span></div><p class="text-theme-xs text-error-500 mt-1.5"${_scopeId}>This is an error message.</p></div><div${_scopeId}><label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"${_scopeId}> Email </label><div class="relative"${_scopeId}><input type="text" value="demoemail@gmail.com" class="dark:bg-dark-900 border-success-300 shadow-theme-xs focus:border-success-300 focus:ring-success-500/10 dark:border-success-700 dark:focus:border-success-800 w-full rounded-lg border bg-transparent px-4 py-2.5 pr-10 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"${_scopeId}><span class="absolute top-1/2 right-3.5 -translate-y-1/2"${_scopeId}><svg width="16" height="16" viewBox="0 0 16 16" fill="none"${_scopeId}><path fill-rule="evenodd" clip-rule="evenodd" d="M2.61792 8.00034C2.61792 5.02784 5.0276 2.61816 8.00009 2.61816C10.9726 2.61816 13.3823 5.02784 13.3823 8.00034C13.3823 10.9728 10.9726 13.3825 8.00009 13.3825C5.0276 13.3825 2.61792 10.9728 2.61792 8.00034ZM8.00009 1.11816C4.19917 1.11816 1.11792 4.19942 1.11792 8.00034C1.11792 11.8013 4.19917 14.8825 8.00009 14.8825C11.801 14.8825 14.8823 11.8013 14.8823 8.00034C14.8823 4.19942 11.801 1.11816 8.00009 1.11816ZM10.5192 7.266C10.8121 6.97311 10.8121 6.49823 10.5192 6.20534C10.2264 5.91245 9.75148 5.91245 9.45858 6.20534L7.45958 8.20434L6.54162 7.28638C6.24873 6.99349 5.77385 6.99349 5.48096 7.28638C5.18807 7.57927 5.18807 8.05415 5.48096 8.34704L6.92925 9.79533C7.0699 9.93599 7.26067 10.015 7.45958 10.015C7.6585 10.015 7.84926 9.93599 7.98991 9.79533L10.5192 7.266Z" fill="#12B76A"${_scopeId}></path></svg></span></div><p class="text-theme-xs text-success-500 mt-1.5"${_scopeId}>This is an success message.</p></div><div${_scopeId}><label class="mb-1.5 block text-sm font-medium text-gray-300 dark:text-white/15"${_scopeId}> Email </label><input type="text" placeholder="info@gmail.com" disabled class="shadow-theme-xs focus:border-brand-300 focus:shadow-focus-ring dark:focus:border-brand-300 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-hidden disabled:border-gray-100 disabled:placeholder:text-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-gray-400 dark:disabled:border-gray-800 dark:disabled:placeholder:text-white/15"${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-5 sm:space-y-6" }, [
                createVNode("div", null, [
                  createVNode("label", { class: "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400" }, " Email "),
                  createVNode("div", { class: "relative" }, [
                    createVNode("input", {
                      type: "text",
                      value: "demoemail",
                      class: "dark:bg-dark-900 border-error-300 shadow-theme-xs focus:border-error-300 focus:ring-error-500/10 dark:border-error-700 dark:focus:border-error-800 w-full rounded-lg border bg-transparent px-4 py-2.5 pr-10 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"
                    }),
                    createVNode("span", { class: "absolute top-1/2 right-3.5 -translate-y-1/2" }, [
                      (openBlock(), createBlock("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none"
                      }, [
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          "clip-rule": "evenodd",
                          d: "M2.58325 7.99967C2.58325 5.00813 5.00838 2.58301 7.99992 2.58301C10.9915 2.58301 13.4166 5.00813 13.4166 7.99967C13.4166 10.9912 10.9915 13.4163 7.99992 13.4163C5.00838 13.4163 2.58325 10.9912 2.58325 7.99967ZM7.99992 1.08301C4.17995 1.08301 1.08325 4.17971 1.08325 7.99967C1.08325 11.8196 4.17995 14.9163 7.99992 14.9163C11.8199 14.9163 14.9166 11.8196 14.9166 7.99967C14.9166 4.17971 11.8199 1.08301 7.99992 1.08301ZM7.09932 5.01639C7.09932 5.51345 7.50227 5.91639 7.99932 5.91639H7.99999C8.49705 5.91639 8.89999 5.51345 8.89999 5.01639C8.89999 4.51933 8.49705 4.11639 7.99999 4.11639H7.99932C7.50227 4.11639 7.09932 4.51933 7.09932 5.01639ZM7.99998 11.8306C7.58576 11.8306 7.24998 11.4948 7.24998 11.0806V7.29627C7.24998 6.88206 7.58576 6.54627 7.99998 6.54627C8.41419 6.54627 8.74998 6.88206 8.74998 7.29627V11.0806C8.74998 11.4948 8.41419 11.8306 7.99998 11.8306Z",
                          fill: "#F04438"
                        })
                      ]))
                    ])
                  ]),
                  createVNode("p", { class: "text-theme-xs text-error-500 mt-1.5" }, "This is an error message.")
                ]),
                createVNode("div", null, [
                  createVNode("label", { class: "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400" }, " Email "),
                  createVNode("div", { class: "relative" }, [
                    createVNode("input", {
                      type: "text",
                      value: "demoemail@gmail.com",
                      class: "dark:bg-dark-900 border-success-300 shadow-theme-xs focus:border-success-300 focus:ring-success-500/10 dark:border-success-700 dark:focus:border-success-800 w-full rounded-lg border bg-transparent px-4 py-2.5 pr-10 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"
                    }),
                    createVNode("span", { class: "absolute top-1/2 right-3.5 -translate-y-1/2" }, [
                      (openBlock(), createBlock("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none"
                      }, [
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          "clip-rule": "evenodd",
                          d: "M2.61792 8.00034C2.61792 5.02784 5.0276 2.61816 8.00009 2.61816C10.9726 2.61816 13.3823 5.02784 13.3823 8.00034C13.3823 10.9728 10.9726 13.3825 8.00009 13.3825C5.0276 13.3825 2.61792 10.9728 2.61792 8.00034ZM8.00009 1.11816C4.19917 1.11816 1.11792 4.19942 1.11792 8.00034C1.11792 11.8013 4.19917 14.8825 8.00009 14.8825C11.801 14.8825 14.8823 11.8013 14.8823 8.00034C14.8823 4.19942 11.801 1.11816 8.00009 1.11816ZM10.5192 7.266C10.8121 6.97311 10.8121 6.49823 10.5192 6.20534C10.2264 5.91245 9.75148 5.91245 9.45858 6.20534L7.45958 8.20434L6.54162 7.28638C6.24873 6.99349 5.77385 6.99349 5.48096 7.28638C5.18807 7.57927 5.18807 8.05415 5.48096 8.34704L6.92925 9.79533C7.0699 9.93599 7.26067 10.015 7.45958 10.015C7.6585 10.015 7.84926 9.93599 7.98991 9.79533L10.5192 7.266Z",
                          fill: "#12B76A"
                        })
                      ]))
                    ])
                  ]),
                  createVNode("p", { class: "text-theme-xs text-success-500 mt-1.5" }, "This is an success message.")
                ]),
                createVNode("div", null, [
                  createVNode("label", { class: "mb-1.5 block text-sm font-medium text-gray-300 dark:text-white/15" }, " Email "),
                  createVNode("input", {
                    type: "text",
                    placeholder: "info@gmail.com",
                    disabled: "",
                    class: "shadow-theme-xs focus:border-brand-300 focus:shadow-focus-ring dark:focus:border-brand-300 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-hidden disabled:border-gray-100 disabled:placeholder:text-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-gray-400 dark:disabled:border-gray-800 dark:disabled:placeholder:text-white/15"
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/form/form-elements/InputStates.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "RadioButtons",
  __ssrInlineRender: true,
  setup(__props) {
    const radioOne = ref(false);
    const radioTwo = ref(true);
    const radioThree = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$d, mergeProps({ title: "Radio Buttons" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap items-center gap-8"${_scopeId}><label class="flex cursor-pointer items-center text-sm font-medium text-gray-700 select-none dark:text-gray-400"${_scopeId}><div class="relative"${_scopeId}><input type="checkbox" class="sr-only"${ssrIncludeBooleanAttr(Array.isArray(radioOne.value) ? ssrLooseContain(radioOne.value, null) : radioOne.value) ? " checked" : ""}${_scopeId}><div class="${ssrRenderClass([radioOne.value ? "border-brand-500 bg-brand-500" : "bg-transparent border-gray-300 dark:border-gray-700", "hover:border-brand-500 dark:hover:border-brand-500 mr-3 flex h-5 w-5 items-center justify-center rounded-full border-[1.25px]"])}"${_scopeId}><span class="${ssrRenderClass([radioOne.value ? "bg-white" : "bg-white dark:bg-[#171f2e]", "h-2 w-2 rounded-full"])}"${_scopeId}></span></div></div> Default </label><label class="flex cursor-pointer items-center text-sm font-medium text-gray-700 select-none dark:text-gray-400"${_scopeId}><div class="relative"${_scopeId}><input type="checkbox" class="sr-only"${ssrIncludeBooleanAttr(Array.isArray(radioTwo.value) ? ssrLooseContain(radioTwo.value, null) : radioTwo.value) ? " checked" : ""}${_scopeId}><div class="${ssrRenderClass([radioTwo.value ? "border-brand-500 bg-brand-500" : "bg-transparent border-gray-300 dark:border-gray-700", "hover:border-brand-500 dark:hover:border-brand-500 mr-3 flex h-5 w-5 items-center justify-center rounded-full border-[1.25px]"])}"${_scopeId}><span class="${ssrRenderClass([radioTwo.value ? "bg-white" : "bg-white dark:bg-[#171f2e]", "h-2 w-2 rounded-full"])}"${_scopeId}></span></div></div> Secondary </label><label class="flex cursor-pointer items-center text-sm font-medium text-gray-300 select-none dark:text-gray-700"${_scopeId}><div class="relative"${_scopeId}><input type="checkbox" class="peer sr-only"${ssrIncludeBooleanAttr(Array.isArray(radioThree.value) ? ssrLooseContain(radioThree.value, null) : radioThree.value) ? " checked" : ""} disabled${_scopeId}><div class="${ssrRenderClass([radioThree.value ? "bg-transparent border-gray-300 dark:border-gray-700" : "border-brand-500 bg-brand-500", "mr-3 flex h-5 w-5 items-center justify-center rounded-full border-[1.25px]"])}"${_scopeId}><span class="${ssrRenderClass([radioThree.value ? "bg-white" : "bg-white dark:bg-[#171f2e]", "h-2 w-2 rounded-full"])}"${_scopeId}></span></div></div> Disabled Secondary </label></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap items-center gap-8" }, [
                createVNode("label", { class: "flex cursor-pointer items-center text-sm font-medium text-gray-700 select-none dark:text-gray-400" }, [
                  createVNode("div", { class: "relative" }, [
                    withDirectives(createVNode("input", {
                      type: "checkbox",
                      class: "sr-only",
                      "onUpdate:modelValue": ($event) => radioOne.value = $event
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelCheckbox, radioOne.value]
                    ]),
                    createVNode("div", {
                      class: ["hover:border-brand-500 dark:hover:border-brand-500 mr-3 flex h-5 w-5 items-center justify-center rounded-full border-[1.25px]", radioOne.value ? "border-brand-500 bg-brand-500" : "bg-transparent border-gray-300 dark:border-gray-700"]
                    }, [
                      createVNode("span", {
                        class: ["h-2 w-2 rounded-full", radioOne.value ? "bg-white" : "bg-white dark:bg-[#171f2e]"]
                      }, null, 2)
                    ], 2)
                  ]),
                  createTextVNode(" Default ")
                ]),
                createVNode("label", { class: "flex cursor-pointer items-center text-sm font-medium text-gray-700 select-none dark:text-gray-400" }, [
                  createVNode("div", { class: "relative" }, [
                    withDirectives(createVNode("input", {
                      type: "checkbox",
                      class: "sr-only",
                      "onUpdate:modelValue": ($event) => radioTwo.value = $event
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelCheckbox, radioTwo.value]
                    ]),
                    createVNode("div", {
                      class: ["hover:border-brand-500 dark:hover:border-brand-500 mr-3 flex h-5 w-5 items-center justify-center rounded-full border-[1.25px]", radioTwo.value ? "border-brand-500 bg-brand-500" : "bg-transparent border-gray-300 dark:border-gray-700"]
                    }, [
                      createVNode("span", {
                        class: ["h-2 w-2 rounded-full", radioTwo.value ? "bg-white" : "bg-white dark:bg-[#171f2e]"]
                      }, null, 2)
                    ], 2)
                  ]),
                  createTextVNode(" Secondary ")
                ]),
                createVNode("label", { class: "flex cursor-pointer items-center text-sm font-medium text-gray-300 select-none dark:text-gray-700" }, [
                  createVNode("div", { class: "relative" }, [
                    withDirectives(createVNode("input", {
                      type: "checkbox",
                      class: "peer sr-only",
                      "onUpdate:modelValue": ($event) => radioThree.value = $event,
                      disabled: ""
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelCheckbox, radioThree.value]
                    ]),
                    createVNode("div", {
                      class: ["mr-3 flex h-5 w-5 items-center justify-center rounded-full border-[1.25px]", radioThree.value ? "bg-transparent border-gray-300 dark:border-gray-700" : "border-brand-500 bg-brand-500"]
                    }, [
                      createVNode("span", {
                        class: ["h-2 w-2 rounded-full", radioThree.value ? "bg-white" : "bg-white dark:bg-[#171f2e]"]
                      }, null, 2)
                    ], 2)
                  ]),
                  createTextVNode(" Disabled Secondary ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/form/form-elements/RadioButtons.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "MultipleSelect",
  __ssrInlineRender: true,
  setup(__props) {
    const open = ref(false);
    const selected = ref([1, 3]);
    const options = [
      { id: 1, name: "Option 1" },
      { id: 2, name: "Option 2" },
      { id: 3, name: "Option 3" },
      { id: 4, name: "Option 4" },
      { id: 5, name: "Option 5" }
    ];
    const root = ref(null);
    useClickOutside(root, () => {
      open.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"> Multiple Select Options </label><div class="relative"><input type="hidden" name="selected_options"${ssrRenderAttr("value", selected.value.join(","))}><div class="shadow-theme-xs flex min-h-11 cursor-pointer gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 transition dark:border-gray-700 dark:bg-gray-900"><div class="flex flex-1 flex-wrap items-center gap-2"><!--[-->`);
      ssrRenderList(selected.value, (id) => {
        _push(`<div class="group flex items-center justify-center rounded-full border-[0.7px] border-transparent bg-gray-100 py-1 pr-2 pl-2.5 text-sm text-gray-800 hover:border-gray-200 dark:bg-gray-800 dark:text-white/90 dark:hover:border-gray-800"><span>${ssrInterpolate(options.find((o) => o.id === id)?.name)}</span><button type="button" class="ml-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"><svg class="fill-current" role="button" width="14" height="14" viewBox="0 0 14 14" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.40717 4.46881C3.11428 4.17591 3.11428 3.70104 3.40717 3.40815C3.70006 3.11525 4.17494 3.11525 4.46783 3.40815L6.99943 5.93975L9.53095 3.40822C9.82385 3.11533 10.2987 3.11533 10.5916 3.40822C10.8845 3.70112 10.8845 4.17599 10.5916 4.46888L8.06009 7.00041L10.5916 9.53193C10.8845 9.82482 10.8845 10.2997 10.5916 10.5926C10.2987 10.8855 9.82385 10.8855 9.53095 10.5926L6.99943 8.06107L4.46783 10.5927C4.17494 10.8856 3.70006 10.8856 3.40717 10.5927C3.11428 10.2998 3.11428 9.8249 3.40717 9.53201L5.93877 7.00041L3.40717 4.46881Z" fill=""></path></svg></button></div>`);
      });
      _push(`<!--]-->`);
      if (selected.value.length === 0) {
        _push(`<span class="text-sm text-gray-500 dark:text-gray-400"> Select options... </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex items-start pt-1.5"><svg class="${ssrRenderClass([open.value ? "rotate-180" : "", "h-5 w-5 shrink-0 text-gray-500 transition-transform dark:text-gray-400"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div></div><div class="absolute z-50 mt-1 w-full overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900" style="${ssrRenderStyle([
        { "max-height": "16rem" },
        open.value ? null : { display: "none" }
      ])}"><div class="overflow-y-auto" style="${ssrRenderStyle({ "max-height": "16rem" })}"><!--[-->`);
      ssrRenderList(options, (option) => {
        _push(`<div class="cursor-pointer border-b border-gray-200 px-4 py-3 text-sm transition last:border-b-0 dark:border-gray-800"><span class="text-gray-800 dark:text-white/90">${ssrInterpolate(option.name)}</span></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/form/select/MultipleSelect.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "SelectInputs",
  __ssrInlineRender: true,
  setup(__props) {
    const isOptionSelected = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$d, mergeProps({ title: "Select Inputs" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"${_scopeId}> Select Input </label><div class="relative z-20 bg-transparent"${_scopeId}><select class="${ssrRenderClass([isOptionSelected.value ? "text-gray-800 dark:text-white/90" : "", "dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"])}"${_scopeId}><option value="" class="text-gray-700 dark:bg-gray-900 dark:text-gray-400"${_scopeId}> Select Option </option><option value="" class="text-gray-700 dark:bg-gray-900 dark:text-gray-400"${_scopeId}> Marketing </option><option value="" class="text-gray-700 dark:bg-gray-900 dark:text-gray-400"${_scopeId}> Template </option><option value="" class="text-gray-700 dark:bg-gray-900 dark:text-gray-400"${_scopeId}> Development </option></select><span class="pointer-events-none absolute top-1/2 right-4 z-30 -translate-y-1/2 text-gray-700 dark:text-gray-400"${_scopeId}><svg class="stroke-current" width="20" height="20" viewBox="0 0 20 20" fill="none"${_scopeId}><path d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></path></svg></span></div></div>`);
            _push2(ssrRenderComponent(_sfc_main$4, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", null, [
                createVNode("label", { class: "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400" }, " Select Input "),
                createVNode("div", { class: "relative z-20 bg-transparent" }, [
                  createVNode("select", {
                    class: ["dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pr-11 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30", isOptionSelected.value ? "text-gray-800 dark:text-white/90" : ""],
                    onChange: ($event) => isOptionSelected.value = true
                  }, [
                    createVNode("option", {
                      value: "",
                      class: "text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                    }, " Select Option "),
                    createVNode("option", {
                      value: "",
                      class: "text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                    }, " Marketing "),
                    createVNode("option", {
                      value: "",
                      class: "text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                    }, " Template "),
                    createVNode("option", {
                      value: "",
                      class: "text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                    }, " Development ")
                  ], 42, ["onChange"]),
                  createVNode("span", { class: "pointer-events-none absolute top-1/2 right-4 z-30 -translate-y-1/2 text-gray-700 dark:text-gray-400" }, [
                    (openBlock(), createBlock("svg", {
                      class: "stroke-current",
                      width: "20",
                      height: "20",
                      viewBox: "0 0 20 20",
                      fill: "none"
                    }, [
                      createVNode("path", {
                        d: "M4.79175 7.396L10.0001 12.6043L15.2084 7.396",
                        stroke: "",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ]))
                  ])
                ])
              ]),
              createVNode(_sfc_main$4)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/form/form-elements/SelectInputs.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "TextAreaInputs",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$d, mergeProps({ title: "Textarea input fields" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"${_scopeId}> Description </label><textarea placeholder="Enter a description..." rows="6" class="dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"${_scopeId}></textarea></div><div${_scopeId}><label class="mb-1.5 block text-sm font-medium text-gray-300 dark:text-white/15"${_scopeId}> Description </label><textarea placeholder="Enter a description..." rows="6" disabled class="dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:shadow-focus-ring dark:focus:border-brand-800 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-0 focus:outline-hidden disabled:border-gray-100 disabled:bg-gray-50 disabled:placeholder:text-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:disabled:border-gray-800 dark:disabled:bg-white/[0.03] dark:disabled:placeholder:text-white/15"${_scopeId}></textarea></div><div${_scopeId}><label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"${_scopeId}> Description </label><textarea placeholder="Enter a description..." rows="6" class="dark:bg-dark-900 border-error-300 shadow-theme-xs focus:border-error-300 focus:ring-error-500/10 dark:border-error-700 dark:focus:border-error-800 w-full rounded-lg border bg-transparent px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"${_scopeId}></textarea><p class="text-theme-xs text-error-500"${_scopeId}>Please enter a message in the textarea.</p></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("label", { class: "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400" }, " Description "),
                createVNode("textarea", {
                  placeholder: "Enter a description...",
                  rows: "6",
                  class: "dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"
                })
              ]),
              createVNode("div", null, [
                createVNode("label", { class: "mb-1.5 block text-sm font-medium text-gray-300 dark:text-white/15" }, " Description "),
                createVNode("textarea", {
                  placeholder: "Enter a description...",
                  rows: "6",
                  disabled: "",
                  class: "dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:shadow-focus-ring dark:focus:border-brand-800 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-0 focus:outline-hidden disabled:border-gray-100 disabled:bg-gray-50 disabled:placeholder:text-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:disabled:border-gray-800 dark:disabled:bg-white/[0.03] dark:disabled:placeholder:text-white/15"
                })
              ]),
              createVNode("div", null, [
                createVNode("label", { class: "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400" }, " Description "),
                createVNode("textarea", {
                  placeholder: "Enter a description...",
                  rows: "6",
                  class: "dark:bg-dark-900 border-error-300 shadow-theme-xs focus:border-error-300 focus:ring-error-500/10 dark:border-error-700 dark:focus:border-error-800 w-full rounded-lg border bg-transparent px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"
                }),
                createVNode("p", { class: "text-theme-xs text-error-500" }, "Please enter a message in the textarea.")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/form/form-elements/TextAreaInputs.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "ToggleSwitch",
  __ssrInlineRender: true,
  setup(__props) {
    const toggleOne = ref(false);
    const toggleTwo = ref(true);
    const toggleThree = ref(false);
    const toggleFour = ref(false);
    const toggleFive = ref(true);
    const toggleSix = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$d, mergeProps({ title: "Toggle switch input" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-6 flex flex-wrap items-center gap-6 sm:gap-8"${_scopeId}><label class="flex cursor-pointer items-center gap-3 text-sm font-medium text-gray-700 select-none dark:text-gray-400"${_scopeId}><div class="relative"${_scopeId}><input type="checkbox" class="sr-only"${ssrIncludeBooleanAttr(Array.isArray(toggleOne.value) ? ssrLooseContain(toggleOne.value, null) : toggleOne.value) ? " checked" : ""}${_scopeId}><div class="${ssrRenderClass([toggleOne.value ? "bg-brand-500 dark:bg-brand-500" : "bg-gray-200 dark:bg-white/10", "block h-6 w-11 rounded-full"])}"${_scopeId}></div><div class="${ssrRenderClass([toggleOne.value ? "translate-x-full" : "translate-x-0", "shadow-theme-sm absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white duration-300 ease-linear"])}"${_scopeId}></div></div> Default </label><label class="flex cursor-pointer items-center gap-3 text-sm font-medium text-gray-700 select-none dark:text-gray-400"${_scopeId}><div class="relative"${_scopeId}><input type="checkbox" class="sr-only"${ssrIncludeBooleanAttr(Array.isArray(toggleTwo.value) ? ssrLooseContain(toggleTwo.value, null) : toggleTwo.value) ? " checked" : ""}${_scopeId}><div class="${ssrRenderClass([toggleTwo.value ? "bg-brand-500 dark:bg-brand-500" : "bg-gray-200 dark:bg-white/10", "block h-6 w-11 rounded-full"])}"${_scopeId}></div><div class="${ssrRenderClass([toggleTwo.value ? "translate-x-full" : "translate-x-0", "shadow-theme-sm absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white duration-300 ease-linear"])}"${_scopeId}></div></div> Checked </label><label class="flex cursor-pointer items-center gap-3 text-sm font-medium text-gray-400 select-none"${_scopeId}><div class="relative"${_scopeId}><input type="checkbox" class="sr-only"${ssrIncludeBooleanAttr(Array.isArray(toggleThree.value) ? ssrLooseContain(toggleThree.value, null) : toggleThree.value) ? " checked" : ""} disabled${_scopeId}><div class="${ssrRenderClass([toggleThree.value ? "bg-brand-500 dark:bg-brand-500" : "bg-gray-100 dark:bg-gray-800", "block h-6 w-11 rounded-full"])}"${_scopeId}></div><div class="${ssrRenderClass([toggleThree.value ? "translate-x-full" : "translate-x-0", "shadow-theme-sm absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-gray-50 duration-300 ease-linear"])}"${_scopeId}></div></div> Disabled </label></div><div class="flex flex-wrap items-center gap-6 sm:gap-8"${_scopeId}><label class="flex cursor-pointer items-center gap-3 text-sm font-medium text-gray-700 select-none dark:text-gray-400"${_scopeId}><div class="relative"${_scopeId}><input type="checkbox" class="sr-only"${ssrIncludeBooleanAttr(Array.isArray(toggleFour.value) ? ssrLooseContain(toggleFour.value, null) : toggleFour.value) ? " checked" : ""}${_scopeId}><div class="${ssrRenderClass([toggleFour.value ? "bg-gray-700 dark:bg-white/10" : "bg-gray-200 dark:bg-gray-800", "block h-6 w-11 rounded-full"])}"${_scopeId}></div><div class="${ssrRenderClass([toggleFour.value ? "translate-x-full" : "translate-x-0", "shadow-theme-sm absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white duration-300 ease-linear"])}"${_scopeId}></div></div> Default </label><label class="flex cursor-pointer items-center gap-3 text-sm font-medium text-gray-700 select-none dark:text-gray-400"${_scopeId}><div class="relative"${_scopeId}><input type="checkbox" class="sr-only"${ssrIncludeBooleanAttr(Array.isArray(toggleFive.value) ? ssrLooseContain(toggleFive.value, null) : toggleFive.value) ? " checked" : ""}${_scopeId}><div class="${ssrRenderClass([toggleFive.value ? "bg-gray-700 dark:bg-white/10" : "bg-gray-200 dark:bg-gray-800", "block h-6 w-11 rounded-full"])}"${_scopeId}></div><div class="${ssrRenderClass([toggleFive.value ? "translate-x-full" : "translate-x-0", "shadow-theme-sm absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white duration-300 ease-linear"])}"${_scopeId}></div></div> Checked </label><label class="flex cursor-pointer items-center gap-3 text-sm font-medium text-gray-400 select-none"${_scopeId}><div class="relative"${_scopeId}><input type="checkbox" class="sr-only"${ssrIncludeBooleanAttr(Array.isArray(toggleSix.value) ? ssrLooseContain(toggleSix.value, null) : toggleSix.value) ? " checked" : ""} disabled${_scopeId}><div class="${ssrRenderClass([toggleSix.value ? "bg-gray-700 dark:bg-white/10" : "bg-gray-100 dark:bg-gray-800", "block h-6 w-11 rounded-full"])}"${_scopeId}></div><div class="${ssrRenderClass([toggleSix.value ? "translate-x-full" : "translate-x-0", "shadow-theme-sm absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-gray-50 duration-300 ease-linear"])}"${_scopeId}></div></div> Disabled </label></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-6 flex flex-wrap items-center gap-6 sm:gap-8" }, [
                createVNode("label", { class: "flex cursor-pointer items-center gap-3 text-sm font-medium text-gray-700 select-none dark:text-gray-400" }, [
                  createVNode("div", { class: "relative" }, [
                    withDirectives(createVNode("input", {
                      type: "checkbox",
                      class: "sr-only",
                      "onUpdate:modelValue": ($event) => toggleOne.value = $event
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelCheckbox, toggleOne.value]
                    ]),
                    createVNode("div", {
                      class: ["block h-6 w-11 rounded-full", toggleOne.value ? "bg-brand-500 dark:bg-brand-500" : "bg-gray-200 dark:bg-white/10"]
                    }, null, 2),
                    createVNode("div", {
                      class: ["shadow-theme-sm absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white duration-300 ease-linear", toggleOne.value ? "translate-x-full" : "translate-x-0"]
                    }, null, 2)
                  ]),
                  createTextVNode(" Default ")
                ]),
                createVNode("label", { class: "flex cursor-pointer items-center gap-3 text-sm font-medium text-gray-700 select-none dark:text-gray-400" }, [
                  createVNode("div", { class: "relative" }, [
                    withDirectives(createVNode("input", {
                      type: "checkbox",
                      class: "sr-only",
                      "onUpdate:modelValue": ($event) => toggleTwo.value = $event
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelCheckbox, toggleTwo.value]
                    ]),
                    createVNode("div", {
                      class: ["block h-6 w-11 rounded-full", toggleTwo.value ? "bg-brand-500 dark:bg-brand-500" : "bg-gray-200 dark:bg-white/10"]
                    }, null, 2),
                    createVNode("div", {
                      class: ["shadow-theme-sm absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white duration-300 ease-linear", toggleTwo.value ? "translate-x-full" : "translate-x-0"]
                    }, null, 2)
                  ]),
                  createTextVNode(" Checked ")
                ]),
                createVNode("label", { class: "flex cursor-pointer items-center gap-3 text-sm font-medium text-gray-400 select-none" }, [
                  createVNode("div", { class: "relative" }, [
                    withDirectives(createVNode("input", {
                      type: "checkbox",
                      class: "sr-only",
                      "onUpdate:modelValue": ($event) => toggleThree.value = $event,
                      disabled: ""
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelCheckbox, toggleThree.value]
                    ]),
                    createVNode("div", {
                      class: ["block h-6 w-11 rounded-full", toggleThree.value ? "bg-brand-500 dark:bg-brand-500" : "bg-gray-100 dark:bg-gray-800"]
                    }, null, 2),
                    createVNode("div", {
                      class: ["shadow-theme-sm absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-gray-50 duration-300 ease-linear", toggleThree.value ? "translate-x-full" : "translate-x-0"]
                    }, null, 2)
                  ]),
                  createTextVNode(" Disabled ")
                ])
              ]),
              createVNode("div", { class: "flex flex-wrap items-center gap-6 sm:gap-8" }, [
                createVNode("label", { class: "flex cursor-pointer items-center gap-3 text-sm font-medium text-gray-700 select-none dark:text-gray-400" }, [
                  createVNode("div", { class: "relative" }, [
                    withDirectives(createVNode("input", {
                      type: "checkbox",
                      class: "sr-only",
                      "onUpdate:modelValue": ($event) => toggleFour.value = $event
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelCheckbox, toggleFour.value]
                    ]),
                    createVNode("div", {
                      class: ["block h-6 w-11 rounded-full", toggleFour.value ? "bg-gray-700 dark:bg-white/10" : "bg-gray-200 dark:bg-gray-800"]
                    }, null, 2),
                    createVNode("div", {
                      class: ["shadow-theme-sm absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white duration-300 ease-linear", toggleFour.value ? "translate-x-full" : "translate-x-0"]
                    }, null, 2)
                  ]),
                  createTextVNode(" Default ")
                ]),
                createVNode("label", { class: "flex cursor-pointer items-center gap-3 text-sm font-medium text-gray-700 select-none dark:text-gray-400" }, [
                  createVNode("div", { class: "relative" }, [
                    withDirectives(createVNode("input", {
                      type: "checkbox",
                      class: "sr-only",
                      "onUpdate:modelValue": ($event) => toggleFive.value = $event
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelCheckbox, toggleFive.value]
                    ]),
                    createVNode("div", {
                      class: ["block h-6 w-11 rounded-full", toggleFive.value ? "bg-gray-700 dark:bg-white/10" : "bg-gray-200 dark:bg-gray-800"]
                    }, null, 2),
                    createVNode("div", {
                      class: ["shadow-theme-sm absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white duration-300 ease-linear", toggleFive.value ? "translate-x-full" : "translate-x-0"]
                    }, null, 2)
                  ]),
                  createTextVNode(" Checked ")
                ]),
                createVNode("label", { class: "flex cursor-pointer items-center gap-3 text-sm font-medium text-gray-400 select-none" }, [
                  createVNode("div", { class: "relative" }, [
                    withDirectives(createVNode("input", {
                      type: "checkbox",
                      class: "sr-only",
                      "onUpdate:modelValue": ($event) => toggleSix.value = $event,
                      disabled: ""
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelCheckbox, toggleSix.value]
                    ]),
                    createVNode("div", {
                      class: ["block h-6 w-11 rounded-full", toggleSix.value ? "bg-gray-700 dark:bg-white/10" : "bg-gray-100 dark:bg-gray-800"]
                    }, null, 2),
                    createVNode("div", {
                      class: ["shadow-theme-sm absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-gray-50 duration-300 ease-linear", toggleSix.value ? "translate-x-full" : "translate-x-0"]
                    }, null, 2)
                  ]),
                  createTextVNode(" Disabled ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/form/form-elements/ToggleSwitch.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$e
}, {
  __name: "FormElements",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Form Elements" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$f, { pageTitle: "From Elements" }, null, _parent));
      _push(`<div class="grid grid-cols-1 gap-6 xl:grid-cols-2"><div class="space-y-6">`);
      _push(ssrRenderComponent(_sfc_main$a, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(`</div><div class="space-y-6">`);
      _push(ssrRenderComponent(_sfc_main$7, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$8, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$c, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$9, null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Form/FormElements.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
