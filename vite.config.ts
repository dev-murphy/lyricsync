import { defineConfig } from "vite";
import autoImport from "unplugin-auto-import/vite";
import components from "unplugin-vue-components/vite";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import vueRouter from "vue-router/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    autoImport({
      imports: ["vue"],
      dirs: ["src/stores"],
      dts: "src/types/auto-imports.d.ts",
    }),
    components({
      extensions: ["vue"],
      dts: "src/types/components.d.ts",
    }),
    vueRouter({
      dts: "src/types/typed-router.d.ts",
    }),
    vue(),
    tailwindcss(),
  ],
});
