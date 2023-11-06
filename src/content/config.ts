import { defineCollection, reference, z } from 'astro:content';

const websitesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().nullable(),
        url: z.string(),
        tags: z.array(z.string()),
        image: z.any().optional().nullable(),
        listedDate: z.date(),
        published: z.boolean(),
    })
});

export const collections = { 'websites': websitesCollection };