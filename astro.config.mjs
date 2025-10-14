// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://tu-sofia-lessons.github.io",
  base: "/devops-ci-cd",
  trailingSlash: "ignore", // Поддържа URL-и със и без trailing slash
});
