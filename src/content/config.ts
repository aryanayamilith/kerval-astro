import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    category: z.string(),
    // Cambiamos z.string() por z.coerce.date()
    // Esto acepta tanto texto como fechas reales y las convierte correctamente
    date: z.coerce.date(),
    author: z.string().optional(),
    image: z.string().optional(),
    description: z.string().optional(),

    // ✅ SEO (opcionales, no rompen posts existentes)
    seoTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    canonical: z.string().optional(),
    noindex: z.boolean().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
