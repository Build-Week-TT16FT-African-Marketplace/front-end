import React from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

const DeleteItem = (item) => {
    
    axiosWithAuth()
    .delete(`/items/${item.id}`)
    .then(res => console.log("Item deleted:", res))
    .catch(err => console.log("Could not delete item", err))
}

export default DeleteItem;