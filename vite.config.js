import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Personal-Website/", // Trebuie să corespundă cu numele repo-ului de pe GitHub
});
