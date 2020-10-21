import React, { useState, useEffect } from 'react'
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import NewItem from './NewItem'

const initFormVals = {
	name: '',
	description: '',
	price: '',
	location: '',
	category: '',
}

const UpdateItem = (props) => {
	const [open, setOpen] = useState(false);
	const [modalStyle] = useState(getModalStyle);
	const [itemData, setItemData] = useState(initFormVals);
	const [itemId, setItemId] = useState(null);
	

	
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