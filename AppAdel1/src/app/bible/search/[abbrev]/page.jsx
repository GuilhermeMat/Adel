import Search from "@/components/Search";
import { LoadingProvider } from "@/context/LoadingContext";
import React from "react";

export default function SearchPage() {
  return (
    <LoadingProvider>
      <Search />
    </LoadingProvider>
  );
}
