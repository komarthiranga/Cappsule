import React, { useState } from 'react';
import SearchBar from "@/components/SearchBar";
import SearchResults from "@/components/SearchResults";

export default function Home() {
  const [searchTextValue, setSearchTextValue] = useState(null);
  const [loader, setLoader] = useState(false);
  return (
    <>
      <SearchBar setSearchTextValue={setSearchTextValue} setLoader={setLoader} />
      <SearchResults searchText={searchTextValue} loader={loader} setLoader={setLoader} />
    </>
  );
}
