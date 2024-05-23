import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: [
        resolve(__dirname, "src/index.ts"),
      ],
      name: "OPT",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `index.${format}.js`,
    }
  },
});