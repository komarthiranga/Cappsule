import React, { useState, useEffect } from "react";

const SearchBar = ({ setSearchTextValue, setLoader }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChangeText = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchInput && searchInput.trim().length !== 0) {
        setSearchInput(searchInput);
        setSearchTextValue(searchInput);
        setLoader(true);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [setLoader, searchInput, setSearchTextValue]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTextValue(searchInput);
  }

  return (
    <div className="mt-2">
      <form className="max-w-lg mx-auto">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-12 text-lg font-bold text-gray-900 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:border-blue-500 font-sans"
            placeholder="Type your medicine name here"
            required
            value={searchInput}
            onChange={handleChangeText}
          />
          <button
            type="submit"
            className="text-blue-900 absolute top-0 right-0 mt-2.5 mr-2.5 px-4 py-2 hover:underline focus:outline-none rounded-full text-lg font-bold font-sans"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
