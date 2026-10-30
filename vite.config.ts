import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import vueRouter from "vue-router/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vueRouter({
      dts: "src/types/typed-router.d.ts",
    }),
    vue(),
    tailwindcss(),
  ],
});
