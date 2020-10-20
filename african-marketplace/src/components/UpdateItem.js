import React, { useState } from 'react'
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

import axiosWithAuth from '../utils/axiosWithAuth'

const initFormVals = {
    id: null,
	name: '',
	description: '',
	price: null,
	location: '',
	category: '',
	URL: '',
	user_id: null
}

const UpdateItem = (props) => {
	const [open, setOpen] = useState(false);
	const [modalStyle] = useState(getModalStyle);
	const [itemData, setItemData] = useState(initFormVals);
	const [itemId, setItemId] = useState(null);
    axiosWithAuth()
    .post(`/items/${item.id}`, itemData)
    .then(res => console.log("Item updated:", res))
	.catch(err => console.log("Could not be updated", err))
	
	const handleOpen = (e) => {
		const title = props.data.name;
		const description = props.data.description;
		const price = props.data.price;
		const location = props.data.location;
		const category = props.data.category;

	
		setItemData({ 
			item_title: title, 
			item_description: description, 
			item_price: price, 
			item_location: location, 
			item_category: category, 
		});
		setItemId(itemId);
		setOpen(true);
	  };
	
	  const handleClose = () => {
		setOpen(false);
	  };
	
	  return (
		<>
		  <button onClick={handleOpen}>Edit</button>
		  <Modal open={open} onClose={handleClose}>
			<div style={modalStyle}>
			  <NewItem itemData={itemData} itemId={itemId} />
			</div>
		  </Modal>
		</>
	  );
}

export default UpdateItem;