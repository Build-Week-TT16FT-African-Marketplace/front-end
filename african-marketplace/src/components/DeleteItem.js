import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axiosWithAuth from '../utils/axiosWithAuth'
import { DEL_POST } from '../ReduxStore/actions/fetchItemsAction'

const DeleteItem = ({iid, name, content}) => {
    const dispatch = useDispatch()
    const { push } = useHistory()
    
    const delItem = e => {
        axiosWithAuth()
        .delete(`/items/${iid}`)
        .then(res => {
            console.log("Item deleted:", res)
            dispatch({ type: DEL_POST, payload: { name: name, content: content }})
            push('/Market')
        })
        .catch(err => console.log("Could not delete item", err))
        
    }

    return (
        <div>
            <button onClick={delItem}>
                Delete
            </button>
        </div>
    )
}

export default DeleteItem;