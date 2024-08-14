import type { Photos } from "@/models/image";
import Image from "next/image";
import Link from "next/link";

type Prop = {
  photo: Photos;
};

export default function ImgContainer({ photo }: Prop) {
  const widthHeightRatio = photo.height / photo.width;
  const galleryHeight = Math.ceil(250 * widthHeightRatio);
  const photoSpan = Math.ceil(galleryHeight / 10) + 1;
  return (
    <div
      className="w-[250px] justify-self-center"
      style={{ gridRow: `span ${photoSpan}` }}
    >
      <Link
        href={photo.url}
        target="_blank"
        className="grid place-content-center"
      >
        <div className="rounded-xl overflow-hidden group">
          <Image
            src={photo.src.large}
            width={250}
            height={galleryHeight}
            sizes="250px"
            className="group-hover:opacity-75"
            alt={photo.alt}
          />
          {/* <div className="relative hidden group-hover:block bottom-9 p-2 rounded-xl bg-black text-gray-300 bg-opacity-30" >
            <h2> <span>By</span> {photo.photographer} </h2>
          </div> */}
        </div>
      </Link>
    </div>
  );
}
