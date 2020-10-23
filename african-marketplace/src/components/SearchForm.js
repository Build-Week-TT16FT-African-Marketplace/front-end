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
        <form className="searchForm" onSubmit={onSubmit}>
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
//remove test data later
const testProduce = [
    {
        id: 1,
        name: "corn",
        description: "an ear of corn",
        price: "$.46",
        location: "Nairobi",
        category: "vegetable",
        URL: "URL",
        user_id: "userId"
    },
    {
        id: 2,
        name: "eggplant",
        description: "an eggplant",
        price: "$.75",
        location: "Nairobi",
        category: "vegetable",
        URL: "URL",
        user_id: "userId"
    },
    {
        id: 3,
        name: "carrot",
        description: "a carrot",
        price: "$.50",
        location: "Mogadishu",
        category: "vegetable",
        URL: "URL",
        user_id: "userId"
    }
];
