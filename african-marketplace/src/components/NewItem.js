import React from "react";
import { useState} from "react";
import { useDispatch } from 'react-redux'
import { addProduct } from '../ReduxStore/actions/fetchItemsAction'


import TextField from "@material-ui/core/TextField";

const initFormVals = { 
    name: '', 
    description: '', 
    price: '', 
    location: '', 
    category: '', 
};

const NewItem = (props) => {
  const [formVal, setFormVal] = useState(initFormVals);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const id = window.localStorage.getItem("uid");
    const data = formVal;
    console.log('this is the data:', data)
    dispatch(addProduct(data, setFormVal, initFormVals));

    }

  const handleChanges = (e) => {
    e.persist();
    const name = e.target.name;
    const value = e.target.value;
    setFormVal({
        ...formVal,
        [name]: value,
      });
    console.log("These are the new form values:", formVal);
  }
  
  return (
    <div>
      <form className="newItemForm" onSubmit={handleSubmit}>
        <div>
          <TextField
            name="name"
            onChange={handleChanges}
            value={formVal.name}
            id="outlined-basic"
            label="Item Name"
            variant="outlined"
          /> <br /> <br />

          <TextField
            label="Description"
            multiline
            rows={6}
            variant="outlined"
            name="description"
            value={formVal.description}
            placeholder="Item Description"
            onChange={handleChanges}
          />  <br /> <br />

        <TextField
            variant="outlined"
            name="price"
            value={formVal.price}
            placeholder="Item Price"
            onChange={handleChanges}
          /> <br /> <br />

        <TextField
            variant="outlined"
            name="location"
            value={formVal.location}
            placeholder="Seller Location"
            onChange={handleChanges}
          /> <br /> <br />

        <TextField
            variant="outlined"
            name="category"
            value={formVal.category}
            placeholder="Item Category"
            onChange={handleChanges}
          /> <br /> <br />
        </div>

        <button type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default NewItem;