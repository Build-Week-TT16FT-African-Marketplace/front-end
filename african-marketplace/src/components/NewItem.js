import React from "react";
import { useState, useSelector, useEffect } from "react";
import axiosWithAuth from "../utlis/axiosWithAuth";

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

  // const user = useSelector(state => state.user)
  useEffect(() => {
    if (props.postData) {
      setFormVal(props.postData);
    }
  }, [props]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = window.localStorage.getItem("user_id");
    const data = formVal;

    if (props) {
      // Edit item
      const itemId = props.itemId;
      axiosWithAuth()
        .put(`/items/${itemId}`, data)
        .then((res) => {
          if (res.statusText === "Accepted") {
            console.log(res);
            window.location = "/market";
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // Create a new item listing
      data.user_id = id;
      axiosWithAuth()
        .post(`/items/additem`, data)
        .then((res) => {
            //set item to global storage
            console.log(res)
        })
        .catch((err) => {
          setFormVal(initFormVals);
          console.log(err);
        });
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

export default NewItem;
