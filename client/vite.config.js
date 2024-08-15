import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://mern-blog-app-u2sr.onrender.com",
        secure: false,
      },
    },
  },
  plugins: [react()],
});
