import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


 function SearchForm (items) {
    const {name, location, id} = items;

    const [filter, setFilter] = useState("");

    const handleSearchChange = (event) => {
        setFilter(event.target.value);
    };
    
    const onSubmit = (event) => {
        event.preventDefault();
    }

    items.name.includes(filter) && setFilter(items.id)
    return(
        <div style={{ width: 300}}>
        <form onSubmit={onSubmit}>
            <TextField 
                label="Search"
                onChange={handleSearchChange}
            />
            <Button variant="contained" type="submit">Search</Button>
        </form>
    </div>
    )
};

export default SearchForm;