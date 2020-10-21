import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";




 function SearchForm (items) {

     const [search, setSearch] = useState("")

    if( search !== "" && items.location.toLowerCase().filter( search.toLowerCase() )){
        return null;
    }

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };
    
    const onSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <div>
        <form onSubmit={onSubmit}>
            <TextField 
                label="Search"
                onChange={handleSearchChange}
                variant="outlined"
            />
            <Button variant="contained" type="submit">Search</Button>
        </form>
    </div>
    )
};

export default SearchForm;