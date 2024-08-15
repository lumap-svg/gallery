import { fetchCollection } from "@/lib/fetchCollection";
import type { collectionMediaT, mediaT } from "@/models/collections";
import Image from "next/image";
export default async function page() {
  const collectionsResults :(collectionMediaT | undefined )[] |undefined =  await fetchCollection();
  console.log(collectionsResults)
  return (
  
    <div className=" grid grid-cols-3">
      {
        collectionsResults && collectionsResults.map((collection) => (
        
          <div key={collection?.id} className="h-64 bg-black bg-opacity-30 grid grid-cols-5 rounded-xl m-3" >{collection?.media.map(data => <ImageConatiner key={data.id} data ={data} />)}</div>
        
        ))
      }
    </div>

    
  );
}
type imgT ={
  data:mediaT
}

function ImageConatiner ({data}:imgT){
  return (<div>
  
    <Image  priority src={data.src.large} alt={data.alt} height={250} width={250}/>
  </div> )
}