import { z } from "zod";

const resultSchema = z.object({
  page: z.number(),
  per_page: z.number(),
  total_results: z.number(),
  next_page: z.string(),
});
const collectionSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  photos_count: z.number(),
});
export const resultWithCollectionSchema = resultSchema.extend({
  collections: z.array(collectionSchema),
});

export type collectionResult = z.infer<typeof resultWithCollectionSchema>;
export type collection = z.infer<typeof collectionSchema>;

const collectionsResultSchema = z.object({
  id: z.string(),
  page: z.number(),
  per_page: z.number(),
  total_results: z.number(),
  next_page: z.string(),
});
const mediaSchema = z.object({
  id: z.number(),
  width: z.number(),
  height: z.number(),
  url: z.string(),
  photographer: z.string(),
  photographer_url: z.string(),
  alt: z.string(),
  src: z.object({
    large: z.string(),
  }),
});

export const collectionWithMediaSchema = collectionsResultSchema.extend({
  media: z.array(mediaSchema),
});

export type collectionMediaT = z.infer<typeof collectionWithMediaSchema>;
export type mediaT = z.infer<typeof mediaSchema>;
