import React from "react";
import "./Search.scss";
import { InputBase, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <Box className="searchContainer">
      <InputBase
        className="inputSearchBase"
        placeholder="Search for Products, Brands and More"
      />

      <SearchIcon className="searchIcon c-pointer" />
    </Box>
  );
};

export default Search;
