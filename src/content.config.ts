import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const featuredProjects = defineCollection({
  loader: glob({ pattern: "featuredProjects.json", base: "./src/content/settings" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(["Residencial", "Comercial", "Corporativo", "Hospitality"]),
    image: z.string(),
    featured: z.boolean().default(false),
    gallery: z.array(z.string()).optional(),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.enum(["grafismo-34", "grafismo-35", "grafismo-36"]),
    order: z.number().default(1),
  }),
});

const servicesHome = defineCollection({
  loader: glob({ pattern: "services.json", base: "./src/content/settings" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const about = defineCollection({
  loader: glob({ pattern: "about.json", base: "./src/content/settings" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    content: z.string(),
    photo: z.string(),
  }),
});

const contact = defineCollection({
  loader: glob({ pattern: "contact.json", base: "./src/content/settings" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const projectsPage = defineCollection({
  loader: glob({ pattern: "projectsPage.json", base: "./src/content/settings" }),
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
  projectsPage,
};