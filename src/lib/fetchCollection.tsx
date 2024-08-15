import {
  resultWithCollectionSchema,
} from "@/models/collections";
import type {
  collectionMediaT,
  collectionResult,
} from "@/models/collections";
import env from "./env";
import { fetchCollectionImages } from "./fetchCollectionWithId";

export async function fetchCollection() :Promise<(collectionMediaT |undefined )[] |undefined>{
  const url = "https://api.pexels.com/v1/collections/featured?per_page=15";
 let sponse:collectionMediaT| undefined;
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: env.PEXEL_API_KEY,
      },
    });
    if (!res.ok) throw new Error("failed to fetch featured collections");
    const result: collectionResult = await res.json();
    const parsedData = resultWithCollectionSchema.parse(result);
    if (parsedData.total_results === 0) {
      sponse=undefined
  };

    if(parsedData.collections) 
    {
        const collectiveIds = parsedData.collections.map(collection => ({id:collection.id,
          count:collection.photos_count 
        }))
        console.log(collectiveIds);
        console.log("started displaying collection data")

        const fetchImagePromises = collectiveIds.map(collection => fetchCollectionImages(collection.id, collection.count));
        const imageResults:(collectionMediaT |undefined )[] = await Promise.all(fetchImagePromises);
  
        return imageResults
        
      } 

  } catch (e) {
    if (e instanceof Error) console.log(e.message);
  }
}
