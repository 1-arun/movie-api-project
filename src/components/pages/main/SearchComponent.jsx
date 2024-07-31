import React from "react";
import SearchIcon from "@mui/icons-material/Search";


const SearchComponent = ({ setValue, handleChange }) => {
  return (
    <div className="search-container">
      <div className="input-container flex-center">
        <input
          type="text"
          className="input-box"
          placeholder="Search..."
          onChange={(e) => handleChange(e)}
        />
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchComponent;
