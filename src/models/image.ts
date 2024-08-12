import { z } from "zod";

const imageSchema = z.object({
  page: z.number(),
  per_page: z.number(),
  total_results: z.number().optional(),
  prev_page: z.string().optional(),
  next_page: z.string().optional(),
});

const photoSchema = z.object({
  id: z.number(),
  width: z.number(),
  height: z.number(),
  url: z.string(),
  src: z.object({
    large: z.string(),
  }),
  alt: z.string(),
  blurredDataUrl: z.string().optional(),
});

export const imageSchemaWithPhoto = imageSchema.extend({
  photos: z.array(photoSchema),
});
export type Photos = z.infer<typeof photoSchema>;
export type ImagesResult = z.infer<typeof imageSchemaWithPhoto>;
