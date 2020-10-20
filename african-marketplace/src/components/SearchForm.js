import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

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

function SearchForm () {
return(
    <div style={{ width: 300}}>
        <Autocomplete 
            id="search"
            options={testProduce.map((option) => option.name)}
            renderInput={(params) => (
                <TextField {...params} label="search" margin="normal" variant="outlined"/>
            )}
        />
    </div>
    )
};

export default SearchForm;