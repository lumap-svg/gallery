// "https://api.pexels.com/v1/collections/9mp14cx?per_page=1&sort=desc"

import { type collectionMediaT, collectionWithMediaSchema } from "@/models/collections";
import env from "./env";

export async function fetchCollectionImages(id: string, count:number) :Promise<collectionMediaT | undefined>{
  let per_page=1
  if(count > 3) per_page  =3 
  const url = `https://api.pexels.com/v1/collections/${id}?per_page=${per_page}&sort=desc`;
    try {
      const res = await fetch(url, {
        headers: { Authorization: env.PEXEL_API_KEY },
      });
      if (!res.ok) throw new Error("failled to load images from the collection");
      const result = await res.json();
      console.log(result)
      const parsedMedia = collectionWithMediaSchema.parse(result);
  
      if (parsedMedia.total_results === 0) return undefined;
      return parsedMedia;
      
    } catch (e) {
      if (e instanceof Error) console.log(e.message);
    }
  }
  