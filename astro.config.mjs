// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import alpinejs from "@astrojs/alpinejs";

import sitemap from "@astrojs/sitemap";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
	site: "https://ecuadorintech.org",
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		alpinejs(),
		sitemap(),
		compressor(),
	],
});
