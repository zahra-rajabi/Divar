import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { paths } from "./src/constant/paths";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      ...paths.reduce(
        (acc, cur) => ({
          ...acc,
          [cur]: `/${cur === "src" ? cur : "src/" + cur}`,
        }),
        ""
      ),
    },
  },
});
