import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux'
import axiosWithAuth from '../utils/axiosWithAuth'

//
import {
ADD_ITEM_START,
ADD_ITEM_SUCCESS,
ADD_ITEM_ERROR
} from '../ReduxStore/actions/fetchItemsAction'

//
// import { connect } from "react-redux";
// import { addProduct, fetchItems, updateProduct } from '../ReduxStore/actions/fetchItemsAction'

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
  const dispatch = useDispatch();

  // useEffect(() => {
  //   props.fetchItems();
  //   console.log("test");
  // }, [isClicked]);

  useEffect(() => {
    if(props.itemData) {
      setFormVal(props.itemData)
    }
    console.log("test");
  }, [props]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_ITEM_START })
    const id = window.localStorage.getItem("uid");
    const data = formVal;

    if (props) {
      // Edit item
      const itemId = props.itemId;
       axiosWithAuth()
        .put(`/items/${itemId}`, data)
        .then(res => {
          if (res.statusText === "Accepted") {
            console.log(res);
            window.location = '/market'
          }
        })
        .catch( err => console.log(err))
    } else {
      data.uid = id;
      axiosWithAuth()
      .post(`/items`, data)
      .then( res => {
        dispatch({ type: ADD_ITEM_SUCCESS, payload: res.data })
      })
      .catch( err => {
        dispatch({ type: ADD_ITEM_ERROR })
        setFormVal(initFormVals)
        console.log(err)
      })
    }
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
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            name="item_title"
            onChange={handleChanges}
            value={formVal.item_title}
            id="outlined-basic"
            label="Item Name"
            variant="outlined"
          /> <br /> <br />

          <TextField
            label="Description"
            multiline
            rows={6}
            variant="outlined"
            name="item_description"
            value={formVal.item_description}
            placeholder="Item Description"
            onChange={handleChanges}
          />  <br /> <br />

        <TextField
            variant="outlined"
            name="item_price"
            value={formVal.item_price}
            placeholder="Item Price"
            onChange={handleChanges}
          /> <br /> <br />

        <TextField
            variant="outlined"
            name="item_location"
            value={formVal.item_location}
            placeholder="Seller Location"
            onChange={handleChanges}
          /> <br /> <br />

        <TextField
            variant="outlined"
            name="item_category"
            value={formVal.item_category}
            placeholder="Item Category"
            onChange={handleChanges}
          /> <br /> <br />
                  <TextField
            variant="outlined"
            name="item_url"
            value={formVal.item_URL}
            placeholder="test purpose only"
            onChange={handleChanges}
          /> <br /> <br />
                  <TextField
            variant="outlined"
            name="item_id"
            value={formVal.item_id}
            placeholder="testpurposeonly"
            onChange={handleChanges}
          /> <br /> <br />
        </div>

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewItem;

// const mapStateToProps = (state) => {
//     return {
//       forSale: state.forSale,
//       newItem: state.newItem
//     };
//   };
  
//   export default connect(mapStateToProps, { addProduct, fetchItems, updateProduct })(NewItem);