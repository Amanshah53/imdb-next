"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e) =>{
        e.preventDefault();
        router.push(`/search/${search}`);
  }
  return (
    <form className="flex justify-between px-5 max-w-6xl mx-auto" onSubmit={handleSubmit}>
      <input
        className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1"
        type="text"
        placeholder="Search Keywords..."
        onChange={e => setSearch(e.target.value)}
      />
      <button className="text-amber-600 disabled:text-gray-400" disabled={search === ''}>
        Search
      </button>
    </form>
  );
}
