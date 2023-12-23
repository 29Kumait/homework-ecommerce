import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/homework-ecommerce/",
  esbuild: {
    loader: "jsx", // This sets the JSX loader for all files
  },
});
