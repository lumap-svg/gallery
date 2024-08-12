import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
export default function Search() {
  return (
    <form className="flex justify-center md:justify-between">
      <input
        type="text"
        placeholder="Search"
        className="bg-white p-2 w-[260px] sm:w-80 text-xl text-black rounded-xl"
      />
    </form>
  );
}
