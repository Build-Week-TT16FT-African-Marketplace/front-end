import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import NewItem from "./NewItem";
import { connect, useDispatch } from 'react-redux';
import { updateProduct } from "../ReduxStore/actions";
import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";

const initFormVals = {
  name: "",
  description: "",
  price: "",
  location: "",
  category: "",
};

const UpdateItem = (props) => {
  const { updateProduct, cid } = props;
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const [formVal, setFormVal] = useState(initFormVals);
  const [itemId, setItemId] = useState(null);

  const classes = useStyles();

  const handleOpen = (e) => {
    const title = props.data.name;
    const description = props.data.description;
    const price = props.data.price;
    const location = props.data.location;
    const category = props.data.category;
	
		setFormVal({ 
			name: title, 
			description: description, 
			price: price, 
			location: location, 
			category: category, 
		});
		setItemId(itemId);
		setOpen(true);
	  };
	
	  const handleClose = () => {
		setOpen(false);
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      // const id = window.localStorage.getItem("uid");
      const data = formVal;
      console.log('this is the data:', data)
      updateProduct( cid, data );
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
		<>
		  <button onClick={handleOpen}>Edit</button>
		  <Modal open={open} onClose={handleClose}>
			<div style={modalStyle} className={classes.paper}>
      <form onSubmit={handleSubmit}>
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
          Submit
        </button>
      </form>
			</div>
		  </Modal>
		</>
	  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function getModalStyle() {
  const top = 50 + Math.round(Math.random() * 20) - 10;
  const left = 50 + Math.round(Math.random() * 20) - 10;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const mapStateToProps = (state) => {
  return {
    forSale: state.fetchItems.forSale,
  };
};

export default connect(mapStateToProps, { updateProduct })(UpdateItem);
