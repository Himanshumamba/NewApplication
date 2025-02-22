import React, { useState } from "react";
import { useNewsStore } from "../store/useNewsStore";

const SearchBar: React.FC = () => {
  const { setQuery, fetchNews } = useNewsStore();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    setQuery(searchTerm);
    fetchNews();
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        className="search-input"

        placeholder="Search news..Bitcoin.." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <button  className="search-button"onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
