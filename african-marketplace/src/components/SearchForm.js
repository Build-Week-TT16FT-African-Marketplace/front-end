import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import PageviewIcon from "@material-ui/icons/Pageview";

const SearchForm = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(null);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
    if (searchInput.length > 0) {
      const result = props.items.filter((item) => {
        console.log("LOOK HERE itemname:", item.name)
        console.log("LOOK HERE searchinput:", searchInput)
        return item.name.toUpperCase().includes(searchInput.toUpperCase());
      });
      setFilteredPosts(result);
    }
  };

  useEffect(() => {
    if (filteredPosts !== null) {
      props.toggleSearch(filteredPosts);
    }
  }, [filteredPosts]);

  return (
    <div>
      <TextField
        type="text"
        placeholder="Search"
        value={searchInput}
        onChange={handleInputChange}
        variant="outlined"
      />
    </div>
  );
};

export default SearchForm;