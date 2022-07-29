import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

function pathResolve(dir: string) {
  return resolve(process.cwd(), ".", dir);
}

export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".jsx"],
    //设置路径别名
    alias: [
      {
        find: /\/@\//,
        replacement: pathResolve("src") + "/",
      },
      {
        find: /\/#\//,
        replacement: pathResolve("types") + "/",
      },
    ],
  },
  server: {
    hmr: true,
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
