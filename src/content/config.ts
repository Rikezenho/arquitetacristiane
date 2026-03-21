import { defineCollection, z } from "astro:content";

const featuredProjects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
  })
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum([
      "Residencial",
      "Comercial",
      "Corporativo",
      "Hospitality",
    ]),
    image: z.string(),
    featured: z.boolean().default(false),
    gallery: z.array(z.string()).optional(),
  }),
});

const services = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.enum(["grafismo-34", "grafismo-35", "grafismo-36"]),
    order: z.number().default(1),
  }),
});

const servicesHome = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const about = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    content: z.string(),
    photo: z.string(),
  }),
});

const contact = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  featuredProjects,
  projects,
  services,
  servicesHome,
  about,
  contact,
};
