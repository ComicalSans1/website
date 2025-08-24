import { defineCollection, z } from 'astro:content';

// Define a reusable schema for all blog-like collections
const blogSchema = z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    coverImage: z.string().optional(),
    coverAlt: z.string().optional(),
});

// Define each "sub-blog" as a collection
export const collections = {
  'cs': defineCollection({
    type: 'content',
    schema: blogSchema,
  }),
  'philosophy': defineCollection({
    type: 'content',
    schema: blogSchema,
  }),
  'music': defineCollection({
    type: 'content',
    schema: blogSchema,
  }),
};