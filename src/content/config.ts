import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    cover: z.string().optional(),
    author: z.string().default('Tim AIBS'),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

const hero = defineCollection({
  type: 'data',
  schema: z.object({
    badge: z.string(),
    headline: z.string(),
    highlight: z.string(),
    description: z.string(),
    ctaPrimary: z.object({
      text: z.string(),
      href: z.string(),
    }),
    ctaSecondary: z.object({
      text: z.string(),
      href: z.string(),
    }),
  }),
});

export const collections = { blog, hero };
