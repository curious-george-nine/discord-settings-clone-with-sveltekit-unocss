import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";
import { extractorSvelte } from "@unocss/core";
import presetAttributify from "@unocss/preset-attributify";
import { presetUno } from "unocss";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    UnoCSS({
      extractors: [extractorSvelte],
      mode: "svelte-scoped",
      presets: [presetAttributify(), presetUno()],
    }),
    sveltekit(),
  ],
};

export default defineConfig(config);
