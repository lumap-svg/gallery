import { fetchCollectionImages, fetchCollection } from "@/lib/fetchCollection";
import type { collectionResult, collection, collectionMediaT } from "@/models/collections";

function collectId(collection: collection[]) {
  let media:collectionMediaT[]= [];
  const collectiveId = collection.map((item) => item.id);
  console.log(collectiveId);
  collectiveId.map(async (id) => {
    // const data:collectionMediaT | undefined = fetchCollectionImages(id)
    // if (data) media.push(data);
    // console.log(data)
    await fetchCollectionImages(id)
  });
  console.log("collection ready")

}

export default async function page() {
  const collectionsResults: collectionResult | undefined =
    await fetchCollection();
  const collect = collectionsResults?.collections;
  if (collect) collectId(collect);
  return <div>page</div>;
}
