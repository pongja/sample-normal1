/* eslint-disable semi */
/* eslint-disable quotes */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  server: { https: false },
  plugins: [
    vue({
      reactivityTransform: true,
    }),
  ],
  resolve: {
    alias: [
      { find: "~", replacement: `${__dirname}/src` }, //폴더경로 임의 지정
    ],
  },
  build: {
    //빌드시 검사할 vite.conf
    minify: "terser",
    base: "./public/",
    terserOptions: {
      compress: {
        drop_console: true, //콘솔자동제거
        drop_debugger: true,
      },
    },
    rollupOptions: {
      external: [/^node:.*/],
    },
  },
});
