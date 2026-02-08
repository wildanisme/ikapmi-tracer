import { createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import { createSSRApp, h } from "vue";
async function resolvePageComponent(path, pages) {
  for (const p of Array.isArray(path) ? path : [path]) {
    const page = pages[p];
    if (typeof page === "undefined") {
      continue;
    }
    return typeof page === "function" ? page() : page;
  }
  throw new Error(`Page not found: ${path}`);
}
const titleSuffix = "TailAdmin - Laravel Tailwind CSS Admin Dashboard Template";
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    title: (title) => title ? `${title} | ${titleSuffix}` : titleSuffix,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, /* @__PURE__ */ Object.assign({ "./Pages/Auth/SignIn.vue": () => import("./assets/SignIn-UhbckBdu.js"), "./Pages/Auth/SignUp.vue": () => import("./assets/SignUp-s3h6QZsy.js"), "./Pages/Blank.vue": () => import("./assets/Blank-C8dA-su5.js"), "./Pages/Calendar.vue": () => import("./assets/Calendar-vyN-4T1D.js"), "./Pages/Chart/BarChart.vue": () => import("./assets/BarChart-CxntCKqd.js"), "./Pages/Chart/LineChart.vue": () => import("./assets/LineChart-CUwTm_qU.js"), "./Pages/Dashboard/Ecommerce.vue": () => import("./assets/Ecommerce-MtZYJVlE.js"), "./Pages/Errors/Error404.vue": () => import("./assets/Error404-BqEJySn4.js"), "./Pages/Form/FormElements.vue": () => import("./assets/FormElements-DTWTcx2u.js"), "./Pages/Profile/Profile.vue": () => import("./assets/Profile-Bn4hHrvu.js"), "./Pages/Tables/BasicTables.vue": () => import("./assets/BasicTables-OJu8VxYH.js"), "./Pages/UIElements/Alerts.vue": () => import("./assets/Alerts-h5-szHhO.js"), "./Pages/UIElements/Avatars.vue": () => import("./assets/Avatars-C3ZLUvtI.js"), "./Pages/UIElements/Badges.vue": () => import("./assets/Badges-Dh1yzmuM.js"), "./Pages/UIElements/Buttons.vue": () => import("./assets/Buttons-Ch_qeO0L.js"), "./Pages/UIElements/Images.vue": () => import("./assets/Images-fgonsmyt.js"), "./Pages/UIElements/Videos.vue": () => import("./assets/Videos-D8V8K0nW.js") })),
    setup({ App, props, plugin }) {
      return createSSRApp({ render: () => h(App, props) }).use(plugin);
    }
  })
);
