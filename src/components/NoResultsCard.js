import React from "react";

const NoResultsCard = ({searchText}) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-xl p-8 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center">
          <svg
            className="w-16 h-16 mb-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <h5 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            No Results Found {searchText}
          </h5>
          <p className="mb-6 text-lg text-gray-600 dark:text-gray-400 text-center">
            Sorry, we couldn't find any matches for your search. Please try again
            with different keywords.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 text-lg text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoResultsCard;
