import Gallery from "@/app/components/Gallery";
import { title } from "process";
type TSearch = {
  params: {
    term: string;
  };
};
export function generateMetadata({ params }: TSearch) {
  return;
  {
    title: `results for ${params.term}`;
  }
}

export default function SearchResults({ params }: TSearch) {
  return <Gallery topic={params.term} />;
}
