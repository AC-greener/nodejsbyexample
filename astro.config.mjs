import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  markdown: {
    shikiConfig: {
      // 选择 Shiki 内置的主题（或添加你自己的主题）
      // https://shiki.style/themes
      // theme: 'dracula',
      // 另外，也提供了多种主题
      // https://shiki.style/guide/dual-themes
      themes: {
        // light: 'andromeeda',
        // light: 'github-light',
        // light: 'material-theme-lighter',
        // light: 'min-light',
        // light: 'solarized-light',
        light: 'vitesse-light',
      },
      // 添加自定义语言
      // 注意：Shiki 内置了无数语言，包括 .astro！
      // https://shiki.style/languages
      langs: [],
      // 启用自动换行，以防止水平滚动
      wrap: true,
      // 添加自定义转换器：https://shiki.style/guide/transformers
      // 查找常用转换器：https://shiki.style/packages/transformers
      transformers: [],
    },
  },
});