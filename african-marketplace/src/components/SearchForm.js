import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";


 function SearchForm () {

     const onSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <div style={{ width: 300}}>
        <form onSubmit={onSubmit}>
            
            <Autocomplete 
                freeSolo="true"
                id="autocomplete"
                autoSelect="true"
                // replace testProduce
                options={testProduce.filter((option) => option.name)}
                renderInput={params => (
                    <TextField {...params} 
                    label="Search" 
                    margin="normal" 
                    variant="outlined"
                    InputProps={{ ...params.InputProps, type: "search"}}
                    />
                )}
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