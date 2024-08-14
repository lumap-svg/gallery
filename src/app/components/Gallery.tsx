import { fetchImages } from "@/lib/fetchImages";
import type { ImagesResult } from "@/models/image";
import ImgContainer from "./ImgContainer";
type Props = {
  topic?: string | undefined;
};

export default async function Gallery({ topic }: Props) {

  const url = !topic
    ? "https://api.pexels.com/v1/curated?per_page=80"
    : `https://api.pexels.com/v1/search?query=${topic}&per_page=80`;
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
