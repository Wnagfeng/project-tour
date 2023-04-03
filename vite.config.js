import { fileURLToPath, URL } from "node:url";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  // css: {
  //   postcss: {
  //     plugins: [
  //       postCssPxToRem({
  //         rootValue: 75, // 1rem，根据 设计稿宽度/10 进行设置
  //         propList: ["*"], // 需要转换的属性，这里选择全部都进行转换
  //       }),
  //     ],
  //   },
  // },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
