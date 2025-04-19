import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchTheWeb = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim() !== '') {
      const encodedQuery = encodeURIComponent(query.trim());
      window.open(`https://www.google.com/search?q=${encodedQuery}`, '_blank');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#082567] to-[#021a3a] flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Search The Web
        </h1>
        <div className="flex gap-3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your search here..."
            className="flex-grow px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition text-lg"
          >
            Search
          </button>
        </div>
      </div>

      <Link
        to="/Landing_page"
        className="mt-10 bg-[#0073e6] text-white text-2xl px-8 py-4 rounded-2xl hover:bg-[#005bb5] transition"
      >
        Back
      </Link>
    </div>
  );
};

export default SearchTheWeb;
