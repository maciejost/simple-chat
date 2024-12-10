import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/simple-chat/",

  resolve: {
    alias: [
      {
        find: "@data",
        replacement: path.join(__dirname, "src/data"),
      },
      {
        find: "@utils",
        replacement: path.join(__dirname, "src/utils"),
      },
      {
        find: "@components",
        replacement: path.join(__dirname, "src/components"),
      },
      {
        find: "src",
        replacement: path.join(__dirname, "src"),
      },
    ],
  },
});
