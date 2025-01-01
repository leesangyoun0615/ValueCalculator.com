import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // GitHub Pages 또는 다른 경로에 맞게 설정
  plugins: [react()],
});
