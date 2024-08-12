import type { ImagesResult } from "@/models/image";
import { imageSchemaWithPhoto } from "@/models/image";
import env from "./env";

export const fetchImages = async (
  url: string
): Promise<ImagesResult | undefined> => {
  try {
    const res = await fetch(url, {
      headers: { Authorization: env.PEXEL_API_KEY },
    });
    if (!res.ok) throw new Error("Fetching images error \n");
    const imageResults: ImagesResult = await res.json();
    const parsedData = imageSchemaWithPhoto.parse(imageResults);
    if (parsedData.total_results === 0) return undefined;
    return parsedData;
  } catch (e) {
    if (e instanceof Error) console.log(e.stack);
  }
};
