import {
  resultWithCollectionSchema,
  collectionWithMediaSchema,
} from "@/models/collections";
import type {
  collection,
  collectionMediaT,
  collectionResult,
} from "@/models/collections";
import env from "./env";

export async function fetchCollection(): Promise<collectionResult | undefined> {
  const url = "https://api.pexels.com/v1/collections/featured?per_page=15";

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: env.PEXEL_API_KEY,
      },
    });
    if (!res.ok) throw new Error("failed to fetch featured collections");
    const result: collectionResult = await res.json();
    const parsedData = resultWithCollectionSchema.parse(result);
    if (parsedData.total_results === 0) return;

    if(parsedData.collections) 
    {
        const collectiveId = parsedData.collections.map(collection => collection.id)
        console.log(collectiveId);
        const resultant = collectiveId.map((id)=> fetchCollectionImages(id))
        
    } 

    return parsedData;
  } catch (e) {
    if (e instanceof Error) console.log(e.message);
  }
}
// "https://api.pexels.com/v1/collections/9mp14cx?per_page=1&sort=desc"

export async function fetchCollectionImages(id: string) :Promise<collectionMediaT | undefined>{
  const url = `https://api.pexels.com/v1/collections/${id}?per_page=1&sort=desc`;
  try {
    const res = await fetch(url, {
      headers: { Authorization: env.PEXEL_API_KEY },
    });
    if (!res.ok) throw new Error("failled to load images from the collection");
    const result: collectionMediaT = await res.json();
    const parsedMedia = collectionWithMediaSchema.parse(result);

    if (parsedMedia.total_results === 0) return undefined;
    return parsedMedia;
    
  } catch (e) {
    if (e instanceof Error) console.log(e.message);
  }
}
