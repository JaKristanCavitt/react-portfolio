import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],

  // GitHub Pages needs the repository name in the path.
  // Vercel uses the website root.
  base: mode === "github" ? "/react-portfolio/" : "/",
}));