// @ts-check
import { defineConfig } from 'astro/config';
import rehypeKatex from 'rehype-katex';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMath from 'remark-math';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

// https://astro.build/config
export default defineConfig({
    markdown: {
        remarkPlugins: [remarkMath, remarkFrontmatter, remarkMdxFrontmatter],
        rehypePlugins: [rehypeKatex],
    },

});

