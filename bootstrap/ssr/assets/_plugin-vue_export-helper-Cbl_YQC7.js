import { ref, onMounted, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
const _sfc_main = {
  __name: "Preloader",
  __ssrInlineRender: true,
  setup(__props) {
    const loaded = ref(true);
    onMounted(() => {
      setTimeout(() => {
        loaded.value = false;
      }, 350);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed left-0 top-0 z-999999 flex h-screen w-screen items-center justify-center bg-white dark:bg-black" }, _attrs, {
        style: loaded.value ? null : { display: "none" }
      }))}><div class="h-16 w-16 animate-spin rounded-full border-4 border-solid border-brand-500 border-t-transparent"></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/common/Preloader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const theme = ref("light");
let initialized = false;
const applyTheme = (nextTheme) => {
  if (typeof document === "undefined") {
    return;
  }
  const html = document.documentElement;
  const body = document.body;
  if (nextTheme === "dark") {
    html.classList.add("dark");
    body.classList.add("dark", "bg-gray-900");
  } else {
    html.classList.remove("dark");
    body.classList.remove("dark", "bg-gray-900");
  }
};
const initTheme = () => {
  if (initialized || typeof window === "undefined") {
    return;
  }
  const savedTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  theme.value = savedTheme || systemTheme;
  applyTheme(theme.value);
  initialized = true;
};
const toggleTheme = () => {
  theme.value = theme.value === "light" ? "dark" : "light";
  if (typeof window !== "undefined") {
    localStorage.setItem("theme", theme.value);
  }
  applyTheme(theme.value);
};
const useThemeStore = () => ({
  theme,
  initTheme,
  toggleTheme,
  applyTheme
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
export {
  _export_sfc as _,
  _sfc_main as a,
  useThemeStore as u
};
