import { unref, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AppLayout-DmZYFPyg.js";
import { _ as _sfc_main$3 } from "./ComponentCard-BwdxZ9h6.js";
import { _ as _sfc_main$2 } from "./PageBreadcrumb-ClrrUjmW.js";
import "./_plugin-vue_export-helper-Cbl_YQC7.js";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "Images",
  __ssrInlineRender: true,
  setup(__props) {
    const images = [
      {
        src: "/images/grid-image/image-04.png",
        alt: "Grid image 1"
      },
      {
        src: "/images/grid-image/image-05.png",
        alt: "Grid image 2"
      },
      {
        src: "/images/grid-image/image-06.png",
        alt: "Grid image 3"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Images" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { pageTitle: "Images" }, null, _parent));
      _push(`<div class="space-y-5 sm:space-y-6">`);
      _push(ssrRenderComponent(_sfc_main$3, { title: "Responsive Image" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative"${_scopeId}><div id="pane" class="overflow-hidden"${_scopeId}><img src="/images/grid-image/image-01.png" alt="Cover" class="w-full border border-gray-200 rounded-xl dark:border-gray-800"${_scopeId}></div><div id="ghostpane" class="absolute top-0 left-0 duration-300 ease-in-out"${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative" }, [
                createVNode("div", {
                  id: "pane",
                  class: "overflow-hidden"
                }, [
                  createVNode("img", {
                    src: "/images/grid-image/image-01.png",
                    alt: "Cover",
                    class: "w-full border border-gray-200 rounded-xl dark:border-gray-800"
                  })
                ]),
                createVNode("div", {
                  id: "ghostpane",
                  class: "absolute top-0 left-0 duration-300 ease-in-out"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$3, { title: "Image in 2 Grid" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 gap-5 sm:grid-cols-2"${_scopeId}><div${_scopeId}><img src="/images/grid-image/image-02.png" alt="grid" class="w-full border border-gray-200 rounded-xl dark:border-gray-800"${_scopeId}></div><div${_scopeId}><img src="/images/grid-image/image-03.png" alt="grid" class="w-full border border-gray-200 rounded-xl dark:border-gray-800"${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 gap-5 sm:grid-cols-2" }, [
                createVNode("div", null, [
                  createVNode("img", {
                    src: "/images/grid-image/image-02.png",
                    alt: "grid",
                    class: "w-full border border-gray-200 rounded-xl dark:border-gray-800"
                  })
                ]),
                createVNode("div", null, [
                  createVNode("img", {
                    src: "/images/grid-image/image-03.png",
                    alt: "grid",
                    class: "w-full border border-gray-200 rounded-xl dark:border-gray-800"
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$3, { title: "Image in 3 Grid" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 gap-5 sm:grid-cols-3"${_scopeId}><!--[-->`);
            ssrRenderList(images, (image) => {
              _push2(`<div${_scopeId}><img${ssrRenderAttr("src", image.src)}${ssrRenderAttr("alt", image.alt)} class="w-full border border-gray-200 rounded-xl dark:border-gray-800"${_scopeId}></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 gap-5 sm:grid-cols-3" }, [
                (openBlock(), createBlock(Fragment, null, renderList(images, (image) => {
                  return createVNode("div", {
                    key: image.src
                  }, [
                    createVNode("img", {
                      src: image.src,
                      alt: image.alt,
                      class: "w-full border border-gray-200 rounded-xl dark:border-gray-800"
                    }, null, 8, ["src", "alt"])
                  ]);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/UIElements/Images.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
