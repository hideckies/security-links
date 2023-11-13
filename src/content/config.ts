import { defineCollection, reference, z } from 'astro:content';
// import { rssSchema } from '@astrojs/rss';

const websites = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().nullable(),
        url: z.string(),
        tags: z.array(z.string()),
        image: z.any().optional().nullable(),
        pubDate: z.date(),
        draft: z.boolean(),
    })
    // schema: rssSchema,
});

export const collections = { 'websites': websites };