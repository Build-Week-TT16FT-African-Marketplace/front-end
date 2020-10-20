import React from "react";
import { useState, useSelector, useEffect } from "react";
import axiosWithAuth from "../utlis/axiosWithAuth";
import { connect } from "react-redux";
import { addProduct, fetchItems, updateProduct } from '../ReduxStore/actions/fetchItemsAction'

import TextField from "@material-ui/core/TextField";

const initFormVals = { 
    item_title: '', 
    item_description: '', 
    item_price: '', 
    item_location: '', 
    item_category: '', 
};

const NewItem = (props) => {
  const [formVal, setFormVal] = useState(initFormVals);

  useEffect(() => {
    props.fetchItems();
    console.log("test");
  }, [isClicked]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = window.localStorage.getItem("user_id");
    const data = formVal;

    if (props) {
      // Edit item
      const itemId = props.itemId;
        props.updateProduct(itemId);
    } else {
      // Create a new item listing
      data.user_id = id;
      props.addProduct(formVal)
    }
    props.updateProduct(formVal);
    if (isClicked === false) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  };
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
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            name="item_title"
            onChange={handleChanges}
            value={formVal.item_title}
            id="outlined-basic"
            label="(Post Title Here)"
            variant="outlined"
          />

          <TextField
            label="description"
            multiline
            rows={6}
            variant="outlined"
            name="item_description"
            value={formVal.item_description}
            placeholder="(Post item description Here)"
            onChange={handleChanges}
          />

        <TextField
            variant="outlined"
            name="item_price"
            value={formVal.item_price}
            placeholder="(Post item price Here)"
            onChange={handleChanges}
          />

        <TextField
            variant="outlined"
            name="item_location"
            value={formVal.item_location}
            placeholder="(Post seller location Here)"
            onChange={handleChanges}
          />

        <TextField
            variant="outlined"
            name="item_category"
            value={formVal.item_category}
            placeholder="(Post item category Here)"
            onChange={handleChanges}
          />
        </div>

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
    return {
      forSale: state.forSale,
      newItem: state.newItem
    };
  };
  
  export default connect(mapStateToProps, { addProduct, fetchItems, updateProduct })(NewItem);