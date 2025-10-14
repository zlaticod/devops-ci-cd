// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://mydomain.com",
  base: "/",
  trailingSlash: "ignore", // Поддържа URL-и със и без trailing slash
});
