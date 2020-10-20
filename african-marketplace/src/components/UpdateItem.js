import React, { useState } from 'react'

import axiosWithAuth from '../utils/axiosWithAuth'

const initialItem = {
    id: null,
	name: '',
	description: '',
	price: null,
	location: '',
	category: '',
	URL: '',
	user_id: null
}

const UpdateItem = (item) => {
    const [editedItem, setEditedItem] = useState(initialItem)
    axiosWithAuth()
    .post(`/items/${item.id}`, editedItem)
    .then(res => console.log("Item deleted:", res))
    .catch(err => console.log("Could not delete item", err))
}

export default UpdateItem;