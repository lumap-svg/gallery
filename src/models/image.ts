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
  photographer:z.string(),
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

// {
//   "total_results": 10000,
//   "page": 1,
//   "per_page": 1,
//   "photos": [
//     {
//       "id": 3573351,
//       "width": 3066,
//       "height": 3968,
//       "url": "https://www.pexels.com/photo/trees-during-day-3573351/",
//       
//       "photographer_url": "https://www.pexels.com/@lukas-rodriguez-1845331",
//       "photographer_id": 1845331,
//       "avg_color": "#374824",
//       "src": {
//         "original": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png",
//         "large2x": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//         "large": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=650&w=940",
//         "medium": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=350",
//         "small": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=130",
//         "portrait": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
//         "landscape": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
//         "tiny": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
//       },
//       "liked": false,
//       "alt": "Brown Rocks During Golden Hour"
//     }
//   ],
//   "next_page": "https://api.pexels.com/v1/search/?page=2&per_page=1&query=nature"
// }
