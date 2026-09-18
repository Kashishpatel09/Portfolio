import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Set `base` to "/<your-repo-name>/" before deploying to GitHub Pages.
// For Vercel/Netlify, leave it as "/".
export default defineConfig({
  plugins: [react()],
  base: "/",
});
