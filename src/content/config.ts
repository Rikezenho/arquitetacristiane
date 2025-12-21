import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        category: z.enum(['Residencial', 'Comercial', 'Corporativo', 'Hospitality']),
        image: z.string(),
        featured: z.boolean().default(false),
        gallery: z.array(z.string()).optional(),
    }),
});

const services = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        icon: z.enum(['home', 'building', 'palette', 'ruler', 'lightbulb', 'sofa']),
        order: z.number().default(1),
    }),
});

export const collections = {
    projects,
    services,
};
