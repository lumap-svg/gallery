"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/results/${search}`);
    setSearch("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center md:justify-between"
    >
      <input
        type="text"
        value={search}
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white p-2 w-[260px] sm:w-80 text-xl text-black rounded-xl"
      />
    </form>
  );
}
