import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import compress from "astro-compress";
import gfm from "remark-gfm";

import readTimePlugin from "./src/lib/readTime.mjs";

const remarkPlugins = [readTimePlugin, gfm];

// https://astro.build/config
export default defineConfig({
  integrations: [mdx({ remarkPlugins }), sitemap(), compress(), robotsTxt()],
  markdown: { remarkPlugins },
  site: "https://zynh.me/",
});
