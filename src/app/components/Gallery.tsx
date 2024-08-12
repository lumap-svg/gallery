import { fetchImages } from "@/lib/fetchImages";
import type { ImagesResult } from "@/models/image";
import ImgContainer from "./ImgContainer";
export default async function Gallery() {
  const url = "https://api.pexels.com/v1/curated";
  const images: ImagesResult | undefined = await fetchImages(url);
  if (!images)
    return <h2 className="m-4 text-2xl font-bold">No images found</h2>;
  return (
    <section className="px-2 my-3 gap-1 grid grid-cols-gallery">
      {images.photos.map((photo) => (
        <ImgContainer key={photo.id} photo={photo} />
      ))}
    </section>
  );
}
